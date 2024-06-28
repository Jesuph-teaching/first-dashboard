import { z } from "zod";
export const userSchema = z.object({
	username: z.string().min(3).max(20),
	firstName: z.string().min(3).max(20),
	lastName: z.string().min(3).max(20),
	email: z.string().email(),
	age: z
		.number()
		.int()
		.min(13, "You must be at least 13 years old to register."),
});
export function validateUser(user) {
	const result = userSchema.safeParse(user);
	return result;
}
