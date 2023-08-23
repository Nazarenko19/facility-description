import { structuresMockData } from "./mock";

const { settlingTanks, settlingTankArea, numOfProcessTanks, processTankArea, coolingTowers } =
	structuresMockData;

export const tableData = [
	{
		id: "settingsTanks",
		title: "Number of settling tanks",
		value: settlingTanks,
	},
	{
		id: "settlingTankArea",
		title: "Settling tank area",
		value: settlingTankArea,
	},
	{
		id: "numOfProcessTanks",
		title: "Number of process tanks",
		value: numOfProcessTanks,
	},
	{
		id: "processTankArea",
		title: "Process tank area",
		value: processTankArea,
	},
	{
		id: "coolingTowers",
		title: "Cooling towers",
		value: coolingTowers,
	},
];
