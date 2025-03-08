import { eq } from 'npm:drizzle-orm';
import * as schema from '../src/lib/server/db/schema.ts';
import { db } from './client.ts';

type Essence = typeof schema.essences.$inferSelect;
type EssenceInsert = typeof schema.essences.$inferInsert;

export const essenceCache = new Map<string, Essence>();

export async function getOrCreateEssence(
	data: string | Omit<EssenceInsert, 'id'>
): Promise<Essence> {
	if (typeof data === 'object' && data.name === undefined)
		throw new Error('No name value given in object');
	const name = typeof data === 'string' ? data : data.name;
	// If we have it in the cache return it
	if (essenceCache.has(name)) return essenceCache.get(name)!;
	// otherwise check it out
	const lookup = await db.select().from(schema.essences).where(eq(schema.essences.name, name));
	if (lookup.length === 0) {
		const insertObj = Object.assign(
			{
				name
			},
			data
		) as typeof schema.essences.$inferInsert;

		const inserted = await db.insert(schema.essences).values(insertObj).returning();
		if (inserted.length === 0) throw new Error('wtf');

		essenceCache.set(name, inserted[0]);
		return inserted[0];
	}
	return lookup[0];
}
