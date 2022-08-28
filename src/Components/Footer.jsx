import { Flex, Heading, Image, Select, Text } from "@chakra-ui/react";
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

const subfooter = [
	"Trust & Safety",
	"Terms of Use",
	"Privacy Policy",
	"Cookie Policy",
	"Accessibility Statement",
	"CA Notice of Consent",
];
const Footer = ({ handleUrl }) => {
	return (
		<>
			<SubNavbar handleUrl={handleUrl} />
			<Flex
				w="100%"
				p={"5vh 12vw"}
				justifyContent={"space-evenly"}
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
								<Link to="/commingsoon" key={ele}>
									{ele}
								</Link>
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
								<Link to="/commingsoon" key={ele}>
									{ele}
								</Link>
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
								<Link to="/commingsoon" key={ele}>
									{ele}
								</Link>
							</>
						);
					})}
				</Flex>
			</Flex>
			<Flex
				w="100%"
				justifyContent={"space-between"}
				textAlign="left"
				alignItems="center"
				fontSize="sm"
			>
				<Flex gap="1vw" p={"2vh 5vw"} justifyContent={"space-between"}>
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kickstarter-logo-k-color.svg/1796px-Kickstarter-logo-k-color.svg.png"
						w="1vw"
						h="2.5vh"
					></Image>
					<Text>omniscient-sheet-6598, Pratik Derepatil © 2022 </Text>
				</Flex>
				<Flex gap="1vw" p={"2vh 5vw"} justifyContent={"space-between"}>
					<Select placeholder="English" w="auto">
						<option value="Spanish">Spanish</option>
						<option value="Chinese">Chinese</option>
						<option value="Deutsch">Deutsch</option>
					</Select>
					<Select placeholder="$ US Dollar (USD)" w="auto">
						<option value="EUR">€ Euro (EUR)</option>
						<option value="AUD">$ Australian Dollar (AUD)</option>
						<option value="GBP">£ Pound Sterling (GBP)</option>
						<option value="JPY">¥ Japanese Yen (JPY)</option>
					</Select>
				</Flex>
			</Flex>
			<Flex
				w="100%"
				p={"2vh 25vw 2vh 0vw"}
				justifyContent={"space-evenly"}
				borderWidth="1px"
				fontSize="sm"
			>
				{subfooter?.map((ele) => {
					return (
						<Link to="/commingsoon" key={ele}>
							{ele}
						</Link>
					);
				})}
			</Flex>
		</>
	);
};

export default Footer;
