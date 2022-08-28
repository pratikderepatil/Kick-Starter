import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const HomepageComponent = ({ data }) => {
	console.log(data);
	return (
		<>
			<Heading as={"h2"} size="lg" p={"3vh"}>
				Bring a creative project to life.
			</Heading>
			<Text p={3}>ON KICKSTARTER:</Text>
			<Flex>
				<Flex flexDirection={"column"} borderWidth="1px" w="23vw" p={5}>
					<Heading as={"h3"} fontWeight="normal" color={"green.500"}>
						225,613
					</Heading>
					<Text>projects funded</Text>
				</Flex>

				<Flex flexDirection={"column"} borderWidth="1px" w="23vw" p={5}>
					<Heading as={"h3"} fontWeight="normal" color={"green.500"}>
						$6,217,155,535
					</Heading>
					<Text>towards creative work</Text>
				</Flex>

				<Flex flexDirection={"column"} borderWidth="1px" w="23vw" p={5}>
					<Heading as={"h3"} fontWeight="normal" color={"green.500"}>
						69,421,715
					</Heading>
					<Text>pledges</Text>
				</Flex>
			</Flex>
			<Grid templateColumns="repeat(3, 1fr)" gap={6} m="auto" p={"5vh 10vw"}>
				{data?.map((ele) => {
					return (
						<Box w={"90%"} key={ele.id} textAlign="left" borderWidth="1px">
							<Image src={ele.photo.ed} alt={ele.name}></Image>
							<Heading as={"h3"} size={"sm"} p="1vh 1vw">
								{ele.name}
							</Heading>
							<Text fontSize="sm" p="1vh 1vw">
								{ele.blurb}
							</Text>
							<Text fontSize={"xs"} p="1vh 1vw">
								by {ele.creator.name}
							</Text>
						</Box>
					);
				})}
			</Grid>
		</>
	);
};

export default HomepageComponent;