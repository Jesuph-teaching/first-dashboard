import { Link } from "react-router-dom";

export function Sidebar() {
	return (
		<div className="drawer-side">
			<label
				htmlFor="my-drawer-3"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>
			<ul className="menu p-4 w-80 min-h-full bg-base-200">
				{/* Sidebar content here */}
				<li>
					<Link to="/sessions">Sessions</Link>
				</li>
				<li>
					<Link to="/participants">Participants</Link>
				</li>
			</ul>
		</div>
	);
}
