import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
	id: integer('id').primaryKey(),
	age: integer('age'),
	firstName: text('first_name').notNull(),
	lastName: text('last_name')
});

export const essences = sqliteTable(
	'essences',
	{
		id: integer('id').primaryKey(),
		name: text('name').notNull(),
		isConfluence: integer('is_confluence').notNull().default(0),
		rarity: text('rarity', { enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'] })
			.notNull()
			.default('common'),
		description: text('description')
	},
	({ name, rarity, isConfluence }) => [
		index('essences_name_idx').on(name),
		index('essences_rarity_idx').on(rarity),
		index('essences_is_confluence_idx').on(isConfluence)
	]
);

export const user_essence_map = sqliteTable(
	'user_essences',
	{
		id: integer('id').primaryKey(),
		userId: integer('user_id')
			.notNull()
			.references(() => user.id),
		essenceId: integer('essence_id')
			.notNull()
			.references(() => essences.id),
		boundTo: text('bound_to', { enum: ['spirit', 'power', 'recovery', 'spirit'] }).notNull()
	},
	({ userId, essenceId }) => [
		index('essence_map_user_idx').on(userId),
		index('essence_map_essence_idx').on(essenceId),
		index('essence_user_and_essence_idx').on(userId, essenceId)
	]
);

export const abilities = sqliteTable(
	'abilities',
	{
		id: integer('id').primaryKey(),
		name: text('name').notNull(),
		description: text('description').notNull(),
		incantation: text('incantation'),
		costType: text('cost_type', { enum: ['stamina', 'health', 'mana', 'none'] }).default('none')
	},
	({ name, description }) => [
		index('abilities_name_idx').on(name),
		index('description_name_idx').on(description)
	]
);

export const user_abilities_map = sqliteTable(
	'user_abilities_map',
	{
		id: integer('id').primaryKey(),
		abilityId: integer('ability_id')
			.notNull()
			.references(() => abilities.id),
		userId: integer('id')
			.notNull()
			.references(() => user.id),
		rank: integer('rank').notNull().default(10)
	},
	({ userId, abilityId }) => [
		index('user_abilities_user_idx').on(userId),
		index('user_abilities_ability_idx').on(abilityId)
	]
);

export const confluence_essence_map = sqliteTable(
	'confluence_essence_map',
	{
		id: integer('id').primaryKey(),
		confluenceId: integer('confluence_id')
			.references(() => essences.id)
			.notNull(),
		essence_1: integer('essence_1')
			.references(() => essences.id)
			.notNull(),
		essence_2: integer('essence_2')
			.references(() => essences.id)
			.notNull(),
		essence_3: integer('essence_3')
			.references(() => essences.id)
			.notNull()
	},
	({ confluenceId, essence_1, essence_2, essence_3 }) => [
		index('confluence_essence_map_confluence_id').on(confluenceId),
		index('confluence_essence_combo').on(essence_1, essence_2, essence_3)
	]
);
