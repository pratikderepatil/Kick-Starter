import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";

const ABOUT = ["About us", "Our charter", "Stats", "Press", "Jobs"];

const SUPPORT = [
	"Help Center",
	"Our Rules",
	"Creator Resources",
	"Forward Funds",
	"Brand assets",
];

const MOREFROM = [
	"Newsletters",
	"Kickstarter Magazine",
	"The Creative Independent",
	"The Kickstarter Blog",
	"Mobile apps",
	"Research",
];
const Footer = () => {
	return (
		<>
			<SubNavbar />
			<Flex
				w="100%"
				p={"5vh 12vw"}
				justifyContent={"space-evenly"}
				borderWidth="1px"
				textAlign="left"
				fontSize="sm"
			>
				<Flex flexDirection="column">
					<Heading as="h4" size="xs" m="1vh 0">
						ABOUT
					</Heading>
					{ABOUT?.map((ele) => {
						return (
							<>
								<Link to="/commingsoon">{ele}</Link>
							</>
						);
					})}
				</Flex>
				<Flex flexDirection="column">
					<Heading as="h4" size="xs" m="1vh 0">
						SUPPORT
					</Heading>
					{SUPPORT?.map((ele) => {
						return (
							<>
								<Link to="/commingsoon">{ele}</Link>
							</>
						);
					})}
				</Flex>
				<Flex flexDirection="column">
					<Heading as="h4" size="xs" m="1vh 0">
						MORE FROM KICKSTARTER
					</Heading>
					{MOREFROM?.map((ele) => {
						return (
							<>
								<Link to="/commingsoon">{ele}</Link>
							</>
						);
					})}
				</Flex>
			</Flex>
			<Flex>
				<Image src="https://www.svgrepo.com/show/331456/kickstarter.svg"></Image>
				@ omniscient-sheet-6598
			</Flex>
		</>
	);
};

export default Footer;
