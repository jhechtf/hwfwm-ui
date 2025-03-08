<script lang="ts" module>
	export type IndicatorProps = {
		style?: 'bar' | 'circle';
		count?: number;
		active?: number;
		disabled?: number[];
		onclick?: (idx: number) => void;
		labels?: string[];
	};
</script>

<script lang="ts">
	let {
		active = -1,
		style = 'bar',
		count = 1,
		disabled = [],
		onclick = () => void 0,
		labels = []
	}: IndicatorProps = $props();

	// Used to set the array based on the length to iterate over later
	let indicatorArray = $derived(Array.from({ length: count }, (_, i) => i));
	// Which ones are disabled?
	let disabledSet = $derived(new Set(disabled));
</script>

<div class={['indicator flex gap-1', style]}>
	{#each indicatorArray as i}
		<button
			class={[
				'indicator-item overflow-hidden transition-all hover:h-auto hover:overflow-auto hover:starting:h-0',
				{ active: i === active, disabled: disabledSet.has(i) }
			]}
			disabled={disabledSet.has(i)}
			aria-label={labels[i] || `Item ${i}`}
			onclick={() => onclick(i)}>{labels[i]}</button
		>
	{/each}
</div>

<style>
	@layer components {
		.indicator {
			--indicator-color-active: var(--color-zinc-200);
			--indicator-color: var(--color-gray-500);
		}

		.indicator.circle {
			justify-content: center;
		}

		.indicator > .disabled {
			border: 2px solid var(--indicator-color);
			background-color: unset;
		}
		:global(.indicator.bar > *) {
			height: calc(var(--spacing) * 1.5);
			background-color: var(--indicator-color);
			overflow: hidden;
			width: 100%;
		}
		:global(.indicator.bar > .active) {
			background-color: var(--indicator-color-active);
		}

		:global(.indicator.circle > *) {
			height: calc(var(--spacing) * 4);
			width: calc(var(--spacing) * 4);
			background-color: var(--indicator-color);
			border-radius: 999999px;
			overflow: hidden;
		}

		:global(.indicator.circle > .active) {
			background-color: var(--indicator-color-active);
		}
	}
</style>
