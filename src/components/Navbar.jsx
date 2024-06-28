import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Navbar() {
	const { user, logout } = useUser();
	return (
		<div className="w-full navbar bg-base-300">
			<div className="flex-none ">
				{/* removed lg:hidden */}
				<label
					htmlFor="my-drawer-3"
					aria-label="open sidebar"
					className="btn btn-square btn-ghost"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-6 h-6 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div className="flex-1 px-2 mx-2">Navbar Title</div>
			<div className="flex-none hidden lg:block">
				<ul className="menu menu-horizontal">
					{/* Navbar menu content here */}
					<li>
						<Link to="/auth/register">Register</Link>
					</li>
					<li>
						<Link to="/auth/login">login</Link>
					</li>
				</ul>
			</div>
			{/* User Icon */}
			{user && (
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a>
								{user.firstName} {user.lastName}
							</a>
						</li>
						<li>
							<Link to="/profile" className="justify-between">
								Profile
								<span className="badge">New</span>
							</Link>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a
								onClick={() => {
									logout();
								}}
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
