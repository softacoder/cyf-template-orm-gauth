const { saveUser, truncateUsers, findUserByEmail } = require("./user_helper");
const { connectDb, disconnectDb } = require("../db");

describe("user_helper", () => {
	beforeEach(async () => {
		await connectDb();
		await truncateUsers();
	});

	afterEach(async () => {
		await disconnectDb();
	});

	describe("saveUser", () => {
		test("it saves the user", async () => {
			await saveUser("name", "bob@email.com", "role", "token");
			let user = await findUserByEmail("bob@email.com");
			expect(user.email).toEqual("bob@email.com");
		});
	});
});
