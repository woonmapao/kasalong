<script lang="ts">
	import { getI18n } from '$lib/i18n';

	const i18n = getI18n();

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	// Initialize subject from translations
	$effect(() => {
		if (!formData.subject) {
			formData.subject = i18n.translations.contact.subjects.generalEnquiry;
		}
	});

	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		status = 'sending';

		try {
			const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(formData)
			});
			status = res.ok ? 'success' : 'error';
		} catch {
			status = 'error';
		}
	}

	function resetForm() {
		status = 'idle';
		formData = { name: '', email: '', phone: '', subject: i18n.translations.contact.subjects.generalEnquiry, message: '' };
	}

	const inputClass =
		'w-full rounded-lg border border-[var(--color-ivory)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20 transition-colors';
</script>

{#if status === 'success'}
	<div class="rounded-2xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-8 text-center">
		<div class="text-4xl mb-3">✓</div>
		<h3 class="font-serif text-xl text-[var(--color-forest)]">{i18n.t('contact.formSuccess')}</h3>
		<p class="mt-2 text-sm text-[var(--color-stone)]">{i18n.t('contact.formSuccessBody')}</p>
		<button
			class="mt-5 text-sm font-medium text-[var(--color-teal)] hover:underline"
			onclick={resetForm}
		>
			{i18n.t('common.sendAnotherMessage')}
		</button>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-4">
		<div class="grid gap-4 sm:grid-cols-2">
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="name">
					{i18n.t('contact.formName')}
				</label>
				<input
					id="name"
					type="text"
					required
					placeholder={i18n.t('contact.formNamePlaceholder')}
					class={inputClass}
					bind:value={formData.name}
				/>
			</div>
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="email">
					{i18n.t('contact.formEmail')}
				</label>
				<input
					id="email"
					type="email"
					required
					placeholder="your@email.com"
					class={inputClass}
					bind:value={formData.email}
				/>
			</div>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="phone">
					{i18n.t('contact.formPhone')}
				</label>
				<input
					id="phone"
					type="tel"
					placeholder={i18n.t('contact.formPhonePlaceholder')}
					class={inputClass}
					bind:value={formData.phone}
				/>
			</div>
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="subject">
					{i18n.t('contact.formSubject')}
				</label>
				<select id="subject" class={inputClass} bind:value={formData.subject}>
					{#each Object.values(i18n.translations.contact.subjects) as option}
						<option>{option}</option>
					{/each}
				</select>
			</div>
		</div>

		<div>
			<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="message">
				{i18n.t('contact.formMessage')}
			</label>
			<textarea
				id="message"
				rows="5"
				required
				placeholder={i18n.t('contact.formMessagePlaceholder')}
				class="{inputClass} resize-none"
				bind:value={formData.message}
			></textarea>
		</div>

		{#if status === 'error'}
			<p class="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
				{i18n.t('contact.formError')}
			</p>
		{/if}

		<button
			type="submit"
			disabled={status === 'sending'}
			class="w-full rounded-lg bg-[var(--color-forest)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[var(--color-emerald)] disabled:opacity-60"
		>
			{status === 'sending' ? i18n.t('contact.formSending') : i18n.t('contact.formSend')}
		</button>
	</form>
{/if}
