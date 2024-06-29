import axios from "axios";

const axiosConfig = axios.create({
	baseURL: "http://localhost:4000/api/v1", // + /auth
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

export default axiosConfig;
