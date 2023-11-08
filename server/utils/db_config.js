import "dotenv/config";

export function createDatabaseUrl(
	full_url,
	host,
	name,
	port,
	password,
	username
) {
	if (full_url) {
		return full_url;
	}
	const userinfo = `${username}:${password}`;
	return `postgres://${
		userinfo !== ":" ? `${userinfo}@` : ""
	}${host}:${port}/${name}`;
}

export default {
	dbUrl: createDatabaseUrl(
		process.env.DATABASE_URL,
		process.env.DB_HOST ?? "localhost",
		process.env.DB_NAME ?? "cyf",
		process.env.DB_PORT ?? "5432",
		process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "",
		process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "",
		process.env.DB_USER ?? process.env.DB_USERNAME ?? ""
	),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
};
