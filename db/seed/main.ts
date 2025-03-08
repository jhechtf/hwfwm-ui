import 'npm:dotenv/config';
import { essences, confluenceEssence, confluenceMap } from './essences.ts';
import { getOrCreateEssence } from '../util.ts';
import * as schema from '../../src/lib/server/db/schema.ts';
import { inArray, and, eq } from 'npm:drizzle-orm';
import { db } from '../client.ts';

if (!Deno.env.has('TURSO_DATABASE_URL')) throw new Error('DATABASE_URL is not set!');

// Create the essence
for (const essence of essences) {
	getOrCreateEssence(essence);
}

// Create the confluence essences
for (const essence of confluenceEssence) {
	getOrCreateEssence(essence);
}

for (const cf of confluenceMap) {
	if (cf.confluence !== 'Doom') continue;

	const [e1, e2, e3, confluence] = await Promise.all([
		getOrCreateEssence(cf.essence1),
		getOrCreateEssence(cf.essence2),
		getOrCreateEssence(cf.essence3),
		getOrCreateEssence(cf.confluence)
	]);

	const exists = await db
		.select()
		.from(schema.confluence_essence_map)
		.where(
			and(
				eq(schema.confluence_essence_map.confluenceId, confluence.id),
				inArray(schema.confluence_essence_map.essence_1, [e1.id, e2.id, e3.id]),
				inArray(schema.confluence_essence_map.essence_2, [e1.id, e2.id, e3.id]),
				inArray(schema.confluence_essence_map.essence_3, [e1.id, e2.id, e3.id])
			)
		);

	if (exists.length === 0) {
		await db.insert(schema.confluence_essence_map).values({
			confluenceId: confluence.id,
			essence_1: e1.id,
			essence_2: e2.id,
			essence_3: e3.id
		});
	}
}
