<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import { ChevronDown } from 'lucide-svelte';

	function scrollDown() {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	}
</script>

<section
	class="relative flex min-h-svh items-center justify-center overflow-hidden"
	aria-label="Hero"
>
	<!-- Real resort entrance photo -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat"
		style="background-image: url('/images/resort/k-5.jpg')"
	></div>

	<!-- Warm dark overlay — preserves the gold/red tones of the photo -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(160deg, rgba(26,20,8,0.72) 0%, rgba(107,20,20,0.55) 50%, rgba(26,20,8,0.80) 100%)"
	></div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-8">
		<!-- Pre-title -->
		<p
			class="animate-fade-up mb-4 text-xs font-light tracking-[0.35em] uppercase text-[var(--color-amber-light)]"
			style="animation-delay: 100ms"
		>
			Pattaya, Thailand
		</p>

		<!-- Thai ornament -->
		<div class="animate-fade-up mb-6 flex items-center justify-center gap-3" style="animation-delay: 200ms">
			<div class="h-px w-12 bg-[var(--color-gold)]/70"></div>
			<div class="h-2 w-2 rotate-45 bg-[var(--color-gold)]"></div>
			<div class="h-px w-12 bg-[var(--color-gold)]/70"></div>
		</div>

		<!-- Main headline -->
		<h1
			class="animate-fade-up font-serif text-shadow-hero text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
			style="animation-delay: 300ms"
		>
			Kasalong
			<span class="block" style="color: var(--color-amber-light)">Resort & Spa</span>
		</h1>

		<!-- Tagline -->
		<p
			class="animate-fade-up mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
			style="animation-delay: 450ms"
		>
			Experience the grandeur of authentic Thai Lanna culture — gold-leaf ceilings, carved teak interiors, and a stunning flower-mosaic pool await.
		</p>

		<!-- CTAs -->
		<div
			class="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
			style="animation-delay: 600ms"
		>
			<Button variant="gold" size="lg" href="/book">Book Your Stay</Button>
			<Button variant="ghost" size="lg" href="/rooms">Explore Rooms</Button>
		</div>
	</div>

	<!-- Scroll indicator -->
	<button
		class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition hover:text-white"
		onclick={scrollDown}
		aria-label="Scroll down"
	>
		<ChevronDown size={28} />
	</button>
</section>
