import { Heading, Accordion, Box, VStack } from "@chakra-ui/react";
import { TRIMockData } from "./mock";
import { TreeNode } from "./TreeNode";
import { TRI, TRIData } from "./types";

export const TRITree = () => {
	const renderTree = (nodes: TRIData[]) =>
		nodes.map((node) => (
			// key provided as Math.random because we use mock data, with real data we should use id prop for that
			<TreeNode key={Math.random()} label={node.title}>
				{node.children && renderTree(node.children)}
			</TreeNode>
		));

	const renderTreeTitle = (nodes: TRI[]) =>
		nodes.map((node) => {
			const titleLabel = `Year ${node.year}`;
			// key provided as Math.random because we use mock data, with real data we should use id prop for that
			return (
				<TreeNode key={Math.random()} label={titleLabel} isTitle>
					{renderTree(node.data)}
				</TreeNode>
			);
		});

	return (
		<Box>
			<Heading as="h3" mb={5} color="#2b272c" fontSize="1rem" textTransform="uppercase">
				TRI Tree
			</Heading>
			<VStack mt={4} align="flex-start">
				<Accordion w="100%" allowMultiple>
					{renderTreeTitle(TRIMockData)}
				</Accordion>
			</VStack>
		</Box>
	);
};
