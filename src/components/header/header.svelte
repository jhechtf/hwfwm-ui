<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	export type HeaderProps = {
		children: Snippet<[]>;
		actions?: Snippet<[]>;
		class?: ClassValue;
	};
</script>

<script lang="ts">
	let { children, actions, class: className } = $props();
</script>

<div class={[!className && 'header flex items-baseline justify-between']}>
	{@render children()}
	{#if actions}
		{@render actions()}
	{/if}
</div>
