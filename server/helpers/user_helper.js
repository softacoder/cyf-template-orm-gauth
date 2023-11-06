const { Users, Tokens } = require("../models");

async function saveUser(name, email, role, token) {
	const user = await Users.findOne({ where: { email } });
	if (!user) {
		const newUser = await Users.create({ name, email, role });
		await Tokens.create({ token, user_id: newUser.id });
	} else {
		let currentToken = await Tokens.findOne({ where: { token } });
		if (!currentToken) {
			await Tokens.create({ token, user_id: user.id });
		}
	}
}

async function deleteUser(token) {
	const latestToken = await Tokens.findOne({ where: { token } });
	if (!latestToken) {
		res.status(404).json({ error: "Token not found" });
	} else {
		await Tokens.destroy({ where: { user_id: latestToken.user_id } });
		await Users.destroy({ where: { id: latestToken.user_id } });
		res.status(200).json({ message: "Your account is deleted!" });
	}
}
