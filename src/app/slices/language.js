import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
	language: localStorage.getItem("language") || "en",
};
SetDirection(initialValue.language);
function SetDirection(language) {
	if (language === "ar") {
		document.body.dir = "rtl";
	} else {
		document.body.dir = "ltr";
	}
}

const languageSlice = createSlice({
	name: "language",
	initialState: initialValue,
	reducers: {
		setLanguage: (state, action) => {
			state.language = action.payload;
			SetDirection(action.payload);
			localStorage.setItem("language", action.payload);
			return state; // not necessary
		},
	},
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
