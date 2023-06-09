import * as dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";
import process from "process";
import { Configuration, OpenAIApi } from "openai";

import { Runner, RiskTolerance } from "index";

import { SYSTEM_PROMPT } from "./message-content";
import { interactive } from "./v2";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const GPT_3 = "gpt-3.5-turbo";
const GPT_4 = "gpt-4";

function extractRace(data: string) {
  const injectedData = data
    .split(`"props":{"pageProps":`)
    .join()
    .split(`,"__N_SSP":true`)[0]
    .split(`type="application/json">{,`);
  const parsed = JSON.parse(injectedData[1]);
  const race = parsed.initialReduxState.race;
  return race;
}

function generatePrompt(riskTolerance: RiskTolerance, raceData: string, budget: string | undefined, exotics: string[]) {
  const budgetAsDollar = `$${budget}`;

  let question: string;

  switch (riskTolerance) {
    case "low":
      question = "I want to play it safe, can you recommend me a low risk betting strategy for this race?";
      break;
    case "medium":
      question =
        "I want to take a small amount of risk to increase my potential winning a bit, what bets would you suggest?";
      break;
    case "high":
      question =
        "I want to take a high risk to have a high winning potential, what bets should I place? Please include any recommended exotic bets.";
      break;
  }

  const budgetRequest = budget
    ? ` I have a budget of ${budgetAsDollar} and would like to use all of it this race.`
    : "";

  const allowExotics = exotics.length > 0;

  const exoticsRequest = allowExotics
    ? `I am willing to place exotics, please also consider placing the follow exotics: ${exotics.join(
        ", "
      )}. Not all are mandatory, but if you think any would be smart given your assessment include them.`
    : "";

  const prompt = `${question}${budgetRequest} ${exoticsRequest}\nHere is the race information:\n${raceData}`;
  console.log(prompt);

  return prompt;
}

async function run() {
  const { url, riskTolerance, budget, model: _model, exotics } = await interactive();

  const model = _model === "3" ? GPT_3 : GPT_4;

  console.log(`Running PunterGPT with model ${model}, risk level ${riskTolerance}\n`);

  const response = await fetch(url);
  const data = await response.text();

  const race = extractRace(data);

  const runners: Runner[] = [];

  // @ts-ignore
  race.Runners.forEach((runner) => {
    const { Name, Age, TrainerName, Jockey, Weight, PreviousForm, stats, SaddleNumber } = runner;

    // @ts-ignore
    const previousResults = PreviousForm.map((form) => {
      return `${form.Finish}/${form.NumberOfRunners}`;
    });

    runners.push({
      name: `${Name}`,
      saddle_number: SaddleNumber,
      age: `${Age} years old`,
      trainer: `${TrainerName}`,
      jockey: `${Jockey.Name}`,
      jockey_weight: `${Weight.Total}`,
      previous_results: `${previousResults.slice(0, 5)}`,
      win_percent: `${stats?.winPercent ?? "Unavailable"}`,
      place_percent: `${stats?.placePercent ?? "Unavailable"}`,
      fluctuations: [],
    });
  });

  // @ts-ignore
  race.fluctuations.forEach((fluctuation: Fluctuation) => {
    const horse = runners.find((h) => {
      return h.saddle_number === fluctuation.saddle_number;
    });
    horse?.fluctuations.push(fluctuation);
  });

  const final = {
    trackInformation: {
      distance: race.distance,
      condition: race.Meeting.TrackCondition,
      surface: race.Meeting.TrackSurface,
      classes: race.Classes,
    },
    runners: runners.map((horse) => ({
      ...horse,
      fluctuations: horse?.fluctuations.slice(-3),
    })),
  };

  const prompt = generatePrompt(riskTolerance, JSON.stringify(final), budget, exotics);

  try {
    const response = await openai.createChatCompletion({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
      max_tokens: 2000,
      temperature: 1,
      stream: false,
    });

    //@ts-ignore
    console.log(response.data.choices[0].message.content);
  } catch (err) {
    console.log("ChatGPT error: " + err);
    return err;
  }
}

run();
