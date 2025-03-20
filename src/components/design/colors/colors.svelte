<script lang="ts">
	const colors = {
		Iron: 'bg-iron-token text-on-iron-token',
		Bronze: 'bg-bronze-token text-on-bronze-token',
		Silver: 'bg-silver-token text-on-silver-token',
		Gold: 'bg-gold-token text-on-gold-token',
		Diamond: 'bg-diamond-token text-on-diamond-token'
	};

	const textColors = {
		Iron: 'text-iron-token',
		Bronze: 'text-bronze-token',
		Silver: 'text-silver-token',
		Gold: 'text-gold-token',
		Diamond: 'text-diamond-token'
	};
</script>

<h1 class="mb-4">Backgrounds + <code>on-text-*</code> tokens</h1>
<div class="flex flex-col gap-4">
	{#each Object.entries(colors) as [name, classes], i}
		<div class={[classes, 'rounded p-4']}>
			{name}
		</div>
	{/each}
</div>

<h1 class="mt-8">Text tokens</h1>
{#each Object.entries(textColors) as [name, classes]}
	<p class={classes}>{name}</p>
{/each}
