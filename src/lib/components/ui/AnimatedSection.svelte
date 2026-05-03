<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		delay?: number;
		class?: string;
		children: import('svelte').Snippet;
	}

	let { delay = 0, class: className = '', children }: Props = $props();

	let el: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('visible');
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="reveal {className}">
	{@render children()}
</div>
