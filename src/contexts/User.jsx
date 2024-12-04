import { createContext, useContext, useState, useEffect } from "react";
import fs from "fs";

const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(() => {
		const savedUser = localStorage.getItem("user");
		return savedUser ? JSON.parse(savedUser) : null;
	});
	const [loading, setLoading] = useState(!user);
	const [isLoggedOut, setIsLoggedOut] = useState(false);

	useEffect(() => {
		if (!user && !isLoggedOut) {
			setLoading(true);
			fetch("/data/accountInfo.json")
				.then((response) => response.json())
				.then((data) => {
					setUser(data.user);
					localStorage.setItem("user", JSON.stringify(data.user));
				})
				.catch((error) =>
					console.error("Error fetching user data:", error),
				)
				.finally(() => setLoading(false));
		}
	}, [user, isLoggedOut]);

	const updateUser = (updatedData) => {
		const newUserData = { ...user, ...updatedData };
		setUser(newUserData);
		localStorage.setItem("user", JSON.stringify(newUserData));
		// Here you would typically also send an API request to update the server
	};

	const logout = () => {
		setUser(null);
		setIsLoggedOut(true);
		localStorage.removeItem("user");
	};

	const login = () => {
		setIsLoggedOut(false);
		// Trigger re-fetch of user data
		setUser(null);
	};

	return (
		<UserContext.Provider
			value={{ user, loading, updateUser, logout, login }}
		>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}
