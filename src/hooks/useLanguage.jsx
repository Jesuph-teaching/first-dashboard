import { setLanguage } from "../app/slices/language";
import { useDispatch, useSelector } from "react-redux";

export default function useLanguage() {
	const { language } = useSelector((store) => store.language);
	const dispatch = useDispatch();
	return {
		language,
		changeLanguage: (newLanguage) => dispatch(setLanguage(newLanguage)),
	};
}
