import { db, schema } from '$lib/server/db';
import { aliasedTable, asc, eq, getTableColumns } from 'drizzle-orm';

const e1Alias = aliasedTable(schema.essences, 'e1');
const e2Alias = aliasedTable(schema.essences, 'e2');
const e3Alias = aliasedTable(schema.essences, 'e3');

type NonConfluence = Omit<typeof schema.essences.$inferSelect, 'isConfluence'> & {
	isConfluence: 0;
};
type Confluence = Omit<NonConfluence, 'isConfluence'> & {
	isConfluence: 1;
	combinations: [NonConfluence, NonConfluence, NonConfluence][];
};

export const load = async () => {
	return {
		essences: db
			.select({
				...getTableColumns(schema.essences),
				essence1Name: e1Alias,
				essence2Name: e2Alias,
				essence3Name: e3Alias
			})
			.from(schema.essences)
			.leftJoin(
				schema.confluence_essence_map,
				eq(schema.confluence_essence_map.confluenceId, schema.essences.id)
			)
			.leftJoin(e1Alias, eq(e1Alias.id, schema.confluence_essence_map.essence_1))
			.leftJoin(e2Alias, eq(e2Alias.id, schema.confluence_essence_map.essence_2))
			.leftJoin(e3Alias, eq(e3Alias.id, schema.confluence_essence_map.essence_3))
			.orderBy(asc(schema.essences.name))
			.then(
				(
					data: (typeof schema.essences.$inferSelect & {
						essence1Name?: NonConfluence;
						essence2Name?: NonConfluence;
						essence3Name?: NonConfluence;
					})[]
				) => {
					const rawr = data.reduce((all, cur) => {
						if (cur.isConfluence === 1) {
							const confluence = all.get(cur.name) as Confluence;
							if (!confluence) {
								const obj: Confluence = {
									...cur,
									combinations: []
								};

								if (cur.essence1Name && cur.essence2Name && cur.essence3Name) {
									obj.combinations.push([cur.essence1Name, cur.essence2Name, cur.essence3Name]);
								}

								all.set(cur.name, obj);
							} else if (cur.essence1Name && cur.essence2Name && cur.essence3Name) {
								confluence.combinations.push([
									cur.essence1Name,
									cur.essence2Name,
									cur.essence3Name
								]);
							}
						} else {
							all.set(cur.name, cur);
						}
						return all;
					}, new Map<string, NonConfluence | Confluence>());
					let f = Array.from(rawr.values());
					console.info('DOOM', rawr.get('Doom'));
					return f;
				}
			)
	};
};
