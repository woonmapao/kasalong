<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import { Users, Maximize2, BedDouble, Check, ChevronRight } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const room = $derived(data.room);
	const allImages = $derived([room.image, ...(room.images ?? [])]);
	let activeImage = $state(0);
</script>

<svelte:head>
	<title>{room.name} — Kasalong Resort and Spa Pattaya</title>
	<meta
		name="description"
		content="{room.name} at Kasalong Resort Pattaya — {room.size}, {room.bedType}. {room.description}"
	/>
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src={room.image}
		alt={room.name}
		class="absolute inset-0 h-full w-full object-cover opacity-55"
	/>
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(26,58,46,0.85) 0%, transparent 60%)"
	></div>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<!-- Breadcrumb -->
			<nav class="mb-3 flex items-center gap-1.5 text-xs text-white/60">
				<a href="/" class="hover:text-white/90 transition-colors">Home</a>
				<ChevronRight size={12} />
				<a href="/rooms" class="hover:text-white/90 transition-colors">Rooms</a>
				<ChevronRight size={12} />
				<span class="text-[var(--color-amber-light)]">{room.name}</span>
			</nav>
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				Accommodation
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">{room.name}</h1>
		</div>
	</div>
</div>

<!-- Main content -->
<section class="bg-[var(--color-cream)] py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

			<!-- Left column: details -->
			<AnimatedSection>
				<!-- Specs row -->
				<div class="flex flex-wrap gap-5">
					<div class="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm">
						<Maximize2 size={16} class="text-[var(--color-teal)]" />
						<div>
							<p class="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">Size</p>
							<p class="text-sm font-semibold text-[var(--color-forest)]">{room.size}</p>
						</div>
					</div>
					<div class="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm">
						<Users size={16} class="text-[var(--color-teal)]" />
						<div>
							<p class="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">Capacity</p>
							<p class="text-sm font-semibold text-[var(--color-forest)]">{room.capacity}</p>
						</div>
					</div>
					<div class="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm">
						<BedDouble size={16} class="text-[var(--color-teal)]" />
						<div>
							<p class="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted)]">Bed</p>
							<p class="text-sm font-semibold text-[var(--color-forest)]">{room.bedType}</p>
						</div>
					</div>
				</div>

				<!-- Ornament + heading -->
				<div class="mt-8 flex items-center gap-2">
					<div class="h-px w-8 bg-[var(--color-gold)]"></div>
					<div class="h-1.5 w-1.5 rotate-45 bg-[var(--color-gold)]"></div>
					<div class="h-px w-8 bg-[var(--color-gold)]"></div>
				</div>
				<h2 class="mt-4 font-serif text-2xl text-[var(--color-forest)] sm:text-3xl">About This Room</h2>

				<p class="mt-4 text-base leading-relaxed text-[var(--color-stone)]">{room.description}</p>

				<!-- Amenities -->
				<div class="mt-8">
					<h3 class="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
						Room Amenities
					</h3>
					<ul class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
						{#each room.features as feature}
							<li class="flex items-center gap-2 text-sm text-[var(--color-stone)]">
								<Check size={13} class="shrink-0 text-[var(--color-teal)]" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- CTAs -->
				<div class="mt-10 flex flex-wrap gap-3">
					<Button variant="gold" size="lg" href="/book">Book This Room</Button>
					<Button variant="secondary" size="lg" href="/contact">Enquire</Button>
				</div>
			</AnimatedSection>

			<!-- Right column: image gallery -->
			<AnimatedSection delay={120}>
				<!-- Main image -->
				<div class="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
					<img
						src={allImages[activeImage]}
						alt="{room.name} — photo {activeImage + 1}"
						class="aspect-[4/3] w-full object-cover transition-opacity duration-300"
					/>
				</div>

				<!-- Thumbnails -->
				{#if allImages.length > 1}
					<div class="mt-3 grid gap-2" style="grid-template-columns: repeat({allImages.length}, 1fr)">
						{#each allImages as src, i}
							<button
								onclick={() => (activeImage = i)}
								class="overflow-hidden rounded-lg border-2 transition-all {i === activeImage
									? 'border-[var(--color-gold)] opacity-100'
									: 'border-transparent opacity-60 hover:opacity-90'}"
							>
								<img {src} alt="{room.name} thumbnail {i + 1}" class="aspect-[4/3] w-full object-cover" />
							</button>
						{/each}
					</div>
				{/if}
			</AnimatedSection>
		</div>
	</div>
</section>

<!-- CTA banner -->
<section class="bg-[var(--color-forest)] py-16">
	<AnimatedSection class="mx-auto max-w-3xl px-6 text-center lg:px-8">
		<p class="text-xs font-light tracking-[0.3em] uppercase text-[var(--color-amber-light)]">
			Ready to experience it?
		</p>
		<h2 class="mt-3 font-serif text-3xl text-white sm:text-4xl">Book Your Stay at Kasalong</h2>
		<p class="mt-3 text-white/60">
			Secure your {room.name} and enjoy an unforgettable Thai Lanna experience in Pattaya.
		</p>
		<Divider light />
		<div class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
			<Button variant="gold" size="lg" href="/book">Reserve Now</Button>
			<Button variant="ghost" size="lg" href="/rooms">View All Rooms</Button>
		</div>
	</AnimatedSection>
</section>
