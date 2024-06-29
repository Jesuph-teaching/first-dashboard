import { z } from "zod";
export const userSchema = z.object({
	firstName: z.string().min(3).max(20),
	lastName: z.string().min(3).max(20),
	email: z.string().email(),
	birthDate: z
		.string()
		.refine((date) => !isNaN(Date.parse(date)), { message: "Invalid date" }),
});
export function validateUser(user) {
	const result = userSchema.safeParse(user);
	return result;
}
