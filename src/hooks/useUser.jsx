// import { useContext } from "react";
// import UserContext from "../contexts/userManager";
import { setUser, clearUser } from "../app/slices/user";
import { useDispatch, useSelector } from "react-redux";
export default function useUser() {
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	return {
		user,
		registerUser: (newUser) => dispatch(setUser(newUser)),
		logout: () => dispatch(clearUser()),
	};
}
/* export default function useUser() {
	const context = useContext(UserContext);
	if (!context) throw new Error("useUser must be used within a UserProvider");
	return context;
} */
