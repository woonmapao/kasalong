<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { LOCALES } from '$lib/i18n/locales';
	import { getI18n } from '$lib/i18n';

	let open = $state(false);
	const i18n = getI18n();

	function switchLocale(code: string) {
		if (code === i18n.locale) {
			open = false;
			return;
		}
		const currentPath = $page.url.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';
		localStorage.setItem('kasalong-locale', code);
		goto(`/${code}${currentPath === '/' ? '/' : currentPath}`);
		open = false;
	}

	function handleClickOutside(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (!target.closest('[data-lang-switcher]')) {
			open = false;
		}
	}

	$effect(() => {
		if (open) {
			window.addEventListener('click', handleClickOutside);
		} else {
			window.removeEventListener('click', handleClickOutside);
		}
		return () => window.removeEventListener('click', handleClickOutside);
	});

	const current = $derived(LOCALES.find((l) => l.code === i18n.locale) ?? LOCALES[0]);
</script>

<!-- Desktop dropdown -->
<div class="relative hidden lg:block" data-lang-switcher>
	<button
		onclick={() => (open = !open)}
		class="flex items-center gap-1.5 rounded-md border border-white/25 px-3 py-1.5 text-xs font-medium text-white transition hover:border-white/50 hover:bg-white/10"
		aria-label="Select language"
		aria-expanded={open}
	>
		<span>{current.flag}</span>
		<span class="uppercase">{current.code}</span>
		<svg
			class="h-3 w-3 text-white/60 transition-transform {open ? 'rotate-180' : ''}"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if open}
		<div
			class="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-[var(--color-forest)] shadow-2xl"
		>
			{#each LOCALES as loc}
				<button
					onclick={() => switchLocale(loc.code)}
					class="flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition hover:bg-white/10
						{loc.code === i18n.locale ? 'border-l-2 border-[var(--color-gold)] bg-white/5' : 'border-l-2 border-transparent'}"
				>
					<span class="text-base">{loc.flag}</span>
					<div>
						<div class="font-medium text-white">{loc.nativeName}</div>
						{#if loc.nativeName !== loc.name}
							<div class="text-xs text-white/40">{loc.name}</div>
						{/if}
					</div>
					{#if loc.code === i18n.locale}
						<svg
							class="ml-auto h-4 w-4 text-[var(--color-gold)]"
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
