<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import ContactInfo from '$lib/components/contact/ContactInfo.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import AnimatedSection from '$lib/components/ui/AnimatedSection.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { getI18n, localePath } from '$lib/i18n';
	import type { LayoutData } from '../$types';

	let { data }: { data: LayoutData } = $props();
	const i18n = getI18n();
</script>

<svelte:head>
	<title>{i18n.t('seo.contact.title')}</title>
	<meta name="description" content={i18n.t('seo.contact.description')} />
	<link rel="canonical" href="https://kasalongresort.com/{data.locale}/contact" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={i18n.t('seo.contact.title')} />
	<meta property="og:description" content={i18n.t('seo.contact.description')} />
	<meta property="og:image" content="https://kasalongresort.com/images/resort/interior-1.webp" />
	<meta property="og:url" content="https://kasalongresort.com/{data.locale}/contact" />
</svelte:head>

<!-- Page hero -->
<div class="relative flex h-64 items-end overflow-hidden bg-[var(--color-forest)] sm:h-80">
	<img
		src="/images/resort/k-5.webp"
		alt="Kasalong Resort entrance"
		fetchpriority="high"
		loading="eager"
		class="absolute inset-0 h-full w-full object-cover opacity-35"
	/>
	<div class="relative z-10 w-full px-6 pb-12 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<p class="mb-2 text-xs font-light tracking-widest uppercase text-[var(--color-amber)]">
				{i18n.t('contact.pagePreTitle')}
			</p>
			<h1 class="font-serif text-4xl font-semibold text-white sm:text-5xl">
				{i18n.t('contact.pageTitle')}
			</h1>
		</div>
	</div>
</div>

<section class="bg-[var(--color-cream)] py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<AnimatedSection class="flex flex-col items-center">
			<SectionHeading
				title={i18n.t('contact.sectionTitle')}
				subtitle={i18n.t('contact.sectionSubtitle')}
			/>
		</AnimatedSection>

		<div class="mt-16 grid gap-12 lg:grid-cols-2">
			<!-- Form -->
			<AnimatedSection>
				<div class="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)] lg:p-10">
					<h2 class="mb-6 font-serif text-2xl text-[var(--color-forest)]">
						{i18n.t('contact.formTitle')}
					</h2>
					<ContactForm />
				</div>
			</AnimatedSection>

			<!-- Contact info + map -->
			<AnimatedSection delay={100}>
				<div class="space-y-8">
					<div class="rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
						<h2 class="mb-6 font-serif text-2xl text-[var(--color-forest)]">
							{i18n.t('contact.infoTitle')}
						</h2>
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
			<h2 class="font-serif text-2xl text-white sm:text-3xl">{i18n.t('contact.ctaTitle')}</h2>
			<p class="mt-3 text-white/60">{i18n.t('contact.ctaSubtitle')}</p>
			<div class="mt-6">
				<Button variant="gold" size="lg" href={localePath(data.locale, '/book')}>
					{i18n.t('common.bookYourStay')}
				</Button>
			</div>
		</AnimatedSection>
	</div>
</section>
