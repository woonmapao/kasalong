<script lang="ts">
	import type { BookingPlatform } from '$lib/data/booking';
	import { ExternalLink } from 'lucide-svelte';

	interface Props {
		platform: BookingPlatform;
	}

	let { platform }: Props = $props();
</script>

<a
	href={platform.url}
	target="_blank"
	rel="noopener noreferrer"
	class="group relative flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-ivory)] bg-white p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-[var(--shadow-card-hover)]"
>
	{#if platform.highlight}
		<div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-gold)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-forest)]">
			{platform.highlight}
		</div>
	{/if}

	<!-- Platform name as styled text (logos need real SVG files) -->
	<div
		class="flex h-14 w-full items-center justify-center rounded-xl font-bold text-xl"
		style="color: {platform.bgColor}; background-color: {platform.bgColor}15"
	>
		{platform.name}
	</div>

	<div>
		<p class="text-sm text-[var(--color-stone)]">{platform.tagline}</p>
	</div>

	<div class="flex items-center gap-1.5 text-xs font-medium text-[var(--color-teal)] group-hover:text-[var(--color-forest)]">
		Book on {platform.name}
		<ExternalLink size={12} />
	</div>
</a>
