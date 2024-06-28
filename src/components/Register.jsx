export default function Register() {
	return (
		<div>
			<h1>Register</h1>
			<form>
				<label htmlFor="name">First Name:</label>
				<input type="text" id="firstName" name="firstName" required />
				<label htmlFor="name">Last Name:</label>
				<input type="text" id="lastName" name="lastName" required />
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" required />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
