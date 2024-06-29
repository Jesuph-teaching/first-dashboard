import { configureStore } from "@reduxjs/toolkit";
import layout from "./slices/layout";
import user from "./slices/user";
import language from "./slices/language";

const store = configureStore({
	reducer: {
		layout: layout,
		user: user,
		language,
	},
});

export default store;
