<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="overflow-hidden bg-[var(--color-cream)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Text -->
			<AnimatedSection>
				<SectionHeading
					title="Where Lanna Tradition Meets Gold-Leaf Grandeur"
					subtitle="Nestled just 10 minutes from downtown Pattaya, Kasalong is unlike any hotel you have visited — every corridor, every room, every ceiling tells a story in gold."
					align="left"
				/>
				<div class="mt-8 space-y-4 text-[var(--color-stone)]">
					<p class="leading-relaxed">
						From the dramatic gold-leaf coffered lobby to intricately carved teak wardrobes adorned with gilded Thai botanical motifs, Kasalong is a living artwork of the Lanna kingdom — a style of Northern Thailand renowned for its rich ornamentation and warm, welcoming spirit.
					</p>
					<p class="leading-relaxed">
						Our flower-mosaic pool, ornate restaurant with its carved-wood ceiling, and grand Lanna ballroom have made Kasalong one of Pattaya's most distinctive resorts for leisure and events alike.
					</p>
				</div>

				<!-- Stats -->
				<div class="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-ivory)] pt-8">
					{#each [{ value: '5', label: 'Room Types' }, { value: '10 min', label: 'to Downtown' }, { value: '24/7', label: 'Guest Service' }] as stat}
						<div>
							<div class="font-serif text-3xl font-semibold text-[var(--color-ruby)]">
								{stat.value}
							</div>
							<div class="mt-1 text-xs uppercase tracking-wide text-[var(--color-muted)]">
								{stat.label}
							</div>
						</div>
					{/each}
				</div>

				<div class="mt-8">
					<Button variant="primary" href="/facilities">Discover Our Facilities</Button>
				</div>
			</AnimatedSection>

			<!-- Real resort image grid -->
			<AnimatedSection delay={150} class="hidden lg:block">
				<div class="grid grid-cols-2 gap-4">
					<img
						src="/images/resort/interior-1.jpg"
						alt="Gold leaf lobby at Kasalong Resort"
						class="h-64 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-81.jpg"
						alt="Resort pool with building reflections"
						class="mt-8 h-64 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-15.jpg"
						alt="Restaurant with gold Thai murals"
						class="-mt-4 h-48 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-54.jpg"
						alt="Deluxe room with ornate gold headboard"
						class="h-48 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
				</div>
			</AnimatedSection>
		</div>
	</div>
</section>
