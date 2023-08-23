import { Box, Heading, Table, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { tableData } from "./constants";

export const Structures = () => {
	const renderRows = () =>
		tableData.map(({ id, title, value }) => (
			<Tr key={id}>
				<Th bgColor="#eeeef0">{title}</Th>
				<Td bgColor="#faf9fb" textAlign="center">
					{value}
				</Td>
			</Tr>
		));

	return (
		<Box>
			<Heading as="h3" mb={5} color="#2b272c" fontSize="1rem" textTransform="uppercase">
				Structures
			</Heading>
			<TableContainer borderRadius={8}>
				<Table variant="simple" size="md">
					<Tbody>{renderRows()}</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};
