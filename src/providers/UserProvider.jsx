import { useEffect, useState } from "react";
import UserContext from "../contexts/userManager";
import { validateUser } from "../validators/user";
// localStorage
// sessionsStorage
const initialUser = localStorage.getItem("user")
	? JSON.parse(localStorage.getItem("user"))
	: null;
export default function UserProvider({ children }) {
	const [user, setUser] = useState(initialUser);
	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}
	}, [user]);
	const userValues = {
		user,
		registerUser: (newUser) => {
			const parsedUser = validateUser(newUser);
			if (parsedUser.success) {
				setUser(parsedUser.data);
				return true;
			} else {
				return false;
			}
		},
		logout: () => {
			setUser(null);
		},
	};
	return (
		<UserContext.Provider value={userValues}>{children}</UserContext.Provider>
	);
}
