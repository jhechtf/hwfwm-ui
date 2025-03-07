<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Indicator from './indicator.svelte';
	const { Story } = defineMeta({
		title: 'Components/Indicator',
		component: Indicator,
		args: {
			count: 4
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
