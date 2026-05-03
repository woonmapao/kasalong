<script lang="ts">
	import { facilities, conferenceRooms, quickFacilities } from '$lib/data/facilities';
	import FacilityCard from '$lib/components/facilities/FacilityCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import { Users } from 'lucide-svelte';
	import * as icons from 'lucide-svelte';
</script>

<svelte:head>
	<title>Facilities — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Discover Kasalong's world-class facilities: resort pool, Thai dining, conference rooms, and more." />
	<link rel="canonical" href="https://kasalongresort.com/facilities" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Facilities — Kasalong Resort and Spa Pattaya" />
	<meta property="og:description" content="Discover Kasalong's world-class facilities: resort pool, Thai dining, conference rooms, and more." />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/k-81.webp" />
	<meta property="og:url" content="https://kasalongresort.com/facilities" />
	<meta name="twitter:title" content="Facilities — Kasalong Resort and Spa Pattaya" />
	<meta name="twitter:description" content="Discover Kasalong's world-class facilities: resort pool, Thai dining, conference rooms, and more." />
	<meta name="twitter:image" content="https://kasalongresort.com/images/resort/k-81.webp" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src="/images/resort/k-81.webp"
		alt="Kasalong resort pool"
		fetchpriority="high" loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				What We Offer
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Resort Facilities</h1>
		</div>
	</div>
</div>

<!-- Quick facilities grid -->
<section class="bg-[var(--color-ruby)] py-10">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
			{#each quickFacilities as qf}
				{@const Icon = (icons as Record<string, unknown>)[qf.icon] as typeof icons.Wifi}
				<div class="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4">
					<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/30">
						{#if Icon}
							<Icon size={18} class="text-[var(--color-gold)]" />
						{/if}
					</div>
					<div>
						<div class="text-sm font-medium text-white">{qf.label}</div>
						<div class="text-xs text-white/40">{qf.detail}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Facilities sections -->
<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl space-y-24 px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Everything for a Perfect Stay"
				subtitle="World-class amenities designed to delight every guest, from leisure travelers to business delegates."
			/>
			<Divider />
		</AnimatedSection>

		{#each facilities as facility, i}
			<AnimatedSection>
				<FacilityCard {facility} imageLeft={i % 2 === 0} />
			</AnimatedSection>
			{#if i < facilities.length - 1}
				<div class="border-t border-[var(--color-ivory)]"></div>
			{/if}
		{/each}
	</div>
</section>

<!-- Conference rooms -->
<section class="bg-[var(--color-ivory)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Conference & Event Spaces"
				subtitle="Three versatile spaces equipped for every type of event, from intimate boardroom meetings to grand banquets."
			/>
		</AnimatedSection>

		<div class="mt-14 grid gap-6 sm:grid-cols-3">
			{#each conferenceRooms as room, i}
				<AnimatedSection delay={i * 100}>
					<div class="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
						<div class="flex items-start justify-between">
							<h3 class="font-serif text-xl text-[var(--color-forest)]">{room.name}</h3>
							<div class="flex items-center gap-1.5 rounded-full bg-[var(--color-gold)]/15 px-3 py-1">
								<Users size={13} class="text-[var(--color-gold)]" />
								<span class="text-sm font-semibold text-[var(--color-forest)]">{room.capacity}</span>
							</div>
						</div>
						<div class="mt-1 text-xs text-[var(--color-muted)]">Max capacity</div>
						<ul class="mt-6 space-y-2">
							{#each room.features as feature}
								<li class="flex items-center gap-2 text-sm text-[var(--color-stone)]">
									<div class="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></div>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
				</AnimatedSection>
			{/each}
		</div>
	</div>
</section>
