import useUser from "../hooks/useUser";

export default function Profile() {
	const { user } = useUser();
	return (
		<div className="flex justify-center">
			<div className="card bg-base-100 w-96 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
						className="rounded-full w-24 h-24 mx-auto"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">User Profile</h2>
					<ul>
						<li>
							<strong>First Name:</strong> {user.firstName}
						</li>
						<li>
							<strong>Last Name:</strong> {user.lastName}
						</li>
						<li>
							<strong>Email:</strong> {user.email}
						</li>
					</ul>
					<div className="card-actions">
						<button className="btn btn-primary">Modify</button>
					</div>
				</div>
			</div>
		</div>
	);
}
