import { Navigate, useRoutes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Error404 from "./pages/Errors/Error404";
import Login from "./pages/Login";
import useUser from "./hooks/useUser";
import Profile from "./pages/Profile";
import ParticipantsTable from "./pages/Participants/ParticipantsTable";
import ParticipantData from "./pages/Participants/ParticipantData";

export default function Routes() {
	const { user } = useUser();
	return useRoutes([
		{
			index: true,
			element: <Home />,
		},
		{
			path: "/auth",
			element: user ? <Navigate to="/" replace /> : undefined,
			children: [
				{
					path: "register",
					element: <Register />,
				},
				{
					path: "login",
					element: <Login />,
				},
			],
		},
		/**
		 * Exercise
		 * create profile route and its page
		 * redirect if user is not logged in ( user==null)
		 */
		{
			path: "/profile",
			element: user ? <Profile /> : <Navigate to="/auth/register" replace />,
		},
		{
			path: "/participants",
			children: [
				{ index: true, element: <ParticipantsTable /> },
				{
					path: ":id",
					element: <ParticipantData />,
				},
			],
		},
		{
			path: "*",
			element: <Error404 />,
		},
	]);
}
