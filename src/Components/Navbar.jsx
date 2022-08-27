import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
	return (
		<>
			<Flex
				as="header"
				flexDirection="column"
				position="fixed"
				justifyContent={"space-between"}
				borderWidth="1px"
				w="100%"
			>
				<Flex
					w="100%"
					p={"2vh"}
					justifyContent={"space-between"}
					borderWidth="1px"
				>
					<Flex w="15%" justifyContent={"space-around"}>
						<Link to="/commingsoon">Discover</Link>
						<Link to="/commingsoon">Start a project</Link>
					</Flex>
					<Image
						src="https://theme.zdassets.com/theme_assets/7902/7a63b03d352488898e3a870d14a103ddffe4b5fe.png"
						alt="Kickstarter"
						width={"15%"}
					/>
					<Flex w="10%" justifyContent={"space-around"}>
						<Link to="/commingsoon">Search</Link>
						<Link to="/commingsoon">Log in</Link>
					</Flex>
				</Flex>
				<SubNavbar />
			</Flex>
		</>
	);
};

export default Navbar;
