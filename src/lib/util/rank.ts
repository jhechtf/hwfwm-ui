import type { user_abilities_map } from '$lib/server/db/schema';

export type StatBlock = {
	speed: number;
	power: number;
	recover: number;
	doom: number;
};

type EssenceAbilityStat = typeof user_abilities_map.$inferSelect;

const levels = {
	0: 'Normal',
	10: 'Iron',
	20: 'Bronze',
	30: 'Silver',
	40: 'Gold',
	50: 'Diamond'
};

/**
 *
 */
export function calculateTotalRank(skills: EssenceAbilityStat[]): number {
	let level = levels[0];
	console.info(skills);
	return 0;
}
