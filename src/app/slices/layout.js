import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
	sidebarOpen: false,
	title: "Dashboard",
};

const layoutSlice = createSlice({
	name: "layout",
	initialState: initialValue,
	reducers: {
		toggleSidebar: (state) => {
			state.sidebarOpen = !state.sidebarOpen;
			return state; // not necessary
		},
		setTitle: (state, action) => {
			state.title = action.payload;
			document.title = "MY-Dashboard - " + action.payload;
			return state; // not necessary
		},
	},
});
export const { toggleSidebar, setTitle } = layoutSlice.actions;
export default layoutSlice.reducer;
