<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { LOCALES, DEFAULT_LOCALE } from '$lib/i18n/locales';

	onMount(() => {
		const saved = localStorage.getItem('kasalong-locale');
		const browserLang = navigator.language.split('-')[0];
		const codes = LOCALES.map((l) => l.code) as string[];
		const detected = codes.includes(browserLang) ? browserLang : DEFAULT_LOCALE;
		const target = (saved && codes.includes(saved) ? saved : detected) as string;
		goto(`/${target}/`, { replaceState: true });
	});
</script>

<!-- Minimal fallback shown briefly before redirect -->
<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:#1a3a2e;">
	<div style="color:#C9A84C;font-family:serif;font-size:1.5rem;letter-spacing:0.1em;">Kasalong</div>
</div>
