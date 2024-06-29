import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { SidebarToggler } from "./components/SidebarToggler";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import store from "./app/store";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="drawer">
					<SidebarToggler />
					<div className="drawer-content flex flex-col">
						{/* Navbar */}
						<Navbar />
						{/* Page content here */}
						<Routes />
					</div>
					<Sidebar />
				</div>
				<Toaster />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
