<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Card from './card.svelte';
	const { Story } = defineMeta({
		title: 'Components/Card',
		component: Card,
		tags: ['autodocs']
	});
</script>

<Story name="Base">
	{#snippet children({ ...args })}
		<Card {...args}>
			{#snippet header()}
				<h3>Card Title</h3>
			{/snippet}

			{#snippet footer()}
				<div class="flex justify-end gap-4 text-right">
					<button class="rounded-full bg-emerald-400 px-2 py-1">Go to</button>
				</div>
			{/snippet}

			Something something
		</Card>
	{/snippet}
</Story>

<Story name="Fancy">
	{#snippet children({ ...args })}
		<Card {...args} class="w-1/2" skipWrappingelements={['header']}>
			{#snippet header()}
				<img src="https://placehold.co/600x400" alt="hi" class="w-full" />
			{/snippet}

			{#snippet footer()}
				Footer actions
			{/snippet}

			<div class="pt-4">Default content</div>
		</Card>
	{/snippet}
</Story>

<Story name="Variant">
	{#snippet children({ ...args })}
		<Card {...args} class="w-1/2 border"></Card>
	{/snippet}
</Story>
