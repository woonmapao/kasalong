<script lang="ts">
	import HeroSection from '$lib/components/home/HeroSection.svelte';
	import CulturalSection from '$lib/components/home/CulturalSection.svelte';
	import FeaturedRooms from '$lib/components/home/FeaturedRooms.svelte';
	import ServicesOverview from '$lib/components/home/ServicesOverview.svelte';
	import LocationSection from '$lib/components/home/LocationSection.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Kasalong Resort and Spa Pattaya — Thai Lanna Luxury</title>
	<meta name="description" content="Experience the perfect blend of authentic Thai Lanna culture and modern luxury at Kasalong Resort and Spa, just 10 minutes from downtown Pattaya." />
</svelte:head>

<HeroSection />
<CulturalSection />
<FeaturedRooms />
<ServicesOverview />
<LocationSection />

<!-- CTA strip — matches restaurant's deep red Lanna palette -->
<section class="relative overflow-hidden py-20">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/images/resort/k-16.jpg')"
	></div>
	<div class="absolute inset-0 bg-[var(--color-ruby)]/85"></div>
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
		<!-- Gold ornament -->
		<div class="mb-5 flex items-center justify-center gap-3">
			<div class="h-px w-12 bg-[var(--color-gold)]/60"></div>
			<div class="h-2 w-2 rotate-45 bg-[var(--color-gold)]"></div>
			<div class="h-px w-12 bg-[var(--color-gold)]/60"></div>
		</div>
		<h2 class="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
			Ready to Experience Kasalong?
		</h2>
		<p class="mt-4 text-white/70">
			Book your stay today and step into a world of Thai Lanna grandeur.
		</p>
		<div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
			<Button variant="gold" size="lg" href="/book">Book Your Stay</Button>
			<Button variant="ghost" size="lg" href="/contact">Contact Us</Button>
		</div>
	</div>
</section>
