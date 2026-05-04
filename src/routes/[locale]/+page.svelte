<script lang="ts">
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import CulturalSection from '$lib/components/home/CulturalSection.svelte';
	import FeaturedRooms from '$lib/components/home/FeaturedRooms.svelte';
	import ServicesOverview from '$lib/components/home/ServicesOverview.svelte';
	import LocationSection from '$lib/components/home/LocationSection.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getI18n, localePath } from '$lib/i18n';
	import type { LayoutData } from './$types';

	let { data }: { data: LayoutData } = $props();
	const i18n = getI18n();
</script>

<svelte:head>
	<title>{i18n.t('seo.home.title')}</title>
	<meta name="description" content={i18n.t('seo.home.description')} />
	<link rel="canonical" href="https://kasalongresort.com/{data.locale}/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t('seo.home.title')} />
	<meta property="og:description" content={i18n.t('seo.home.description')} />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/interior-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/{data.locale}/" />
	<link rel="preload" as="image" href="/images/resort/k-5.webp" />
</svelte:head>

<HeroSection />
<CulturalSection />
<FeaturedRooms />
<ServicesOverview />
<LocationSection />

<!-- CTA strip -->
<section class="relative overflow-hidden py-20">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/images/resort/k-16.webp')"
	></div>
	<div class="absolute inset-0 bg-[var(--color-ruby)]/85"></div>
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
		<div class="mb-5 flex items-center justify-center gap-3">
			<div class="h-px w-12 bg-[var(--color-gold)]/60"></div>
			<div class="h-2 w-2 rotate-45 bg-[var(--color-gold)]"></div>
			<div class="h-px w-12 bg-[var(--color-gold)]/60"></div>
		</div>
		<h2 class="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
			{i18n.t('home.ctaTitle')}
		</h2>
		<p class="mt-4 text-white/70">{i18n.t('home.ctaSubtitle')}</p>
		<div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<Button variant="gold" size="lg" href={localePath(data.locale, '/book')}>
				{i18n.t('common.bookYourStay')}
			</Button>
			<Button variant="ghost" size="lg" href={localePath(data.locale, '/contact')}>
				{i18n.t('common.contactUs')}
			</Button>
		</div>
	</div>
</section>
