<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		target?: string;
		rel?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		class?: string;
		onclick?: () => void;
		children: import('svelte').Snippet;
	}

	let {
		variant = 'primary',
		size = 'md',
		href,
		target,
		rel,
		type = 'button',
		disabled = false,
		class: className = '',
		onclick,
		children
	}: Props = $props();

	const base =
		'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer';

	const variants = {
		primary:
			'bg-[var(--color-forest)] text-white hover:bg-[var(--color-emerald)] focus-visible:ring-[var(--color-forest)]',
		secondary:
			'bg-transparent border border-[var(--color-forest)] text-[var(--color-forest)] hover:bg-[var(--color-forest)] hover:text-white focus-visible:ring-[var(--color-forest)]',
		ghost:
			'bg-transparent border border-white/60 text-white hover:bg-white/10 hover:border-white focus-visible:ring-white',
		gold: 'bg-[var(--color-gold)] text-[var(--color-forest)] hover:bg-[var(--color-amber)] focus-visible:ring-[var(--color-gold)] shadow-[var(--shadow-gold)]'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm rounded-md',
		md: 'px-6 py-3 text-sm rounded-lg',
		lg: 'px-8 py-4 text-base rounded-lg'
	};

	const classes = $derived(cn(base, variants[variant], sizes[size], className));
</script>

{#if href}
	<a {href} {target} {rel} class={classes}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} class={classes} {onclick}>
		{@render children()}
	</button>
{/if}
