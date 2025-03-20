import { drizzle } from 'npm:drizzle-orm/libsql';
import { createClient } from 'npm:@libsql/client';

if (!Deno.env.has('TURSO_DATABASE_URL')) throw new Error('DATABASE_URL is not set!');

const client = createClient({
	url: Deno.env.get('TURSO_DATABASE_URL')!,
	authToken: Deno.env.get('TURSO_AUTH_TOKEN')!
});

export const db = drizzle(client, {
	logger: true
});
