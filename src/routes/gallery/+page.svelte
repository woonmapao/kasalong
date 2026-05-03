<script lang="ts">
	import { galleryImages, type GalleryCategory } from '$lib/data/gallery';
	import GalleryGrid from '$lib/components/gallery/GalleryGrid.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';

	const categories: { value: GalleryCategory; label: string }[] = [
		{ value: 'all', label: 'All Photos' },
		{ value: 'exterior', label: 'Exterior & Grounds' },
		{ value: 'facilities', label: 'Pool, Dining & Facilities' },
		{ value: 'rooms', label: 'Rooms & Suites' }
	];

	let activeCategory = $state<GalleryCategory>('all');

	const filteredImages = $derived(
		activeCategory === 'all'
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory)
	);
</script>

<svelte:head>
	<title>Gallery — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Explore Kasalong Resort's photo gallery: rooms, pool, dining, and the beautiful surroundings of Pattaya, Thailand." />
	<link rel="canonical" href="https://kasalongresort.com/gallery" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Gallery — Kasalong Resort and Spa Pattaya" />
	<meta property="og:description" content="Explore Kasalong Resort's photo gallery: rooms, pool, dining, and the beautiful surroundings of Pattaya, Thailand." />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/k-182.webp" />
	<meta property="og:url" content="https://kasalongresort.com/gallery" />
	<meta name="twitter:title" content="Gallery — Kasalong Resort and Spa Pattaya" />
	<meta name="twitter:description" content="Explore Kasalong Resort's photo gallery: rooms, pool, dining, and the beautiful surroundings of Pattaya, Thailand." />
	<meta name="twitter:image" content="https://kasalongresort.com/images/resort/k-182.webp" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-80">
	<img
		src="/images/resort/k-3.webp"
		alt="Kasalong Resort main entrance"
		fetchpriority="high" loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				Visual Story
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Photo Gallery</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="A Glimpse of Kasalong"
				subtitle="Browse our collection of photos showcasing the beauty of our resort, rooms, facilities, and the stunning Pattaya surroundings."
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
