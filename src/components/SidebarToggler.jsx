import { useContext } from "react";
import LayoutContext from "../contexts/layoutManager";

export function SidebarToggler() {
	const context = useContext(LayoutContext);
	const { isSidebarOpen, setIsSidebarOpen } = context;
	return (
		<input
			id="my-drawer-3"
			type="checkbox"
			className="drawer-toggle"
			checked={isSidebarOpen}
			onChange={() => {
				setIsSidebarOpen(!isSidebarOpen);
			}}
		/>
	);
}
