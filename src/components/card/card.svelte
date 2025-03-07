<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type CardProps = {
		children?: Snippet<[]>;
		header?: Snippet<[]>;
		footer?: Snippet<[]>;
	};
</script>

<script lang="ts">
	let { children, header, footer }: CardProps = $props();
</script>

<div class="card">
	<header>
		{@render header?.()}
	</header>
	<div class="card-body">
		{@render children?.()}
	</div>
	<footer>{@render footer?.()}</footer>
</div>
