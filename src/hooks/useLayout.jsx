/* import { useContext } from "react";
import LayoutContext from "../contexts/layoutManager"; */
import { toggleSidebar, setTitle } from "../app/slices/layout";
import { useDispatch, useSelector } from "react-redux";

export default function useLayout() {
	const { sidebarOpen, title } = useSelector((store) => store.layout);
	const dispatch = useDispatch();
	return {
		isSidebarOpen: sidebarOpen,
		title,
		toggleSidebar: () => dispatch(toggleSidebar()),
		setTitle: (title) => dispatch(setTitle(title)),
	};
}
/* export default function useLayout() {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error("useLayout must be used within a LayoutProvider");
	}
	return context;
}
 */
