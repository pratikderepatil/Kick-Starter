import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "../Pages/Product";
import Homepage from "../Pages/Homepage";
import Profile from "../Pages/Profile";
import Recommendations from "../Pages/Recommendations";
import Savedproject from "../Pages/Savedproject";
import CommingSoon from "../Pages/CommingSoon";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/product" element={<Product />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/recommendations" element={<Recommendations />} />
			<Route path="/profile/savedprojects" element={<Savedproject />} />
			<Route path="/commingsoon" element={<CommingSoon />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
};

export default AllRoutes;
