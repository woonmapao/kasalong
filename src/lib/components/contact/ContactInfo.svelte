<script lang="ts">
	import { siteConfig } from '$lib/data/site';
	import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-svelte';
</script>

<div class="space-y-8">
	<!-- Address -->
	<div class="flex gap-4">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)]/10">
			<MapPin size={18} class="text-[var(--color-forest)]" />
		</div>
		<div>
			<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Address</div>
			<p class="mt-1 text-sm leading-relaxed text-[var(--color-charcoal)]">{siteConfig.address}</p>
		</div>
	</div>

	<!-- Phones -->
	<div class="flex gap-4">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)]/10">
			<Phone size={18} class="text-[var(--color-forest)]" />
		</div>
		<div>
			<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Telephone</div>
			{#each siteConfig.phones as phone}
				<a href="tel:{phone}" class="mt-1 block text-sm text-[var(--color-charcoal)] hover:text-[var(--color-teal)]">
					{phone}
				</a>
			{/each}
		</div>
	</div>

	<!-- Emails -->
	<div class="flex gap-4">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)]/10">
			<Mail size={18} class="text-[var(--color-forest)]" />
		</div>
		<div>
			<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Email</div>
			<div class="mt-1 space-y-1">
				<div>
					<div class="text-[10px] uppercase tracking-wide text-[var(--color-muted)]">Reservations</div>
					<a href="mailto:{siteConfig.emails[0]}" class="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-teal)]">
						{siteConfig.emails[0]}
					</a>
				</div>
				<div>
					<div class="text-[10px] uppercase tracking-wide text-[var(--color-muted)]">General</div>
					<a href="mailto:{siteConfig.emails[1]}" class="text-sm text-[var(--color-charcoal)] hover:text-[var(--color-teal)]">
						{siteConfig.emails[1]}
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Hours -->
	<div class="flex gap-4">
		<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)]/10">
			<Clock size={18} class="text-[var(--color-forest)]" />
		</div>
		<div>
			<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Hours</div>
			<dl class="mt-1 space-y-1 text-sm">
				{#each Object.entries(siteConfig.hours) as [key, val]}
					<div class="flex justify-between gap-8">
						<dt class="capitalize text-[var(--color-stone)]">{key}</dt>
						<dd class="text-[var(--color-charcoal)]">{val}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>

	<!-- Social -->
	<div class="border-t border-[var(--color-ivory)] pt-6">
		<div class="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">Connect with us</div>
		<div class="mt-3 flex gap-3">
			<a
				href={siteConfig.social.facebook}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-lg border border-[#1877F2]/20 bg-[#1877F2]/5 px-4 py-2 text-sm font-medium text-[#1877F2] transition hover:bg-[#1877F2]/10"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
				Facebook
			</a>
			<a
				href={siteConfig.social.line}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 rounded-lg border border-[#06C755]/20 bg-[#06C755]/5 px-4 py-2 text-sm font-medium text-[#06C755] transition hover:bg-[#06C755]/10"
			>
				<MessageCircle size={16} />
				LINE
			</a>
		</div>
	</div>
</div>
