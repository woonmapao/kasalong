<script lang="ts">
	import { siteConfig } from '$lib/data/site';
	import { getI18n, localePath } from '$lib/i18n';
	import { Phone, Mail, MapPin } from 'lucide-svelte';

	const i18n = getI18n();
	const year = new Date().getFullYear();
</script>

<footer class="bg-[var(--color-charcoal)] text-white">
	<!-- Main footer -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
		<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div class="lg:col-span-1">
				<div class="flex flex-col leading-none">
					<span class="font-serif text-2xl font-semibold text-white">{siteConfig.shortName}</span>
					<span class="mt-1 text-[10px] font-light tracking-[0.25em] text-[var(--color-amber)] uppercase">
						Resort & Spa, Pattaya
					</span>
				</div>
				<p class="mt-4 text-sm leading-relaxed text-white/50">
					{i18n.t('footer.tagline')}
				</p>
				<!-- Social -->
				<div class="mt-5 flex gap-3">
					<a
						href={siteConfig.social.facebook}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
						aria-label="Facebook"
					>
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
						</svg>
					</a>
					<a
						href={siteConfig.social.line}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
						aria-label="LINE"
					>
						<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
					{i18n.t('footer.explore')}
				</h3>
				<ul class="space-y-3">
					{#each siteConfig.nav as item}
						<li>
							<a
								href={localePath(i18n.locale, item.path)}
								class="text-sm text-white/50 transition hover:text-white"
							>
								{i18n.t(`nav.${item.key}`)}
							</a>
						</li>
					{/each}
					<li>
						<a href={localePath(i18n.locale, '/book')} class="text-sm text-white/50 transition hover:text-white">
							{i18n.t('footer.bookNow')}
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
					{i18n.t('footer.contact')}
				</h3>
				<ul class="space-y-4">
					<li class="flex gap-3 text-sm text-white/50">
						<MapPin size={15} class="mt-0.5 shrink-0 text-[var(--color-gold)]" />
						<span>{siteConfig.address}</span>
					</li>
					{#each siteConfig.phones as phone}
						<li>
							<a
								href="tel:{phone}"
								class="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
							>
								<Phone size={15} class="shrink-0 text-[var(--color-gold)]" />
								{phone}
							</a>
						</li>
					{/each}
					{#each siteConfig.emails as email}
						<li>
							<a
								href="mailto:{email}"
								class="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
							>
								<Mail size={15} class="shrink-0 text-[var(--color-gold)]" />
								{email}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Hours -->
			<div>
				<h3 class="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
					{i18n.t('footer.hours')}
				</h3>
				<ul class="space-y-3 text-sm text-white/50">
					<li class="flex justify-between gap-4">
						<span>{i18n.t('footer.hoursReception')}</span>
						<span class="text-white/70">{siteConfig.hours.reception}</span>
					</li>
					<li class="flex justify-between gap-4">
						<span>{i18n.t('footer.hoursPool')}</span>
						<span class="text-white/70">{siteConfig.hours.pool}</span>
					</li>
					<li class="flex justify-between gap-4">
						<span>{i18n.t('footer.hoursDining')}</span>
						<span class="text-white/70">{siteConfig.hours.dining}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="border-t border-white/10">
		<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/30 sm:flex-row lg:px-8">
			<span>&copy; {year} {siteConfig.name}. {i18n.t('footer.rights')}</span>
			<span>Pattaya, Chonburi, Thailand</span>
		</div>
	</div>
</footer>
