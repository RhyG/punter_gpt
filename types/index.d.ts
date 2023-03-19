declare type RiskTolerance = "low" | "medium" | "high";

declare type Runner = {
  name: string;
  saddle_number: number;
  age: string;
  trainer: string;
  jockey: string;
  jockey_weight: string;
  previous_results: string;
  win_percent: string;
  place_percent: string;
  fluctuations: Fluctuation[];
};

declare type Fluctuation = {
  price: number;
  saddle_number: number;
  date_created: string;
};

declare type TrackInformation = {
  distance: string;
  condition: string;
  surface: string;
  classes: string[];
};

declare interface FormGuideRunner {
  Name: string;
  Country: string;
  Age: number;
  Sex: string;
  Colour: string;
  FoalingDate: string;
  Barrier: number;
  SaddleNumber: number;
  BestTime: string;
  Status: string;
  Sire: string;
  Dam: string;
  SireOfDam: string;
  TrainerName: string;
  TrainerLocation: string;
  Owners: string;
  Colours: string;
  Blinkers: string;
  PrizeMoneyWon: number;
  LastFourStarts: string;
  LastTenStarts: string;
  Weight: Weight;
  Jockey: Jockey;
  Row: string;
  ClassCountry: string;
  ClassMetro: string;
  Statistics?: StatisticsEntity[] | null;
  PreviousForm?: PreviousFormEntity[] | null;
  HorseID: string;
  RunnerComment: string;
  SilksURL: string;
  Emergency: boolean;
  SpeedMap: SpeedMap;
  WinPrice: number;
  PlacePrice: number;
  HarnessPosition: string;
  stats: Stats;
  silkUrl: string;
  totalWeight: string;
}

export interface Weight {
  Allocated: number;
  WeightInPounds: number;
  Total: number;
}

export interface Jockey {
  JockeyID: string;
  Name: string;
  ApprenticeIndicator: string;
  AllowanceWeight: number;
}

export interface StatisticsEntity {
  Type: string;
  Total: string;
  Firsts: string;
  Seconds: string;
  Thirds: string;
  Placings: string;
  BestMileRate: string;
}

export interface PreviousFormEntity {
  Track: string;
  Date: string;
  RaceNumber: string;
  RaceTime: string;
  Track4Char: string;
  BestTimeOfNight: string;
  DaysSince: number;
  RaceClass: string;
  NumberOfRunners: number;
  Finish: number;
  Margin: string;
  Distance: number;
  TrackCondition: string;
  TimeRan: string;
  Jockey: string;
  Barrier: number;
  BodyWeight: number;
  WeightCarried: number;
  StartingPrice: string;
  RaceWinner: string;
  RaceSecond: string;
  RaceThird: string;
  Row: string;
  StartType: string;
  MileRate: string;
  LastMile: string;
  LimitWeight: string;
  RacePrizeMoney: number;
  FirstSplit: string;
  Comment: string;
  InRun: string;
  SectionalDistance: number;
  SectionalTime: string;
}

export interface SpeedMap {
  Speed: number;
}

export interface Stats {
  trackPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  distancePerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  allPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  jumpPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  firstUpPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  secondUpPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  firmPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  softPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  goodNewPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  heavyNewPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  syntheticPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  turfPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  winPercent: string;
  placePercent: string;
  countryPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  metroPerformance: TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance;
  bestMilePerformance: BestMilePerformance;
  trackAndDistancePerformance: TrackAndDistancePerformance;
  boxHistory?: BoxHistoryEntity[] | null;
}
export interface TrackPerformanceOrDistancePerformanceOrAllPerformanceOrJumpPerformanceOrFirstUpPerformanceOrSecondUpPerformanceOrFirmPerformanceOrSoftPerformanceOrGoodNewPerformanceOrHeavyNewPerformanceOrSyntheticPerformanceOrTurfPerformanceOrCountryPerformanceOrMetroPerformance {
  hasStarts: boolean;
  placementString: string;
  placementStringNeds: string;
  starts: number;
  wins: number;
  seconds: number;
  thirds: number;
}
export interface BestMilePerformance {
  hasStarts: boolean;
  placementString: string;
  placementStringNeds: string;
  starts: number;
  wins: number;
  seconds: number;
  thirds: number;
  rate: string;
}
export interface TrackAndDistancePerformance {
  hasStarts: boolean;
  placementString: string;
  placementStringNeds: string;
  starts: number;
  wins: number;
  seconds: number;
  thirds: number;
  times?: null[] | null;
}
export interface BoxHistoryEntity {
  Type: string;
  Total: string;
  Firsts: string;
  Seconds: string;
  Thirds: string;
}
