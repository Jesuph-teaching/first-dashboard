import { useState } from "react";
import { differenceInCalendarYears } from "date-fns";
import useUser from "../hooks/useUser";
/* import useLayout from "../hooks/useLayout"; */

// pass: ibnsup@24
export default function Register() {
	/* const { isSidebarOpen, setIsSidebarOpen } = useLayout(); */
	const { user, registerUser } = useUser();
	const [userLocal, setUserLocal] = useState({
		email: "",
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		birthDate: new Date(2010),
	});
	if (user) return null;
	return (
		<div className="flex flex-col gap-4 px-12 py-6 max-w-md mx-auto">
			<h1>Register</h1>
			<form
				className="flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					const { birthDate, ...newUser } = userLocal;

					const age = differenceInCalendarYears(new Date(), birthDate);
					registerUser({
						...newUser,
						age,
					});
					return false;
				}}
			>
				<label className="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70"
					>
						<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
						<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
					</svg>
					<input
						type="email"
						name="email"
						className="grow"
						placeholder="Email"
						value={userLocal.email}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, email: value });
						}}
						required
					/>
				</label>
				<label className="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70"
					>
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
					</svg>
					<input
						type="text"
						name="username"
						className="grow"
						placeholder="Username"
						value={userLocal.username}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, username: value });
						}}
						required
					/>
				</label>
				<label className="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70"
					>
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
					</svg>
					<input
						type="text"
						name="firstName"
						className="grow"
						placeholder="First name"
						value={userLocal.firstName}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, firstName: value });
						}}
						required
					/>
				</label>
				<label className="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70"
					>
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
					</svg>
					<input
						type="text"
						name="lastName"
						className="grow"
						placeholder="Last name"
						value={userLocal.lastName}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, lastName: value });
						}}
						required
					/>
				</label>
				<label className="input input-bordered flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70"
					>
						<path
							fillRule="evenodd"
							d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
							clipRule="evenodd"
						/>
					</svg>
					<input
						type="password"
						className="grow"
						value={userLocal.password}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, password: value });
						}}
						required
					/>
				</label>
				<label className="input input-bordered flex items-center gap-2">
					<input
						type="date"
						className="grow"
						value={userLocal.birthDate}
						onChange={(e) => {
							const value = e.target.value;
							setUserLocal({ ...userLocal, birthDate: value });
						}}
						required
					/>
				</label>
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>
			{/* <button
				className="btn btn-accent"
				onClick={() => {
					setIsSidebarOpen(!isSidebarOpen);
				}}
			>
				{isSidebarOpen ? "is Open" : "is Closed"}
			</button> */}
		</div>
	);
}
