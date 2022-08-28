import { Flex, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AuthContextProvider";
import SubNavbar from "./SubNavbar";

const Navbar = ({ handleUrl }) => {
	const context = useContext(AppContext);
	const { isAuth } = context;
	return (
		<>
			<Flex
				as="header"
				flexDirection="column"
				justifyContent={"space-between"}
				alignItems={"center"}
				borderWidth="1px"
				w="100%"
			>
				<Flex
					w="100%"
					p={"2vh"}
					justifyContent={"space-between"}
					alignItems={"center"}
					borderWidth="1px"
				>
					<Flex p={"2vh 3vw"} gap="2vw" justifyContent={"space-around"}>
						<Link to="/commingsoon">Discover</Link>
						<Link to="/commingsoon">Start a project</Link>
					</Flex>
					<Image
						src="https://theme.zdassets.com/theme_assets/7902/7a63b03d352488898e3a870d14a103ddffe4b5fe.png"
						alt="Kickstarter"
						h="4vh"
					/>
					<Flex p={"2vh 3vw"} gap="2vw" justifyContent={"space-around"}>
						<Link to="/commingsoon">Search</Link>
						<Link to="/login">{isAuth ? "Logout" : "Login"}</Link>
					</Flex>
				</Flex>
				<SubNavbar handleUrl={handleUrl} />
			</Flex>
		</>
	);
};

export default Navbar;
