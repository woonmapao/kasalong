<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		align?: 'left' | 'center' | 'right';
		light?: boolean;
		class?: string;
	}

	let { title, subtitle, align = 'center', light = false, class: className = '' }: Props = $props();

	const alignClass = $derived({
		left: 'items-start text-left',
		center: 'items-center text-center',
		right: 'items-end text-right'
	}[align]);
</script>

<div class="flex flex-col gap-3 {alignClass} {className}">
	<!-- Thai ornament line -->
	<div class="flex items-center gap-2">
		<div class="h-px w-8 bg-[var(--color-gold)]"></div>
		<div class="h-1.5 w-1.5 rotate-45 bg-[var(--color-gold)]"></div>
		<div class="h-px w-8 bg-[var(--color-gold)]"></div>
	</div>

	<h2
		class="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl {light
			? 'text-white'
			: 'text-[var(--color-forest)]'}"
	>
		{title}
	</h2>

	{#if subtitle}
		<p
			class="max-w-xl text-base leading-relaxed {light
				? 'text-white/70'
				: 'text-[var(--color-stone)]'}"
		>
			{subtitle}
		</p>
	{/if}
</div>
