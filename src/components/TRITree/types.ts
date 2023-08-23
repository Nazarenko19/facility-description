export type TRIData = {
	title: string;
	pounds: number;
	children?: TRIData[];
};

export type TRI = {
	year: number;
	data: TRIData[];
};
