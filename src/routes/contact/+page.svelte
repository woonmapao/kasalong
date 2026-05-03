<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Contact Us — Kasalong Resort and Spa Pattaya</title>
	<meta name="description" content="Get in touch with Kasalong Resort and Spa Pattaya. Call, email, or send us a message. We're available 24 hours a day." />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-64 items-end overflow-hidden bg-[var(--color-forest)] sm:h-80">
	<img
		src="/images/resort/k-5.jpg"
		alt="Kasalong Resort entrance"
		class="absolute inset-0 h-full w-full object-cover opacity-35"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				We'd Love to Hear From You
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">Contact Us</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title="Get in Touch"
				subtitle="Our team is available 24 hours a day to assist with reservations, enquiries, and anything else you need."
			/>
		</AnimatedSection>

		<div class="mt-16 grid gap-12 lg:grid-cols-2">
			<!-- Form -->
			<AnimatedSection>
				<div class="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] lg:p-10">
					<h2 class="mb-6 font-serif text-2xl text-[var(--color-forest)]">Send a Message</h2>
					<ContactForm />
				</div>
			</AnimatedSection>

			<!-- Contact info + map -->
			<AnimatedSection delay={100}>
				<div class="space-y-8">
					<div class="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
						<h2 class="mb-6 font-serif text-2xl text-[var(--color-forest)]">Our Information</h2>
						<ContactInfo />
					</div>

					<!-- Map -->
					<div class="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
						<iframe
							title="Kasalong Resort location map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6234567890123!2d100.8697!3d12.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKasalong+Resort+and+Spa!5e0!3m2!1sen!2sth!4v1234567890"
							width="100%"
							height="280"
							style="border:0;"
							allowfullscreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</AnimatedSection>
		</div>

		<!-- Book CTA -->
		<AnimatedSection class="mt-16 rounded-2xl bg-[var(--color-ruby)] p-10 text-center">
			<h2 class="font-serif text-2xl text-white sm:text-3xl">Ready to Book?</h2>
			<p class="mt-3 text-white/60">
				Skip the form and book directly through your preferred platform.
			</p>
			<div class="mt-6">
				<Button variant="gold" size="lg" href="/book">View Booking Options</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
