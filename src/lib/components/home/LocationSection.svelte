<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { MapPin, Clock } from 'lucide-svelte';

	const highlights = [
		{ label: 'Walking Street', distance: '2.5 km' },
		{ label: 'Pattaya Beach', distance: '4 km' },
		{ label: 'Sanctuary of Truth', distance: '3 km' },
		{ label: 'Floating Market', distance: '5 km' },
		{ label: 'Nong Nooch Garden', distance: '15 km' }
	];
</script>

<section class="bg-[var(--color-cream)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Real resort exterior image -->
			<AnimatedSection class="relative">
				<img
					src="/images/resort/k-3.jpg"
					alt="Kasalong Resort main entrance"
					class="h-[500px] w-full rounded-2xl object-cover shadow-[var(--shadow-card-hover)]"
					loading="lazy"
				/>
				<!-- Floating card -->
				<div class="absolute -bottom-6 -right-4 rounded-xl bg-white p-5 shadow-[var(--shadow-card-hover)] lg:-right-8">
					<div class="flex items-start gap-3">
						<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-ruby)]/10">
							<Clock size={18} class="text-[var(--color-ruby)]" />
						</div>
						<div>
							<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-stone)]">
								Distance to City
							</div>
							<div class="mt-0.5 font-serif text-xl text-[var(--color-forest)]">10 Minutes</div>
						</div>
					</div>
				</div>
			</AnimatedSection>

			<!-- Text -->
			<AnimatedSection delay={150}>
				<SectionHeading
					title="Prime Location in the Heart of Pattaya"
					subtitle="Perfectly positioned to explore the best of Pattaya while retreating to our ornate Lanna sanctuary."
					align="left"
				/>

				<div class="mt-8 space-y-3">
					{#each highlights as place}
						<div class="flex items-center justify-between border-b border-[var(--color-ivory)] py-3">
							<div class="flex items-center gap-3 text-sm text-[var(--color-charcoal)]">
								<MapPin size={14} class="text-[var(--color-gold)]" />
								{place.label}
							</div>
							<span class="rounded-full bg-[var(--color-ivory)] px-3 py-1 text-xs font-medium text-[var(--color-stone)]">
								{place.distance}
							</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 flex gap-4">
					<Button variant="primary" href="/attractions">Nearby Attractions</Button>
					<Button variant="secondary" href="/contact">Get Directions</Button>
				</div>
			</AnimatedSection>
		</div>
	</div>
</section>
