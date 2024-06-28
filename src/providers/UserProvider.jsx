import { useState } from "react";
import UserContext from "../contexts/userManager";
import { validateUser } from "../validators/user";

export default function UserProvider({ children }) {
	const [user, setUser] = useState(null);
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
	};
	return (
		<UserContext.Provider value={userValues}>{children}</UserContext.Provider>
	);
}
