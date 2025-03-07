import { db, schema } from '$lib/server/db';

export const load = async () => {
	return { essences: db.select().from(schema.essences) };
};
