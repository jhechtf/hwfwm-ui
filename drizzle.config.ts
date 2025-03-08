import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN)
	throw new Error('DATABASE_URL or TURSO_AUTH_TOKEN is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './migrations',
	dialect: 'turso',

	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN
	},

	verbose: true,
	strict: true
});
