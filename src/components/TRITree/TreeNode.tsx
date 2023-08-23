import {
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Highlight,
} from "@chakra-ui/react";

type TreeNodeProps = {
	isTitle?: boolean;
	label: string;
	children: any;
};

export const TreeNode = ({ label, children, isTitle = false }: TreeNodeProps) => {
	const isHasChildren = !!children?.length;

	const renderAccordion = (hasPadding = false) => {
		const paddings = {
			pr: 2,
			pl: 2,
			pt: 2,
			pb: 2,
		};

		return (
			<Box flex="1" textAlign="left" {...(hasPadding && paddings)}>
				{label}{" "}
				{!isTitle && (
					<Highlight
						query={["#pounds (1000)"]}
						styles={{ px: "2", py: "1", rounded: "full", bg: "#eeeef0" }}
					>
						#pounds (1000)
					</Highlight>
				)}
			</Box>
		);
	};

	return (
		<AccordionItem>
			<h2>
				{isHasChildren ? (
					<AccordionButton>
						{renderAccordion()}
						<AccordionIcon />
					</AccordionButton>
				) : (
					renderAccordion(true)
				)}
			</h2>

			<AccordionPanel pb={4}>{children}</AccordionPanel>
		</AccordionItem>
	);
};
