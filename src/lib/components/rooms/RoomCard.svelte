<script lang="ts">
	import type { Room } from '$lib/data/rooms';
	import Button from '$lib/components/ui/Button.svelte';
	import { Users, Maximize2, BedDouble, Check } from 'lucide-svelte';

	interface Props {
		room: Room;
	}

	let { room }: Props = $props();
	let showFeatures = $state(false);
</script>

<article class="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
	<!-- Image -->
	<div class="relative h-64 overflow-hidden">
		<img
			src={room.image}
			alt={room.name}
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			loading="lazy"
		/>
		<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
			<div class="flex items-end justify-between">
				<h3 class="font-serif text-xl text-white">{room.name}</h3>
				<span class="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-forest)]">
					{room.size}
				</span>
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="p-6">
		<!-- Meta -->
		<div class="flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
			<span class="flex items-center gap-1.5">
				<Users size={13} />
				{room.capacity}
			</span>
			<span class="flex items-center gap-1.5">
				<BedDouble size={13} />
				{room.bedType}
			</span>
			<span class="flex items-center gap-1.5">
				<Maximize2 size={13} />
				{room.size}
			</span>
		</div>

		<p class="mt-3 text-sm leading-relaxed text-[var(--color-stone)]">{room.description}</p>

		<!-- Features toggle -->
		<button
			class="mt-4 text-xs font-medium text-[var(--color-teal)] hover:underline"
			onclick={() => (showFeatures = !showFeatures)}
		>
			{showFeatures ? 'Hide amenities ↑' : 'View amenities ↓'}
		</button>

		{#if showFeatures}
			<ul class="mt-3 grid grid-cols-2 gap-1.5">
				{#each room.features as feature}
					<li class="flex items-center gap-1.5 text-xs text-[var(--color-stone)]">
						<Check size={12} class="shrink-0 text-[var(--color-teal)]" />
						{feature}
					</li>
				{/each}
			</ul>
		{/if}

		<div class="mt-5 border-t border-[var(--color-ivory)] pt-4">
			<Button variant="gold" size="sm" href="/book" class="w-full">Book This Room</Button>
		</div>
	</div>
</article>
