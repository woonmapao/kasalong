<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': ['Hotel', 'LodgingBusiness'],
		name: 'Kasalong Resort and Spa',
		url: 'https://kasalongresort.com',
		telephone: '+66984291449',
		email: 'rsvn.kasalongresort@gmail.com',
		image: 'https://kasalongresort.com/images/resort/interior-1.webp',
		priceRange: '$$',
		description:
			'Experience the grandeur of authentic Thai Lanna culture at Kasalong Resort and Spa in Pattaya — gold-leaf ceilings, carved teak interiors, and a stunning flower-mosaic pool.',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '258/11-12 M2, Naglua Banglamung',
			addressLocality: 'Pattaya',
			addressRegion: 'Chonburi',
			postalCode: '20150',
			addressCountry: 'TH'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 12.9654,
			longitude: 100.8789
		},
		checkinTime: '14:00',
		checkoutTime: '12:00',
		amenityFeature: [
			{ '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
			{ '@type': 'LocationFeatureSpecification', name: '24-hour Front Desk', value: true },
			{ '@type': 'LocationFeatureSpecification', name: 'Conference Facilities', value: true }
		],
		sameAs: ['https://www.facebook.com/KasalongResortandSpa']
	};
</script>

<svelte:head>
	<!-- Global defaults (pages override these with their own svelte:head) -->
	<meta property="og:site_name" content="Kasalong Resort and Spa" />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- JSON-LD: Hotel / LocalBusiness -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />
