<script lang="ts">
	import type { Facility } from '$lib/data/facilities';
	import { Clock, Check } from 'lucide-svelte';
	import * as icons from 'lucide-svelte';

	interface Props {
		facility: Facility;
		imageLeft?: boolean;
	}

	let { facility, imageLeft = true }: Props = $props();

	// Dynamically get the icon component
	const IconComponent = $derived((icons as Record<string, unknown>)[facility.icon] as typeof icons.Waves);
</script>

<div class="grid items-center gap-12 lg:grid-cols-2">
	<!-- Image -->
	<div class="{imageLeft ? 'order-1' : 'order-1 lg:order-2'}">
		<div class="relative overflow-hidden rounded-2xl">
			<img
				src={facility.image}
				alt={facility.name}
				class="h-80 w-full object-cover lg:h-[420px]"
				loading="lazy"
			/>
			{#if facility.hours}
				<div class="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[var(--color-forest)] backdrop-blur-sm">
					<Clock size={13} />
					{facility.hours}
				</div>
			{/if}
		</div>
	</div>

	<!-- Content -->
	<div class="{imageLeft ? 'order-2' : 'order-2 lg:order-1'}">
		<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-forest)]/10">
			{#if IconComponent}
				<IconComponent size={24} class="text-[var(--color-forest)]" />
			{/if}
		</div>
		<h3 class="mt-4 font-serif text-2xl text-[var(--color-forest)] sm:text-3xl">{facility.name}</h3>
		<p class="mt-4 leading-relaxed text-[var(--color-stone)]">{facility.description}</p>
		<ul class="mt-6 space-y-2">
			{#each facility.details as detail}
				<li class="flex items-center gap-3 text-sm text-[var(--color-charcoal)]">
					<Check size={14} class="shrink-0 text-[var(--color-teal)]" />
					{detail}
				</li>
			{/each}
		</ul>
	</div>
</div>
