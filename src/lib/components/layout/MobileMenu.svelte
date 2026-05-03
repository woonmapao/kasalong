<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/data/site';
	import { X, Phone, Mail } from 'lucide-svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	$effect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<!-- Backdrop -->
{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
		onclick={() => (open = false)}
	></div>
{/if}

<!-- Drawer -->
<div
	class="fixed right-0 top-0 z-50 h-full w-80 bg-[var(--color-forest)] shadow-2xl transition-transform duration-300 ease-out {open
		? 'translate-x-0'
		: 'translate-x-full'}"
	aria-hidden={!open}
>
	<div class="flex h-full flex-col px-6 py-6">
		<!-- Header -->
		<div class="flex items-center justify-between">
			<span class="font-serif text-lg text-white">{siteConfig.shortName}</span>
			<button
				class="flex h-9 w-9 items-center justify-center rounded-md text-white/70 hover:text-white"
				onclick={() => (open = false)}
				aria-label="Close menu"
			>
				<X size={20} />
			</button>
		</div>

		<!-- Gold divider -->
		<div class="my-5 h-px bg-[var(--color-gold)]/30"></div>

		<!-- Nav links -->
		<nav class="flex flex-col gap-1" aria-label="Mobile navigation">
			{#each siteConfig.nav as item, i}
				<a
					href={item.href}
					onclick={() => (open = false)}
					style="transition-delay: {i * 40}ms"
					class="rounded-lg px-4 py-3 text-base font-medium transition-all duration-200
						{$page.url.pathname === item.href
						? 'bg-white/10 text-[var(--color-gold)]'
						: 'text-white/80 hover:bg-white/5 hover:text-white'}"
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<!-- Book now CTA -->
		<div class="mt-4">
			<a
				href="/book"
				onclick={() => (open = false)}
				class="flex w-full items-center justify-center rounded-lg bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-forest)] transition-colors hover:bg-[var(--color-amber)]"
			>
				Book Now
			</a>
		</div>

		<!-- Contact info -->
		<div class="mt-auto space-y-3 border-t border-white/10 pt-5">
			<a
				href="tel:{siteConfig.phones[0]}"
				class="flex items-center gap-3 text-sm text-white/60 hover:text-white"
			>
				<Phone size={15} />
				{siteConfig.phones[0]}
			</a>
			<a
				href="mailto:{siteConfig.emails[0]}"
				class="flex items-center gap-3 text-sm text-white/60 hover:text-white"
			>
				<Mail size={15} />
				{siteConfig.emails[0]}
			</a>
		</div>
	</div>
</div>
