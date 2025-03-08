<script lang="ts">
	import Button from '$components/button/button.svelte';
	import Card from '$components/card/card.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();
	type ConfluenceFilterType = 'all' | 'confluence' | 'nonconfluence';

	let essenceInfo = $derived.by(async () => {
		const rawEssences = await data.essences;
		const essencesByType = rawEssences.reduce(
			(all, cur) => {
				if (cur.isConfluence === 1) all.confluence.push(cur);
				else all.nonconfluence.push(cur);
				all.all.push(cur);
				return all;
			},
			{ confluence: [], nonconfluence: [], all: [] } as Record<
				ConfluenceFilterType,
				typeof rawEssences
			>
		);
		return essencesByType;
	});

	let filterType: ConfluenceFilterType = $state('all');

	function changeFilterType(type: ConfluenceFilterType) {
		return () => {
			if (filterType !== type) {
				filterType = type;
			}
		};
	}
</script>

<svelte:head>
	<title>Essences</title>
</svelte:head>

<div class="@container/main grid grid-cols-12 gap-x-4">
	<div class="col-span-12 bg-amber-900 p-6 text-zinc-100">
		<h1>Essences</h1>
	</div>
	<div class="col-span-8 col-start-3 grid grid-cols-subgrid py-6 @lg:max-w-[80vw]">
		<p class="lead col-span-8 text-lg font-light italic">
			These are the essences we've found on the internet. They have various sources.
		</p>

		{#await essenceInfo}
			Loading///
		{:then essences}
			{@const filteredEssences = essences[filterType]}
			<div class="col-span-2">
				<h3>Filters</h3>
				<div class="inline-flex rounded-lg bg-sky-400">
					<Button
						onclick={changeFilterType('all')}
						class={[filterType === 'all' && 'bg-sky-600 text-zinc-100']}>All</Button
					>
					<Button
						onclick={changeFilterType('confluence')}
						class={[filterType === 'confluence' && 'bg-sky-600 text-zinc-100']}>Confluence</Button
					>
					<Button
						onclick={changeFilterType('nonconfluence')}
						class={[filterType === 'nonconfluence' && 'bg-sky-600 text-zinc-100']}
						>Non-confluence</Button
					>
				</div>
			</div>
			<div class="col-span-6 mt-6 grid grid-cols-subgrid gap-y-4 p-2">
				{#each filteredEssences as essence}
					<Card class="col-span-2">
						{#snippet header()}
							<h3>
								{essence.name}
								{#if essence.isConfluence === 1}
									<small>Confluence</small>
								{/if}
							</h3>
						{/snippet}
						{#if essence.isConfluence === 1}
							hi{/if}
						{#if essence.description}
							<div class="space-y-4">
								<SvelteMarkdown source={essence.description}></SvelteMarkdown>
							</div>
						{/if}
					</Card>
				{/each}
			</div>
		{/await}
	</div>
</div>
