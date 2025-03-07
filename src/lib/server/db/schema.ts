import { integer, text, sqliteTable, index } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('users', {
	id: integer('id').primaryKey(),
	age: integer('age')
});

export const essences = sqliteTable('essences', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	isConfluence: integer('is_confluence').notNull().default(0),
	rarity: text('rarity', { enum: ['common', 'uncommon', 'rare', 'epic', 'legendary'] })
		.notNull()
		.default('common'),
	description: text('description')
});

export const user_essence_map = sqliteTable(
	'user_essences',
	{
		id: integer('id').primaryKey(),
		userId: integer('user_id')
			.notNull()
			.references(() => user.id),
		essenceId: integer('essence_id')
			.notNull()
			.references(() => essences.id)
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
