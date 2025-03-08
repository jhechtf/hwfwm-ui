<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Colors from './colors.svelte';

	const { Story } = defineMeta({
		title: 'Design/Colors',
		component: Colors
	});
</script>

<Story name="Default" />
