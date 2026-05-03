<script lang="ts">
	import { rooms } from '$lib/data/rooms';
	import RoomCard from '$lib/components/rooms/RoomCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Our Rooms — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Choose from 5 elegant room types at Kasalong Resort: Standard, Superior, Deluxe, Pool Villa, and Junior Suite — each with Thai Lanna-inspired design." />
	<link rel="canonical" href="https://kasalongresort.com/rooms" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Our Rooms — Kasalong Resort and Spa Pattaya" />
	<meta property="og:description" content="Choose from 5 elegant room types at Kasalong Resort: Standard, Superior, Deluxe, Pool Villa, and Junior Suite — each with Thai Lanna-inspired design." />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/room-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/rooms" />
	<meta name="twitter:title" content="Our Rooms — Kasalong Resort and Spa Pattaya" />
	<meta name="twitter:description" content="Choose from 5 elegant room types at Kasalong Resort: Standard, Superior, Deluxe, Pool Villa, and Junior Suite — each with Thai Lanna-inspired design." />
	<meta name="twitter:image" content="https://kasalongresort.com/images/resort/room-1.webp" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src="/images/resort/room-1.webp"
		alt="Junior Suite with gold leaf ceiling"
		fetchpriority="high" loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				Accommodation
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Our Rooms & Villas</h1>
		</div>
	</div>
</div>

<!-- Rooms grid -->
<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Find Your Perfect Room"
				subtitle="Five distinct room types, each offering a unique expression of Thai Lanna luxury and modern comfort."
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each rooms as room, i}
				<AnimatedSection delay={i * 80}>
					<RoomCard {room} />
				</AnimatedSection>
			{/each}
		</div>

		<!-- Book CTA -->
		<AnimatedSection class="mt-16 rounded-2xl bg-[var(--color-ruby)] p-10 text-center">
			<h2 class="font-serif text-2xl text-white sm:text-3xl">Not sure which room is right for you?</h2>
			<p class="mt-3 text-white/60">
				Contact our team and we'll help you find the perfect match for your stay.
			</p>
			<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
				<Button variant="gold" href="/book">Book Now</Button>
				<Button variant="ghost" href="/contact">Ask a Question</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
