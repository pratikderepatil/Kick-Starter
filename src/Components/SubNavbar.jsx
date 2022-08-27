import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
	return (
		<Flex
			w="100%"
			p={"2vh 12vw"}
			justifyContent={"space-evenly"}
			borderWidth="1px"
		>
			<Link to="/commingsoon">Arts</Link>
			<Link to="/commingsoon">Comics & Illustration</Link>
			<Link to="/commingsoon">Design & Tech</Link>
			<Link to="/commingsoon">Film</Link>
			<Link to="/commingsoon">Food & Craft</Link>
			<Link to="/commingsoon">Games</Link>
			<Link to="/commingsoon">Music</Link>
			<Link to="/commingsoon">Publishing</Link>
		</Flex>
	);
};

export default SubNavbar;
