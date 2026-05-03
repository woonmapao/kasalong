<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { rooms } from '$lib/data/rooms';
	import { Users, Maximize2 } from 'lucide-svelte';

	const featuredRooms = rooms.filter((r) => r.featured);
</script>

<section class="bg-[var(--color-ivory)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Our Rooms & Villas"
				subtitle="From cozy standard rooms to lavish pool villas, every space is thoughtfully designed with Thai Lanna elegance."
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredRooms as room, i}
				<AnimatedSection delay={i * 100}>
					<article class="group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
						<!-- Image -->
						<div class="relative h-56 overflow-hidden">
							<img
								src={room.image}
								alt={room.name}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								loading="lazy"
							/>
							<div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
							<div class="absolute bottom-3 right-3 rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-semibold text-[var(--color-forest)]">
								{room.size}
							</div>
						</div>

						<!-- Content -->
						<div class="p-6">
							<h3 class="font-serif text-xl text-[var(--color-forest)]">{room.name}</h3>
							<p class="mt-2 text-sm leading-relaxed text-[var(--color-stone)]">{room.description}</p>

							<div class="mt-4 flex items-center gap-4 text-xs text-[var(--color-muted)]">
								<span class="flex items-center gap-1.5">
									<Users size={13} />
									{room.capacity}
								</span>
								<span class="flex items-center gap-1.5">
									<Maximize2 size={13} />
									{room.bedType}
								</span>
							</div>

							<div class="mt-5 flex items-center justify-between border-t border-[var(--color-ivory)] pt-4">
								<Button variant="secondary" size="sm" href="/book">Book This Room</Button>
								<a
									href="/rooms"
									class="text-xs font-medium text-[var(--color-teal)] hover:underline"
								>
									View details →
								</a>
							</div>
						</div>
					</article>
				</AnimatedSection>
			{/each}
		</div>

		<AnimatedSection class="mt-12 flex justify-center">
			<Button variant="primary" size="lg" href="/rooms">View All Rooms</Button>
		</AnimatedSection>
	</div>
</section>
