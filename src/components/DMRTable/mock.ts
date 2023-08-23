import { DMR } from "./types";

export const DMRMockData: DMR[] = [
	{
		parameterName: "Chlorine, total residual",
		limitValue: 0.1,
		reportedValue: 0.1,
		reportedDate: "1/1/23",
		unit: "mg/L",
		violation6Months: false,
		notes: "Not measured",
	},
	{
		parameterName: "BOD, 5-day, 20 deg. C",
		limitValue: 90_000,
		reportedValue: 90_000,
		reportedDate: "1/1/23",
		unit: "lb/d",
		violation6Months: false,
		notes: "",
	},
];
