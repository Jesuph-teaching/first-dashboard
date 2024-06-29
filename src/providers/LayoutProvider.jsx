import { useEffect, useState } from "react";
import LayoutContext from "../contexts/layoutManager";

export default function LayoutProvider({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [title, setTitle] = useState("Dashboard");
	const layoutValues = {
		isSidebarOpen,
		setIsSidebarOpen,
		title,
		setTitle,
	};
	useEffect(() => {
		document.title = "MY-Dashboard - " + title;
	}, [title]);
	return (
		<LayoutContext.Provider value={layoutValues}>
			{children}
		</LayoutContext.Provider>
	);
}
