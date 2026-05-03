<script lang="ts">
	import { onMount } from 'svelte';
	import type { GalleryImage } from '$lib/data/gallery';
	import { X, ChevronLeft, ChevronRight } from 'lucide-svelte';

	interface Props {
		images: GalleryImage[];
		activeIndex: number;
	}

	let { images, activeIndex = $bindable(-1) }: Props = $props();

	const isOpen = $derived(activeIndex >= 0);

	function close() {
		activeIndex = -1;
	}

	function prev() {
		activeIndex = (activeIndex - 1 + images.length) % images.length;
	}

	function next() {
		activeIndex = (activeIndex + 1) % images.length;
	}

	onMount(() => {
		function onKey(e: KeyboardEvent) {
			if (!isOpen) return;
			if (e.key === 'Escape') close();
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		}
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	});

	$effect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
	});
</script>

{#if isOpen}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
		onclick={close}
	>
		<!-- Close -->
		<button
			class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
			onclick={close}
			aria-label="Close lightbox"
		>
			<X size={20} />
		</button>

		<!-- Prev -->
		<button
			class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
			onclick={(e) => { e.stopPropagation(); prev(); }}
			aria-label="Previous image"
		>
			<ChevronLeft size={24} />
		</button>

		<!-- Image -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="relative max-h-[90vh] max-w-[90vw]" onclick={(e) => e.stopPropagation()}>
			<img
				src={images[activeIndex].src}
				alt={images[activeIndex].alt}
				class="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
			/>
			<p class="mt-3 text-center text-sm text-white/60">{images[activeIndex].alt}</p>
		</div>

		<!-- Next -->
		<button
			class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
			onclick={(e) => { e.stopPropagation(); next(); }}
			aria-label="Next image"
		>
			<ChevronRight size={24} />
		</button>

		<!-- Counter -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
			{activeIndex + 1} / {images.length}
		</div>
	</div>
{/if}
