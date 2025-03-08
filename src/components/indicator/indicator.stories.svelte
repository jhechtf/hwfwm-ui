<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn, fireEvent, expect } from '@storybook/test';
	import Indicator from './indicator.svelte';
	const mockClick = fn();

	const { Story } = defineMeta({
		title: 'Components/Indicator',
		component: Indicator,
		args: {
			count: 4,
			labels: ['One', 'Two', 'Three', 'Four'],
			onclick: mockClick,
			style: 'bar'
		},
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	play={async ({ canvas }) => {
		await fireEvent.click(await canvas.findByLabelText('One'));
		await expect(mockClick).toHaveBeenCalledWith(0);
	}}
/>
