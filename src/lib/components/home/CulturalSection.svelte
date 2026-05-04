<script lang="ts">
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getI18n, localePath } from '$lib/i18n';

	const i18n = getI18n();
</script>

<section class="overflow-hidden bg-[var(--color-cream)] py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<!-- Text -->
			<AnimatedSection>
				<SectionHeading
					title={i18n.t('home.culturalTitle')}
					subtitle={i18n.t('home.culturalSubtitle')}
					align="left"
				/>
				<div class="mt-8 space-y-4 text-[var(--color-stone)]">
					<p class="leading-relaxed">{i18n.t('home.culturalBody1')}</p>
					<p class="leading-relaxed">{i18n.t('home.culturalBody2')}</p>
				</div>

				<!-- Stats -->
				<div class="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-ivory)] pt-8">
					{#each [i18n.translations.home.culturalStat1, i18n.translations.home.culturalStat2, i18n.translations.home.culturalStat3] as stat}
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
					<Button variant="primary" href={localePath(i18n.locale, '/facilities')}>
						{i18n.t('home.culturalButton')}
					</Button>
				</div>
			</AnimatedSection>

			<!-- Resort image grid -->
			<AnimatedSection delay={150} class="hidden lg:block">
				<div class="grid grid-cols-2 gap-4">
					<img
						src="/images/resort/interior-1.webp"
						alt="Gold leaf lobby at Kasalong Resort"
						class="h-64 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-81.webp"
						alt="Resort pool with building reflections"
						class="mt-8 h-64 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-15.webp"
						alt="Restaurant with gold Thai murals"
						class="-mt-4 h-48 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
					<img
						src="/images/resort/k-54.webp"
						alt="Deluxe room with ornate gold headboard"
						class="h-48 w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
						loading="lazy"
					/>
				</div>
			</AnimatedSection>
		</div>
	</div>
</section>
