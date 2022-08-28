import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AuthContextProvider";

import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Login = () => {
	const context = useContext(AppContext);
	const { isAuth } = context;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			{isAuth ? (
				<Navigate to="/" />
			) : (
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
							<VStack
								spacing={4}
								align={["flex-start", "center"]}
								w="full"
								mb={3}
							>
								<Heading size="lg">Login</Heading>
								<Text>
									New to Kickstarter?{" "}
									<Button colorScheme={"blue"} variant="link">
										<Link to={"/signup"}>Signup</Link>
									</Button>
								</Text>
							</VStack>
						</VStack>
						<FormControl padding={"2vh 0"}>
							<FormLabel>E-mail Address</FormLabel>
							<Input
								rounded={10}
								variant="filled"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>
						<FormControl padding={"1vh 0"}>
							<FormLabel>Password</FormLabel>
							<Input
								rounded={10}
								variant="filled"
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>
						<HStack w="full" justify={"space-between"} padding={"2vh 0 3vh"}>
							<Checkbox>Remember me.</Checkbox>
							<Button variant={"link"} colorScheme="blue">
								Forget Password?
							</Button>
						</HStack>
						<Button
							rounded={10}
							colorScheme="green"
							w={"full"}
							padding={"1vh 5vw"}
							onClick={handleSubmit}
							disabled={email === "" && password === ""}
						>
							Login
						</Button>
					</Box>
					<Footer />
				</>
			)}
		</>
	);
};

export default Login;
