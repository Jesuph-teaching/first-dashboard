import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Content } from "./components/Content";

function App() {
	return (
		<>
			<div className="drawer">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<Navbar />
					{/* Page content here */}
					<Content></Content>
				</div>
				<Sidebar></Sidebar>
			</div>
		</>
	);
}

export default App;
