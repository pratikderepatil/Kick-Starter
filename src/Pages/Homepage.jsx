import { StackDivider, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../Components/Footer";
import HomepageComponent from "../Components/Homepage";

import Navbar from "../Components/Navbar";
const Homepage = () => {
	const [data, setData] = useState({});
	const [searchParams, setSearchParams] = useSearchParams();
	const [name, setName] = useState(searchParams.get("name") || "Arts");
	const handleUrl = (str) => {
		setName(str);
	};
	useEffect(() => {
		console.log(name);
		setSearchParams({ name });
		axios({
			url: `https://www.kickstarter.com/projects/search.json?term="${name}"`,
			method: "GET",
			params: {
				name,
			},
		})
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [name, setSearchParams]);

	return (
		<VStack divider={<StackDivider borderColor="gray.200" />} spacing={"auto"}>
			<Navbar handleUrl={handleUrl} />
			<HomepageComponent data={data.projects} />
			<Footer handleUrl={handleUrl} />
		</VStack>
	);
};

export default Homepage;
