import { useLocation } from "react-router-dom";

export default function Error404() {
	const location = useLocation();
	return (
		<div className="flex flex-col items-center py-24">
			<h1 className="text-4xl">404 Not Found</h1>
			<p>
				No match for <code>{location.pathname}</code>
			</p>
		</div>
	);
}
