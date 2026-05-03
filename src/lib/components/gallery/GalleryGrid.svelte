<script lang="ts">
	import type { GalleryImage } from '$lib/data/gallery';
	import LightboxModal from './LightboxModal.svelte';
	import { ZoomIn } from 'lucide-svelte';

	interface Props {
		images: GalleryImage[];
	}

	let { images }: Props = $props();

	let lightboxIndex = $state(-1);

	function open(index: number) {
		lightboxIndex = index;
	}
</script>

<div class="columns-2 gap-4 sm:columns-3 lg:columns-4">
	{#each images as image, i}
		<button
			class="group mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl"
			onclick={() => open(i)}
			aria-label="Open {image.alt}"
		>
			<div class="relative">
				<img
					src={image.src}
					alt={image.alt}
					class="w-full object-cover transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
					<ZoomIn size={24} class="scale-0 text-white transition-transform duration-300 group-hover:scale-100" />
				</div>
			</div>
		</button>
	{/each}
</div>

<LightboxModal {images} bind:activeIndex={lightboxIndex} />
