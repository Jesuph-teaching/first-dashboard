import axiosConfig from "../axiosConfig";

export async function getParticipants() {
	return axiosConfig.get("/participants");
}
