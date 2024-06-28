import { useState } from "react";
import LayoutContext from "../contexts/layoutManager";

export default function LayoutProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const layoutValues = {
		isSidebarOpen,
		setIsSidebarOpen,
	};
	return (
		<LayoutContext.Provider value={layoutValues}>
			{children}
		</LayoutContext.Provider>
	);
}
