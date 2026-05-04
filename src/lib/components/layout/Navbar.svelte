<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { siteConfig } from '$lib/data/site';
	import { getI18n, localePath } from '$lib/i18n';
	import Button from '$lib/components/ui/Button.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { Menu } from 'lucide-svelte';

	let isScrolled = $state(false);
	let mobileOpen = $state(false);
	const i18n = getI18n();

	onMount(() => {
		const onScroll = () => (isScrolled = window.scrollY > 80);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// Active path detection: strip locale prefix for comparison
	const currentPath = $derived(
		$page.url.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/').replace(/\/+$/, '') || '/'
	);
</script>

<header
	class="fixed top-0 z-50 w-full transition-all duration-500 {isScrolled
		? 'bg-[var(--color-forest)]/95 shadow-lg backdrop-blur-sm py-3'
		: 'bg-transparent py-5'}"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
		<!-- Logo -->
		<a href={localePath(i18n.locale, '/')} class="flex flex-col leading-none" aria-label="{siteConfig.name} home">
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
					href={localePath(i18n.locale, item.path)}
					class="text-sm font-medium tracking-wide transition-colors duration-200
						{currentPath === item.path
						? 'text-[var(--color-gold)]'
						: 'text-white/80 hover:text-white'}"
				>
					{i18n.t(`nav.${item.key}`)}
				</a>
			{/each}
		</nav>

		<!-- CTA + Language + Mobile toggle -->
		<div class="flex items-center gap-2">
			<LanguageSwitcher />
			<Button variant="gold" size="sm" href={localePath(i18n.locale, '/book')} class="hidden sm:inline-flex">
				{i18n.t('common.bookNow')}
			</Button>
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
