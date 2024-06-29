import { Link } from "react-router-dom";
import { sessions } from "./sessions";
import useTitle from "../../hooks/useTitle";
export default function SessionTable() {
	useTitle("Sessions");
	return (
		<table className="table ">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{sessions.map((session) => (
					<tr key={session.id}>
						<td>
							<Link to={`/sessions/${session.id}`}>{session.id}</Link>
						</td>
						<td>{session.name}</td>
						<td>{session.age}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
