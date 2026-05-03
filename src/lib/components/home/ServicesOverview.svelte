<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { Waves, Sparkles, UtensilsCrossed, Building2, ParkingCircle, Clock } from 'lucide-svelte';

	const services = [
		{ icon: Waves, label: 'Swimming Pool', detail: '6 AM – 9 PM', href: '/facilities' },
		{ icon: Sparkles, label: 'Spa & Wellness', detail: '10 AM – 9 PM', href: '/facilities' },
		{ icon: UtensilsCrossed, label: 'Thai Dining', detail: '6 AM – 10 PM', href: '/facilities' },
		{ icon: Building2, label: 'Conference Rooms', detail: 'Seats up to 200', href: '/facilities' },
		{ icon: ParkingCircle, label: 'Free Parking', detail: 'Guest & tour bus', href: '/contact' },
		{ icon: Clock, label: '24-Hr Reception', detail: 'Always here for you', href: '/contact' }
	];
</script>

<section class="bg-[var(--color-ruby)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Resort Facilities"
				subtitle="Everything you need for a perfect stay, all in one place."
				light
			/>
		</AnimatedSection>

		<div class="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
			{#each services as svc, i}
				{@const Icon = svc.icon}
				<AnimatedSection delay={i * 60}>
					<a
						href={svc.href}
						class="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:bg-white/10"
					>
						<div class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 text-[var(--color-gold)] transition-colors group-hover:bg-[var(--color-gold)]/10">
							<Icon size={22} />
						</div>
						<div>
							<div class="text-sm font-medium text-white">{svc.label}</div>
							<div class="mt-1 text-xs text-white/40">{svc.detail}</div>
						</div>
					</a>
				</AnimatedSection>
			{/each}
		</div>
	</div>
</section>
