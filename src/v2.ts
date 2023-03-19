import inquirer from "inquirer";
import chalk from "chalk";
import { RiskTolerance } from "index";

type Response = {
  url: string;
  budget: string;
  riskTolerance: RiskTolerance;
  model: string;
  exotics: string[];
};

const askRiskLevel = async (): Promise<RiskTolerance> => {
  const { riskLevel } = await inquirer.prompt([
    {
      type: "list",
      name: "riskLevel",
      message: chalk.blue("Select a Risk level:"),
      choices: ["low", "medium", "high"],
    },
  ]);

  return riskLevel;
};

export const interactive = async (): Promise<Response> => {
  const { url, budget } = await inquirer.prompt([
    {
      type: "input",
      name: "url",
      message: chalk.blue("Enter form guide URL:"),
    },
    {
      type: "input",
      name: "budget",
      message: chalk.blue("Enter Budget:"),
    },
  ]);

  const riskLevel = await askRiskLevel();

  let exoticsAllowed: string[] = [];

  const getExotics = async (): Promise<void> => {
    const { exotics } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "exotics",
        message: chalk.blue("Select Exotics allowed (hit enter to skip or confirm selections):"),
        choices: [
          "Trifecta",
          "First Four",
          "Quinella",
          "Exacta",
          "Quaddie",
          new inquirer.Separator(),
          { name: "No exotics", value: "none" },
        ],
      },
    ]);

    if (exotics.includes("none")) {
      exoticsAllowed = [];
      return;
    }

    exoticsAllowed.push(...exotics.filter((option: string) => option !== "none"));
    return;
  };

  await getExotics();

  const { model } = await inquirer.prompt([
    {
      type: "list",
      name: "model",
      message: chalk.blue("ChatGPT model (results of 3 are on average poorer, but API is more available):"),
      choices: ["3", "4"],
    },
  ]);

  return {
    url,
    budget,
    riskTolerance: riskLevel,
    model,
    exotics: exoticsAllowed,
  } as Response;
};
