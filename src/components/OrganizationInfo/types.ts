type OrganizationBaseData = {
	ownerType: string | null;
	url: string | null;
	phoneNumber: string;
	email: string;
};

export type OrganizationWithCompanyOwner = OrganizationBaseData & {
	companyOwner: string;
	facilities: number;
};

export type Organization = OrganizationBaseData & { companyOwner: null; facilities?: number };
