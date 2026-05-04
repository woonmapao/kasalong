import { LOCALES } from '$lib/i18n/locales';
export const entries = () => LOCALES.map((l) => ({ locale: l.code }));
