import { createSlice } from "@reduxjs/toolkit";
import { validateUser } from "../../validators/user";

const initialValue = {
	user: null,
	token: "", // just an example we are not gonna use it
};

const userSlice = createSlice({
	name: "user",
	initialState: initialValue,
	reducers: {
		setUser: (state, action) => {
			const newUser = action.payload;
			const parsedUser = validateUser(newUser);
			if (parsedUser.success) {
				state.user = parsedUser.data;
				return state;
			} else {
				return state;
			}
		},
		clearUser: (state) => {
			state.user = null;
			return state;
		},
	},
});
export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
