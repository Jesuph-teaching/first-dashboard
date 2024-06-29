import { configureStore } from "@reduxjs/toolkit";
import layout from "./slices/layout";
import user from "./slices/user";

const store = configureStore({
	reducer: {
		layout: layout,
		user: user,
	},
});

export default store;
