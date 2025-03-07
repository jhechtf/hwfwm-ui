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
				<div class="text-right">buttons and shit here</div>
			{/snippet}

			Something something
		</Card>
	{/snippet}
</Story>
