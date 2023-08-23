import { DMRMockData } from "./mock";
import { Box, Heading, Table, Tbody, Tr, Th, Td, TableContainer, Thead } from "@chakra-ui/react";

export const DMRTable = () => (
	<Box mb={8}>
		<Heading as="h3" mb={5} color="#2b272c" fontSize="1rem" textTransform="uppercase">
			DMR Data
		</Heading>
		<TableContainer borderRadius={8}>
			<Table variant="simple">
				<Thead>
					<Tr bgColor="#eeeef0">
						<Th>Parameter</Th>
						<Th>Limit Value</Th>
						<Th>Reported Value</Th>
						<Th>Reported Date</Th>
						<Th>Unit</Th>
						<Th>Violation past 6 months</Th>
						<Th>Notes</Th>
					</Tr>
				</Thead>
				<Tbody>
					{DMRMockData.map((entry) => (
						<Tr key={entry.parameterName} bgColor="#faf9fb">
							<Td>{entry.parameterName}</Td>
							<Td isNumeric>{entry.limitValue}</Td>
							<Td isNumeric>{entry.reportedValue}</Td>
							<Td>{entry.reportedDate}</Td>
							<Td>{entry.unit}</Td>
							<Td>{entry.violation6Months}</Td>
							<Td>{entry.notes}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	</Box>
);
