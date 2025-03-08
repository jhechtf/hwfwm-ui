<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import { SvelteSet } from 'svelte/reactivity';

	type WrappingElements = 'header' | 'body' | 'footer';

	export type CardProps = {
		children?: Snippet<[]>;
		header?: Snippet<[]>;
		footer?: Snippet<[]>;
		/** @description The classes that will be added to the values.*/
		class?: ClassValue;
		/** @description By default the header and footer snippets are in <header> and <footer> elements, and the body
		 * is wrapped in a p-4 div. This value gets wrapped in a reactive Set and updates if the values change
		 */
		skipWrappingelements?: WrappingElements[];
	};
</script>

<script lang="ts">
	let {
		children,
		header,
		footer,
		class: className,
		skipWrappingelements = []
	}: CardProps = $props();

	let skip = $derived(new SvelteSet(skipWrappingelements));
</script>

<div class={['card @container/card', className]}>
	{#if !skip.has('header')}
		<header>
			{@render header?.()}
		</header>
	{:else}
		{@render header?.()}
	{/if}
	{#if !skip.has('body')}
		<div class="card-body">
			{@render children?.()}
		</div>
	{:else}
		{@render children?.()}
	{/if}
	{#if !skip.has('footer')}
		<footer>{@render footer?.()}</footer>
	{:else}
		{@render footer?.()}
	{/if}
</div>
