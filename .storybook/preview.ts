import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/svelte';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: 'light',
				dark: 'dark'
			},
			defaultTheme: 'light',
			attributeName: 'data-theme'
		})
	]
};

export default preview;
