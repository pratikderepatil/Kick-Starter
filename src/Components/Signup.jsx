import React from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
	return (
		<>
			<Navbar />
			<Box
				w={["full", "md"]}
				p={[8, 10]}
				marginBottom="10vh"
				mt={[20, "10vh"]}
				mx="auto"
				border={["none", "1px"]}
				borderColor={["", "gray.300"]}
				borderRadius={10}
			>
				<VStack spacing={4} align="flex-start" w="full">
					<VStack spacing={4} align={["flex-start", "center"]} w="full" mb={3}>
						<Heading size="lg">Signup</Heading>
						<Text>
							Have an account?{" "}
							<Button colorScheme={"blue"} variant="link">
								<Link to={"/login"}>Login</Link>
							</Button>
						</Text>
					</VStack>
				</VStack>
				<FormControl padding={"1vh 0"}>
					<FormLabel>Name</FormLabel>
					<Input rounded={10} variant="filled" />
				</FormControl>
				<FormControl padding={"1vh 0"}>
					<FormLabel>E-mail Address</FormLabel>
					<Input rounded={10} variant="filled" />
				</FormControl>
				<FormControl padding={"1vh 0 4vh"}>
					<FormLabel>Password</FormLabel>
					<Input rounded={10} variant="filled" type="password" />
				</FormControl>
				<Button rounded={10} colorScheme="green" w={"full"} padding={"1vh 5vw"}>
					Create Account
				</Button>
			</Box>
			<Footer />
		</>
	);
};

export default Signup;
