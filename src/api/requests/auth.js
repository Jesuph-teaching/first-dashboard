import axiosConfig from "../axiosConfig";

export async function getAuth() {
	return axiosConfig.get("/auth");
}

export async function login(data) {
	// pre validation of data
	return axiosConfig.post("/auth/login", data);
}

export async function register(data) {
	// pre validation of data
	return axiosConfig.post("/auth/register", data);
}
