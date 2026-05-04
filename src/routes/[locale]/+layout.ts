import { error } from '@sveltejs/kit';
import { LOCALES } from '$lib/i18n/locales';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ params }) => {
	const locale = params.locale;
	if (!LOCALES.find((l) => l.code === locale)) {
		error(404, 'Locale not found');
	}

	let translations;
	switch (locale) {
		case 'th':
			translations = (await import('$lib/i18n/translations/th')).default;
			break;
		case 'ru':
			translations = (await import('$lib/i18n/translations/ru')).default;
			break;
		case 'zh':
			translations = (await import('$lib/i18n/translations/zh')).default;
			break;
		case 'hi':
			translations = (await import('$lib/i18n/translations/hi')).default;
			break;
		default:
			translations = (await import('$lib/i18n/translations/en')).default;
	}

	return { locale, translations };
};
