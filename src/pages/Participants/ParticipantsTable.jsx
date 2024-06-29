import { Link } from "react-router-dom";
import { participants } from "./participants";
import useTitle from "../../hooks/useTitle";
export default function ParticipantsTable() {
	useTitle("Participants");
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
				{participants.map((participant) => (
					<tr key={participant.id}>
						<td>
							<Link to={`/participants/${participant.id}`}>
								{participant.id}
							</Link>
						</td>
						<td>{participant.name}</td>
						<td>{participant.age}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
