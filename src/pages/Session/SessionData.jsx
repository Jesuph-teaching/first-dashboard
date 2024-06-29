import { useParams } from "react-router-dom";
import { sessions } from "./sessions";

export default function SessionData() {
	const { sessionId } = useParams();
	//const currentSession = // fetch from backend
	const currentSessionIndex = sessions.findIndex(
		(session) => session.id === sessionId
	);
	const currentSession =
		currentSessionIndex !== -1 ? sessions[currentSessionIndex] : null;
	if (currentSession === null) return <h1>Session not found</h1>;
	return (
		<div className="flex justify-center py-24">
			<div className="card bg-base-100 w-96 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
						className="rounded-full w-24 h-24 mx-auto"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">Session Profile</h2>
					<ul>
						<li>
							<strong>Name:</strong> {currentSession.name}
						</li>
						<li>
							<strong>Age:</strong> {currentSession.age}
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
