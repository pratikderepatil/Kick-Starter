import React, { useEffect } from "react";

export const AppContext = React.createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = React.useState(false);
	const [userdata, setData] = React.useState({
		email: "eve.holt@reqres.ins",
		password: "pistol",
	});

	useEffect(() => {
		IsAuth();
	}, [userdata]);

	const IsAuth = async () => {
		try {
			let res = await fetch(`https://reqres.in/api/login`, {
				method: "POST",
				body: JSON.stringify(userdata),
				headers: {
					"Content-Type": "application/json",
				},
			});
			let data = await res.json();
			data.error === "user not found"
				? setIsAuth(false)
				: data.error === "user not found"
				? setIsAuth(false)
				: setIsAuth(true);
			// console.log(data);
		} catch (err) {
			// console.log(err);
			setIsAuth(false);
		}
	};

	const toggleAuth = () => {
		if (isAuth !== true) {
			setData({
				email: "eve.holt@reqres.in",
				password: "cityslicka",
			});
		} else {
			setData({
				email: "eve.holt@reqres.ins",
				password: "cityslicka",
			});
		}
	};
	// console.log(isAuth);
	const value = { isAuth, toggleAuth };
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AuthContextProvider;
