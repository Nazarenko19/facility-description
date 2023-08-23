import { Box, Heading, Table, Tbody, Tr, Th, Td, TableContainer, Link } from "@chakra-ui/react";
import { tableData } from "./constants";

export const OrganizationInfo = () => {
	const renderRows = () =>
		tableData.map(({ id, title, value }) => {
			const link = `https://${value}`;
			const isLink = id === "link";

			return (
				<Tr key={id}>
					<Th bgColor="#eeeef0">{title}</Th>
					<Td bgColor="#faf9fb">{isLink ? <Link href={link}>{value}</Link> : value}</Td>
				</Tr>
			);
		});

	return (
		<Box>
			<Heading as="h3" mb={5} color="#2b272c" fontSize="1rem" textTransform="uppercase">
				Organization Info
			</Heading>
			<TableContainer borderRadius={8}>
				<Table variant="simple" size="md">
					<Tbody>{renderRows()}</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};
