import useLayout from "../hooks/useLayout";

export function SidebarToggler() {
	const { isSidebarOpen, toggleSidebar } = useLayout();
	return (
		<input
			id="my-drawer-3"
			type="checkbox"
			className="drawer-toggle"
			checked={isSidebarOpen}
			onChange={() => {
				toggleSidebar();
			}}
		/>
	);
}
