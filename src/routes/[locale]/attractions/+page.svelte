<script lang="ts">
	import { attractions } from '$lib/data/attractions';
	import { getI18n, localePath, localizeAttractions } from '$lib/i18n';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { MapPin, Clock } from 'lucide-svelte';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const i18n = getI18n();
	const localizedAttractions = $derived(localizeAttractions(attractions, data.translations));
</script>

<svelte:head>
	<title>{i18n.t('seo.attractions.title')}</title>
	<meta name="description" content={i18n.t('seo.attractions.description')} />
	<link rel="canonical" href="https://kasalongresort.com/{data.locale}/attractions" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t('seo.attractions.title')} />
	<meta property="og:description" content={i18n.t('seo.attractions.description')} />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/interior-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/{data.locale}/attractions" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src="/images/resort/interior-2.webp"
		alt="Kasalong Resort exterior"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				{i18n.t('attractions.pagePreTitle')}
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">
				{i18n.t('attractions.pageTitle')}
			</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title={i18n.t('attractions.sectionTitle')}
				subtitle={i18n.t('attractions.sectionSubtitle')}
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each localizedAttractions as attraction, i}
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
			<h2 class="font-serif text-2xl text-white sm:text-3xl">{i18n.t('attractions.ctaTitle')}</h2>
			<p class="mt-3 text-white/60">{i18n.t('attractions.ctaSubtitle')}</p>
			<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
				<Button variant="gold" href={localePath(data.locale, '/book')}>
					{i18n.t('common.bookYourStay')}
				</Button>
				<Button variant="ghost" href={localePath(data.locale, '/contact')}>
					{i18n.t('common.askTheTeam')}
				</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
