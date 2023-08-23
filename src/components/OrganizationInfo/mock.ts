import { Organization, OrganizationWithCompanyOwner } from "./types";

export const organizationMockData: Organization | OrganizationWithCompanyOwner = {
	ownerType: "Privately Owned Facility",
	companyOwner: "South Yard",
	facilities: 1,
	url: "www.cullman.com",
	phoneNumber: "(999) 123 1234",
	email: "name@example.com",
};
