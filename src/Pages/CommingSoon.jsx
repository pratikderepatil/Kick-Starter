import { Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const CommingSoon = () => {
	return (
		<VStack divider={<StackDivider borderColor="gray.200" />} spacing={"auto"}>
			<Navbar />
			<Heading as={"h1"} p="10vh">
				Comming Soon...
			</Heading>
			<Footer />
		</VStack>
	);
};

export default CommingSoon;
