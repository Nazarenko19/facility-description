"use client";

import { Container, HStack, Divider } from "@chakra-ui/react";
import { FacilityDescription, Structures, OrganizationInfo, DMRTable, TRITree } from "@/components";

const Home = () => (
	<Container
		as="main"
		maxW={960}
		minW={960}
		minH="100%"
		mr="auto"
		ml="auto"
		bgColor="#fcfcfc"
		pl={16}
		pr={16}
		pt={12}
		pb={12}
	>
		<FacilityDescription />
		<Divider mb={8} mt={8} />

		<HStack gap={12} alignItems="flex-start" justify="space-between">
			<OrganizationInfo />
			<Structures />
		</HStack>

		<Divider mb={8} mt={8} />
		<DMRTable />
		<TRITree />
	</Container>
);

export default Home;
