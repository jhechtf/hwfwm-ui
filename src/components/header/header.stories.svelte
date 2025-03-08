<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Header from './header.svelte';
	const { Story } = defineMeta({
		title: 'Components/Header',
		component: Header
	});
</script>

<Story name="Default">
	{#snippet children({ ...args })}
		<Header {...args}>
			{#snippet children()}
				<h1>Hello</h1>
			{/snippet}
			{#snippet actions()}
				<section class="flex items-center gap-2">
					<button class="rounded-full bg-sky-800 px-2 py-1 dark:bg-sky-500 dark:text-zinc-800">
						Action 1
					</button>
					<button class="rounded-full border-2 border-sky-800 px-2 py-1 dark:border-sky-500">
						Action 2
					</button>
				</section>
			{/snippet}
		</Header>
	{/snippet}
</Story>

<Story name="Levels">
	{#snippet children({ ...args })}
		{#each [1, 2, 3, 4, 5, 6] as heading}
			<Header {...args}>
				<svelte:element this={`h${heading}`}>
					H{heading}
				</svelte:element>
				{#snippet actions()}
					<section class="flex items-center gap-2">
						<button class="rounded-full bg-sky-800 px-2 py-1 dark:bg-sky-500 dark:text-zinc-900">
							Action 1
						</button>
						<button class="rounded-full border-2 border-sky-800 px-2 py-1 dark:border-sky-500">
							Action 2
						</button>
					</section>
				{/snippet}
			</Header>
		{/each}
	{/snippet}
</Story>
