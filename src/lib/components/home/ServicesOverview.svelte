<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { getI18n, localePath } from '$lib/i18n';
	import { Waves, Sparkles, UtensilsCrossed, Building2, ParkingCircle, Clock } from 'lucide-svelte';

	const i18n = getI18n();

	const serviceIcons = [Waves, Sparkles, UtensilsCrossed, Building2, ParkingCircle, Clock];
	const serviceKeys = ['pool', 'spa', 'dining', 'conference', 'parking', 'reception'] as const;
	const serviceLinks = ['/facilities', '/facilities', '/facilities', '/facilities', '/contact', '/contact'];
</script>

<section class="bg-[var(--color-ruby)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title={i18n.t('home.servicesTitle')}
				subtitle={i18n.t('home.servicesSubtitle')}
				light
			/>
		</AnimatedSection>

		<div class="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
			{#each serviceKeys as key, i}
				{@const Icon = serviceIcons[i]}
				<AnimatedSection delay={i * 60}>
					<a
						href={localePath(i18n.locale, serviceLinks[i])}
						class="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:bg-white/10"
					>
						<div class="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/30 text-[var(--color-gold)] transition-colors group-hover:bg-[var(--color-gold)]/10">
							<Icon size={22} />
						</div>
						<div>
							<div class="text-sm font-medium text-white">
								{i18n.translations.home.services[key].label}
							</div>
							<div class="mt-1 text-xs text-white/40">
								{i18n.translations.home.services[key].detail}
							</div>
						</div>
					</a>
				</AnimatedSection>
			{/each}
		</div>
	</div>
</section>
