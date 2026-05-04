<script lang="ts">
	import { galleryImages, type GalleryCategory } from '$lib/data/gallery';
	import { getI18n } from '$lib/i18n';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const i18n = getI18n();

	const categories = $derived([
		{ value: 'all' as GalleryCategory, label: data.translations.gallery.categories.all },
		{ value: 'exterior' as GalleryCategory, label: data.translations.gallery.categories.exterior },
		{ value: 'facilities' as GalleryCategory, label: data.translations.gallery.categories.facilities },
		{ value: 'rooms' as GalleryCategory, label: data.translations.gallery.categories.rooms }
	]);

	let activeCategory = $state<GalleryCategory>('all');

	const filteredImages = $derived(
		activeCategory === 'all'
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory)
	);
</script>

<svelte:head>
	<title>{i18n.t('seo.gallery.title')}</title>
	<meta name="description" content={i18n.t('seo.gallery.description')} />
	<link rel="canonical" href="https://kasalongresort.com/{data.locale}/gallery" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t('seo.gallery.title')} />
	<meta property="og:description" content={i18n.t('seo.gallery.description')} />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/k-182.webp" />
	<meta property="og:url" content="https://kasalongresort.com/{data.locale}/gallery" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-80">
	<img
		src="/images/resort/k-3.webp"
		alt="Kasalong Resort main entrance"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				{i18n.t('gallery.pagePreTitle')}
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">
				{i18n.t('gallery.pageTitle')}
			</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title={i18n.t('gallery.sectionTitle')}
				subtitle={i18n.t('gallery.sectionSubtitle')}
			/>
		</AnimatedSection>

		<!-- Category tabs -->
		<div class="mt-10 flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					class="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200
						{activeCategory === cat.value
						? 'bg-[var(--color-forest)] text-white'
						: 'bg-white text-[var(--color-stone)] hover:bg-[var(--color-ivory)]'}"
					onclick={() => (activeCategory = cat.value)}
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<div class="mt-10">
			<GalleryGrid images={filteredImages} />
		</div>
	</div>
</section>
