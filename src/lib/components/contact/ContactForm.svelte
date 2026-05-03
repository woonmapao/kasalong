<script lang="ts">
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: 'General Enquiry',
		message: ''
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

	const inputClass =
		'w-full rounded-lg border border-[var(--color-ivory)] bg-white px-4 py-3 text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/20 transition-colors';
</script>

{#if status === 'success'}
	<div class="rounded-2xl bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/20 p-8 text-center">
		<div class="text-4xl mb-3">✓</div>
		<h3 class="font-serif text-xl text-[var(--color-forest)]">Message Sent!</h3>
		<p class="mt-2 text-sm text-[var(--color-stone)]">
			Thank you for reaching out. Our team will get back to you within 24 hours.
		</p>
		<button
			class="mt-5 text-sm font-medium text-[var(--color-teal)] hover:underline"
			onclick={() => { status = 'idle'; formData = { name: '', email: '', phone: '', subject: 'General Enquiry', message: '' }; }}
		>
			Send another message
		</button>
	</div>
{:else}
	<form onsubmit={handleSubmit} class="space-y-4">
		<div class="grid gap-4 sm:grid-cols-2">
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="name">
					Full Name *
				</label>
				<input
					id="name"
					type="text"
					required
					placeholder="Your full name"
					class={inputClass}
					bind:value={formData.name}
				/>
			</div>
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="email">
					Email Address *
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
					Phone (optional)
				</label>
				<input
					id="phone"
					type="tel"
					placeholder="+66 xx xxx xxxx"
					class={inputClass}
					bind:value={formData.phone}
				/>
			</div>
			<div>
				<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="subject">
					Subject
				</label>
				<select id="subject" class={inputClass} bind:value={formData.subject}>
					<option>General Enquiry</option>
					<option>Room Reservation</option>
					<option>Group Booking</option>
					<option>Conference & Events</option>
					<option>Spa & Wellness</option>
					<option>Feedback</option>
				</select>
			</div>
		</div>

		<div>
			<label class="mb-1.5 block text-xs font-medium text-[var(--color-stone)]" for="message">
				Message *
			</label>
			<textarea
				id="message"
				rows="5"
				required
				placeholder="How can we help you?"
				class="{inputClass} resize-none"
				bind:value={formData.message}
			></textarea>
		</div>

		{#if status === 'error'}
			<p class="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
				Something went wrong. Please try again or contact us directly.
			</p>
		{/if}

		<button
			type="submit"
			disabled={status === 'sending'}
			class="w-full rounded-lg bg-[var(--color-forest)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[var(--color-emerald)] disabled:opacity-60"
		>
			{status === 'sending' ? 'Sending…' : 'Send Message'}
		</button>
	</form>
{/if}
