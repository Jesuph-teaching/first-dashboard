import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Content } from "./components/Content";
import LayoutProvider from "./providers/LayoutProvider";
import { SidebarToggler } from "./components/SidebarToggler";
import UserProvider from "./providers/UserProvider";
function App() {
	return (
		<UserProvider>
			<LayoutProvider>
				<div className="drawer">
					<SidebarToggler />
					<div className="drawer-content flex flex-col">
						{/* Navbar */}
						<Navbar />
						{/* Page content here */}
						<Content />
					</div>
					<Sidebar />
				</div>
			</LayoutProvider>
		</UserProvider>
	);
}

export default App;
