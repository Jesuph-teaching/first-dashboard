import { useEffect } from "react";
import useLayout from "./useLayout";

export default function useTitle(title) {
	const { setTitle } = useLayout();
	useEffect(() => {
		setTitle(title);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
