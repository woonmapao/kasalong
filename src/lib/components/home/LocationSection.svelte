<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getI18n, localePath } from '$lib/i18n';
	import { MapPin, Clock } from 'lucide-svelte';

	const i18n = getI18n();

	const highlightKeys = [
		{ key: 'walkingStreet', distance: '2.5 km' },
		{ key: 'pattayaBeach', distance: '4 km' },
		{ key: 'sanctuaryOfTruth', distance: '3 km' },
		{ key: 'floatingMarket', distance: '5 km' },
		{ key: 'nongNoochGarden', distance: '15 km' }
	] as const;
</script>

<section class="bg-[var(--color-cream)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Resort exterior image -->
			<AnimatedSection class="relative">
				<img
					src="/images/resort/k-3.webp"
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
								{i18n.t('home.locationDistanceLabel')}
							</div>
							<div class="mt-0.5 font-serif text-xl text-[var(--color-forest)]">
								{i18n.t('home.locationDistanceValue')}
							</div>
						</div>
					</div>
				</div>
			</AnimatedSection>

			<!-- Text -->
			<AnimatedSection delay={150}>
				<SectionHeading
					title={i18n.t('home.locationTitle')}
					subtitle={i18n.t('home.locationSubtitle')}
					align="left"
				/>

				<div class="mt-8 space-y-3">
					{#each highlightKeys as { key, distance }}
						<div class="flex items-center justify-between border-b border-[var(--color-ivory)] py-3">
							<div class="flex items-center gap-3 text-sm text-[var(--color-charcoal)]">
								<MapPin size={14} class="text-[var(--color-gold)]" />
								{i18n.translations.home.locationHighlights[key]}
							</div>
							<span class="rounded-full bg-[var(--color-ivory)] px-3 py-1 text-xs font-medium text-[var(--color-stone)]">
								{distance}
							</span>
						</div>
					{/each}
				</div>

				<div class="mt-8 flex gap-4">
					<Button variant="primary" href={localePath(i18n.locale, '/attractions')}>
						{i18n.t('common.nearbyAttractions')}
					</Button>
					<Button variant="secondary" href={localePath(i18n.locale, '/contact')}>
						{i18n.t('common.getDirections')}
					</Button>
				</div>
			</AnimatedSection>
		</div>
	</div>
</section>
