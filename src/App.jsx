import "./App.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { SidebarToggler } from "./components/SidebarToggler";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import store from "./app/store";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
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
				</QueryClientProvider>
				<Toaster />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
