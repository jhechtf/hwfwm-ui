<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		args: {
			children: base
		}
	});
</script>

{#snippet base()}
	Button
{/snippet}

<Story name="Default" />

<Story name="Sizes">
	{#snippet children({ size: _size, ...args })}
		<div class="flex items-center justify-start gap-4">
			{#each ['sm', 'md', 'lg', 'xl'] as size}
				<Button {size} {...args} />
			{/each}
		</div>
	{/snippet}
</Story>

<Story name="Colors">
	{#snippet children(args)}
		<Button {...args} />
	{/snippet}
</Story>
