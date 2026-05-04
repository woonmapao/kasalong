<script lang="ts">
	import { rooms } from '$lib/data/rooms';
	import { getI18n, localePath, localizeRooms } from '$lib/i18n';
	import RoomCard from '$lib/components/rooms/RoomCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const i18n = getI18n();
	const localizedRooms = $derived(localizeRooms(rooms, data.translations));
</script>

<svelte:head>
	<title>{i18n.t('seo.rooms.title')}</title>
	<meta name="description" content={i18n.t('seo.rooms.description')} />
	<link rel="canonical" href="https://kasalongresort.com/{data.locale}/rooms" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t('seo.rooms.title')} />
	<meta property="og:description" content={i18n.t('seo.rooms.description')} />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/room-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/{data.locale}/rooms" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-72 items-end overflow-hidden bg-[var(--color-forest)] sm:h-96">
	<img
		src="/images/resort/room-1.webp"
		alt="Junior Suite with gold leaf ceiling"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-50"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				{i18n.t('rooms.pagePreTitle')}
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">
				{i18n.t('rooms.pageTitle')}
			</h1>
		</div>
	</div>
</div>

<!-- Rooms grid -->
<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title={i18n.t('rooms.sectionTitle')}
				subtitle={i18n.t('rooms.sectionSubtitle')}
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each localizedRooms as room, i}
				<AnimatedSection delay={i * 80}>
					<RoomCard {room} />
				</AnimatedSection>
			{/each}
		</div>

		<!-- Book CTA -->
		<AnimatedSection class="mt-16 rounded-2xl bg-[var(--color-ruby)] p-10 text-center">
			<h2 class="font-serif text-2xl text-white sm:text-3xl">{i18n.t('rooms.ctaTitle')}</h2>
			<p class="mt-3 text-white/60">{i18n.t('rooms.ctaSubtitle')}</p>
			<div class="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
				<Button variant="gold" href={localePath(data.locale, '/book')}>
					{i18n.t('common.bookNow')}
				</Button>
				<Button variant="ghost" href={localePath(data.locale, '/contact')}>
					{i18n.t('common.askAQuestion')}
				</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
