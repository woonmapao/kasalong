<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { setI18n, localePath } from '$lib/i18n';
	import type { I18nStore } from '$lib/i18n';
	import { LOCALES } from '$lib/i18n/locales';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: import('svelte').Snippet } = $props();

	// Build i18n store with getters that close over reactive `data` prop.
	// In Svelte 5, $props() values are reactive signals, so reading data.translations
	// inside t() creates a tracked dependency in child template expressions.
	function t(key: string): string {
		const keys = key.split('.');
		let val: unknown = data.translations;
		for (const k of keys) {
			if (val && typeof val === 'object') {
				val = (val as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}
		return typeof val === 'string' ? val : key;
	}

	const i18n: I18nStore = {
		get locale() {
			return data.locale;
		},
		get translations() {
			return data.translations;
		},
		t
	};

	setI18n(i18n);

	// Update html[lang] on navigation
	$effect(() => {
		document.documentElement.lang = data.locale;
	});

	// Current path without locale prefix for hreflang
	const currentPath = $derived(
		$page.url.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/').replace(/\/+$/, '') || '/'
	);
</script>

<svelte:head>
	{#if data.locale === 'th'}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600&display=swap"
			rel="stylesheet"
		/>
	{:else if data.locale === 'zh'}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600&display=swap"
			rel="stylesheet"
		/>
	{:else if data.locale === 'hi'}
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600&display=swap"
			rel="stylesheet"
		/>
	{/if}

	{#each LOCALES as loc}
		<link
			rel="alternate"
			hreflang={loc.code}
			href="https://kasalongresort.com/{loc.code}{currentPath === '/' ? '/' : currentPath}"
		/>
	{/each}
	<link
		rel="alternate"
		hreflang="x-default"
		href="https://kasalongresort.com/en{currentPath === '/' ? '/' : currentPath}"
	/>
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
