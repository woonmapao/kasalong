<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { siteConfig } from '$lib/data/site';
	import Button from '$lib/components/ui/Button.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { Menu } from 'lucide-svelte';

	let isScrolled = $state(false);
	let mobileOpen = $state(false);

	onMount(() => {
		const onScroll = () => (isScrolled = window.scrollY > 80);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed top-0 z-50 w-full transition-all duration-500 {isScrolled
		? 'bg-[var(--color-forest)]/95 shadow-lg backdrop-blur-sm py-3'
		: 'bg-transparent py-5'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="flex flex-col leading-none" aria-label="{siteConfig.name} home">
			<span class="font-serif text-xl font-semibold tracking-wide text-white">
				{siteConfig.shortName}
			</span>
			<span class="text-[10px] font-light tracking-[0.25em] text-[var(--color-amber)] uppercase">
				Resort & Spa
			</span>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
			{#each siteConfig.nav as item}
				<a
					href={item.href}
					class="text-sm font-medium tracking-wide transition-colors duration-200
						{$page.url.pathname === item.href
						? 'text-[var(--color-gold)]'
						: 'text-white/80 hover:text-white'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- CTA + Mobile toggle -->
		<div class="flex items-center gap-3">
			<Button variant="gold" size="sm" href="/book" class="hidden sm:inline-flex">Book Now</Button>
			<button
				class="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
				onclick={() => (mobileOpen = true)}
				aria-label="Open menu"
			>
				<Menu size={22} />
			</button>
		</div>
	</div>
</header>

<MobileMenu bind:open={mobileOpen} />
