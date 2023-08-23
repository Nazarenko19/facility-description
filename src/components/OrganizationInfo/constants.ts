import { organizationMockData } from "./mock";

export const tableData = [
	{
		id: "ownershipType",
		title: "Ownership Type",
		value: organizationMockData.ownerType,
	},
	{
		id: "companyOwner",
		title: "Company Owner",
		value: organizationMockData.companyOwner ?? "N/A",
	},
	{
		id: "facilities",
		title: "Number of Facilities",
		value: organizationMockData.facilities,
	},
	{
		id: "link",
		title: "Website",
		value: organizationMockData.url,
	},
	{
		id: "phoneNumber",
		title: "Phone",
		value: organizationMockData.phoneNumber,
	},
	{
		id: "email",
		title: "E-mail",
		value: organizationMockData.email,
	},
];
