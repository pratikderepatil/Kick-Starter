import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubNavbar = ({ handleUrl }) => {
	return (
		<Flex
			w="100%"
			p={"2vh 12vw"}
			justifyContent={"space-evenly"}
			borderWidth="1px"
			fontSize="sm"
		>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Arts");
				}}
			>
				Arts
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Comics");
				}}
			>
				Comics & Illustration
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Design");
				}}
			>
				Design & Tech
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Film");
				}}
			>
				Film
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Food");
				}}
			>
				Food & Craft
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Games");
				}}
			>
				Games
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Music");
				}}
			>
				Music
			</Link>
			<Link
				to="/"
				onClick={() => {
					handleUrl("Publishing");
				}}
			>
				Publishing
			</Link>
		</Flex>
	);
};

export default SubNavbar;
