<script lang="ts" module>
	import Button from '$components/button/button.svelte';
	import Card from '$components/card/card.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	const { Story } = defineMeta({
		title: 'Design/Typography'
	});

	const headerArray = Array.from({ length: 6 }, (_, i) => i + 1);
</script>

<Story name="Headers">
	{#snippet children()}
		<div class="space-y-5">
			{#each headerArray as i}
				<div>
					<svelte:element this={`h${i}`}> Sphinx of black quartz, judge my vow. </svelte:element>
					<p>Whereas disregard and contempt for human rights have resulted</p>
				</div>
			{/each}
		</div>
	{/snippet}
</Story>

<Story name="Headers with extra details">
	{#snippet children()}
		<div class="space-y-5">
			{#each headerArray as i}
				<div>
					<svelte:element this={`h${i}`}>
						Sphinx of black quarts, judge my vow
						<small>Info</small>
					</svelte:element>
					<p>Whereas disregard and contempt for human rights have resulted</p>
				</div>
			{/each}
		</div>
	{/snippet}
</Story>

<Story name="Examples with other components">
	{#snippet children()}
		<div class="space-y-6">
			<Card>
				{#snippet header()}
					<h2>Header usage with Cards</h2>
				{/snippet}

				<p>
					In general you'll want to use <code>&lt;h2 /&gt;</code> or <code>&lt;h3 /&gt;</code>.
					However, there might be an argument for an <code>&lt;h1&gt;</code> if you are trying to draw
					a lot of visual attention to the header section for the card
				</p>
			</Card>
			<Card>
				{#snippet header()}
					<h1>H1 for a lot of Visual Interest</h1>
				{/snippet}

				{#snippet footer()}
					<Button>Example actions</Button>
				{/snippet}

				<p class="my-6">
					Because of the very large text and heavy font weight this has a lot of visual interest.
					While this works, it should be used sparringly.
				</p>
			</Card>
		</div>
	{/snippet}
</Story>
