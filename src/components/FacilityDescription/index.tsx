import { useState } from "react";
import Image from "next/image";
import { IconButton, HStack, Box, Flex, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { LuMapPin } from "react-icons/lu";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { facilityDescriptionMockData } from "./mock";

export const FacilityDescription = () => {
	const [isActiveStar, setIsActiveStar] = useState<boolean>(false);
	const handleStarButton = () => setIsActiveStar((prevState) => !prevState);

	return (
		<Flex justify="space-between" gap={12}>
			<Box>
				<HStack align="center" mb={4}>
					<Heading color="#2b272c" fontSize="2.375rem" justify="center">
						{facilityDescriptionMockData.facilityName}
					</Heading>

					<IconButton
						variant="unstyled"
						onClick={handleStarButton}
						icon={
							<Icon
								// The isActiveStar variable is only provided for the example of displaying a star icon ("star/unstar")
								as={
									facilityDescriptionMockData.starred || isActiveStar ? AiFillStar : AiOutlineStar
								}
								color="#FFD500"
								width={10}
								height={10}
							/>
						}
					/>
				</HStack>

				<Flex alignItems="center" gap={2} mb={10}>
					<Icon as={LuMapPin} color="#297c3b" width={6} height={6} />
					<Tooltip
						hasArrow
						placement="right"
						bg="#4d4951"
						color="#fdfcfd"
						p={1}
						pr={2}
						pl={2}
						borderRadius={12}
						fontSize="0.875rem"
						label={`Lat: ${facilityDescriptionMockData.latitude}, Long: ${facilityDescriptionMockData.longitude}`}
					>
						<Box backgroundColor="#f3f1f5" pt={1} pb={1} pl={3} pr={3} borderRadius={16}>
							<Text color="#423e45">
								{facilityDescriptionMockData.street}, {facilityDescriptionMockData.city},{" "}
								{facilityDescriptionMockData.zip} {facilityDescriptionMockData.state},{" "}
								{facilityDescriptionMockData.country}
							</Text>
						</Box>
					</Tooltip>
				</Flex>
				<Box>
					<Heading as="h3" mb={5} color="#2b272c" fontSize="1rem" textTransform="uppercase">
						About Facility
					</Heading>
					<Text align="justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</Text>
				</Box>
			</Box>

			<Image
				src="/factory.jpeg"
				alt="Factory"
				height={385}
				width={385}
				style={{
					height: "auto",
					objectFit: "cover",
					borderRadius: 6,
				}}
			/>
		</Flex>
	);
};
