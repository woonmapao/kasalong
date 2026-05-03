<script lang="ts">
	interface Props {
		light?: boolean;
	}
	let { light = false }: Props = $props();
</script>

<div class="flex items-center justify-center py-2">
	<svg
		viewBox="0 0 200 20"
		class="w-48 {light ? 'opacity-30' : 'opacity-50'}"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<line x1="0" y1="10" x2="75" y2="10" stroke="#c9a84c" stroke-width="0.8" />
		<polygon points="90,4 96,10 90,16 84,10" fill="#c9a84c" />
		<circle cx="100" cy="10" r="2.5" fill="#c9a84c" />
		<polygon points="110,4 116,10 110,16 104,10" fill="#c9a84c" />
		<line x1="125" y1="10" x2="200" y2="10" stroke="#c9a84c" stroke-width="0.8" />
	</svg>
</div>
