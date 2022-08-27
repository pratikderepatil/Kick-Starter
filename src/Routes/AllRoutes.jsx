import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Homepage from "../Pages/Homepage";
import Profile from "../Pages/Profile";
import Recommendations from "../Pages/Recommendations";
import Savedproject from "../Pages/Savedproject";
import CommingSoon from "../Pages/CommingSoon";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/product" element={<Product />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/recommendations" element={<Recommendations />} />
			<Route path="/profile/savedprojects" element={<Savedproject />} />
			<Route path="/commingsoon" element={<CommingSoon />} />
		</Routes>
	);
};

export default AllRoutes;
