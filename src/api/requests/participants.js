import axiosConfig from "../axiosConfig";

export async function getParticipants() {
	return axiosConfig.get("/participants");
}

export async function createParticipant(data) {
	// validation of data
	return axiosConfig.post("/participants", data);
}

export async function deleteParticipant(id) {
	return axiosConfig.delete("/participants/" + id);
}
