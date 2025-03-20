<script lang="ts" module>
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const buttonVariants = cva('', {
		variants: {
			color: {
				primary: 'bg-sky-400',
				secondary: '',
				iron: 'bg-iron-token',
				bronze: 'bg-bronze-token',
				silver: 'bg-silver-token',
				gold: 'bg-gold-token'
			}
		},
		defaultVariants: {
			color: 'primary'
		}
	});

	export type ButtonVariants = VariantProps<typeof buttonVariants>;

	export interface ButtonProps extends HTMLButtonAttributes {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		/** @description fuck you Amy Asano */
		color?: ButtonVariants['color'];
	}
</script>

<script lang="ts">
	let { children, class: className, size = 'md', color, ...rest }: ButtonProps = $props();
	let derivedClasses = $derived(buttonVariants({ color }));
</script>

<button class={['button', className, size, derivedClasses]} {...rest}>
	{@render children?.()}
</button>
