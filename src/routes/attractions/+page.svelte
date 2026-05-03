<script lang="ts">
	import { attractions } from '$lib/data/attractions';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { MapPin, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Nearby Attractions — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Explore Pattaya's best attractions just minutes from Kasalong Resort: Walking Street, Pattaya Beach, Sanctuary of Truth, Floating Market and more." />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src="/images/resort/interior-2.jpg"
		alt="Kasalong Resort exterior"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				Explore Pattaya
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Nearby Attractions</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Discover Pattaya"
				subtitle="Our prime location puts Pattaya's most iconic attractions at your doorstep. Explore beaches, cultural landmarks, and vibrant entertainment — all within easy reach."
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each attractions as attraction, i}
				<AnimatedSection delay={i * 80}>
					<article class="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
						<div class="relative h-56 overflow-hidden">
							<img
								src={attraction.image}
								alt={attraction.name}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
							<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
								<div class="flex items-center gap-2">
									<span class="rounded-full bg-[var(--color-gold)] px-2 py-0.5 text-xs font-semibold capitalize text-[var(--color-forest)]">
										{attraction.category}
									</span>
								</div>
							</div>
						</div>
						<div class="p-6">
							<h3 class="font-serif text-xl text-[var(--color-forest)]">{attraction.name}</h3>
							<div class="mt-2 flex items-center gap-4 text-xs text-[var(--color-muted)]">
								<span class="flex items-center gap-1.5">
									<MapPin size={12} />
									{attraction.distance}
								</span>
								<span class="flex items-center gap-1.5">
									<Clock size={12} />
									{attraction.duration}
								</span>
							</div>
							<p class="mt-3 text-sm leading-relaxed text-[var(--color-stone)]">
								{attraction.description}
							</p>
						</div>
					</article>
				</AnimatedSection>
			{/each}
		</div>

		<!-- CTA -->
		<AnimatedSection class="mt-16 rounded-2xl bg-[var(--color-ruby)] p-10 text-center">
			<h2 class="font-serif text-2xl text-white sm:text-3xl">Ready to Start Exploring?</h2>
			<p class="mt-3 text-white/60">
				Our friendly reception team can arrange tours, transfers, and local recommendations.
			</p>
			<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
				<Button variant="gold" href="/book">Book Your Stay</Button>
				<Button variant="ghost" href="/contact">Ask the Team</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
