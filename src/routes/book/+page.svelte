<script lang="ts">
	import { platforms, directContacts } from '$lib/data/booking';
	import BookingPlatformCard from '$lib/components/booking/BookingPlatformCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Divider from '$lib/components/ui/Divider.svelte';
	import { MessageCircle, ShieldCheck, Star, Headphones } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Book Your Stay — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Book Kasalong Resort and Spa Pattaya on your preferred platform: Agoda, Booking.com, Traveloka, Trip.com, Expedia or Ctrip." />
	<link rel="canonical" href="https://kasalongresort.com/book" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Book Your Stay — Kasalong Resort and Spa Pattaya" />
	<meta property="og:description" content="Book Kasalong Resort and Spa Pattaya on your preferred platform: Agoda, Booking.com, Traveloka, Trip.com, Expedia or Ctrip." />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/interior-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/book" />
	<meta name="twitter:title" content="Book Your Stay — Kasalong Resort and Spa Pattaya" />
	<meta name="twitter:description" content="Book Kasalong Resort and Spa Pattaya on your preferred platform: Agoda, Booking.com, Traveloka, Trip.com, Expedia or Ctrip." />
	<meta name="twitter:image" content="https://kasalongresort.com/images/resort/interior-1.webp" />
</svelte:head>

<!-- Hero -->
<div class="relative flex h-64 items-end overflow-hidden bg-[var(--color-forest)] sm:h-80">
	<img
		src="/images/resort/interior-1.webp"
		alt="Kasalong lobby"
		fetchpriority="high" loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-30"
	/>
	<div class="relative z-10 w-full px-6 pb-12 text-center lg:px-8">
		<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
			Reserve Your Experience
		</p>
		<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Book Your Stay</h1>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">

		<!-- Trust signals -->
		<AnimatedSection>
			<div class="grid grid-cols-3 gap-4 rounded-2xl border border-[var(--color-ivory)] bg-white p-6 sm:p-8">
				{#each [
					{ icon: ShieldCheck, label: 'Secure Booking', detail: 'All platforms are verified' },
					{ icon: Star, label: 'Best Experience', detail: 'Guaranteed quality stay' },
					{ icon: Headphones, label: '24-Hr Support', detail: 'We\'re always available' }
				] as trust}
					{@const TrustIcon = trust.icon}
					<div class="flex flex-col items-center gap-2 text-center">
						<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-forest)]/10">
							<TrustIcon size={20} class="text-[var(--color-forest)]" />
						</div>
						<div>
							<div class="text-sm font-semibold text-[var(--color-charcoal)]">{trust.label}</div>
							<div class="mt-0.5 text-xs text-[var(--color-muted)]">{trust.detail}</div>
						</div>
					</div>
				{/each}
			</div>
		</AnimatedSection>

		<!-- Platform selector -->
		<AnimatedSection class="mt-16 flex flex-col items-center">
			<SectionHeading
				title="Choose Your Booking Platform"
				subtitle="Select your preferred platform below. All links take you directly to Kasalong Resort's listing."
			/>
			<Divider />
		</AnimatedSection>

		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each platforms as platform, i}
				<AnimatedSection delay={i * 60}>
					<BookingPlatformCard {platform} />
				</AnimatedSection>
			{/each}
		</div>

		<!-- Direct contact -->
		<AnimatedSection class="mt-16">
			<div class="rounded-2xl bg-[var(--color-ruby)] p-8 text-center sm:p-10">
				<p class="text-xs font-semibold uppercase tracking-widest text-[var(--color-amber)]">
					Prefer to talk to us directly?
				</p>
				<h2 class="mt-3 font-serif text-2xl text-white sm:text-3xl">
					Book via LINE or Facebook
				</h2>
				<p class="mt-3 text-white/60">
					Chat with our reservations team for personalised assistance, special requests, or group bookings.
				</p>

				<div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
					{#each directContacts as contact}
						<a
							href={contact.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:min-w-[200px]"
							style="background-color: {contact.color}; box-shadow: 0 4px 16px {contact.color}40"
						>
							{#if contact.id === 'line'}
								<MessageCircle size={18} />
							{:else}
								<svg class="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
							{/if}
							{contact.label}
						</a>
					{/each}
				</div>
			</div>
		</AnimatedSection>

		<!-- FAQ / info strip -->
		<AnimatedSection class="mt-12 rounded-xl bg-[var(--color-ivory)] p-6">
			<p class="text-center text-sm text-[var(--color-stone)]">
				<strong class="text-[var(--color-forest)]">Need help choosing?</strong>
				Agoda and Traveloka offer the best rates for Thai travelers. Booking.com is great for free cancellation flexibility. Contact our team via LINE for group or special event bookings.
			</p>
		</AnimatedSection>
	</div>
</section>
