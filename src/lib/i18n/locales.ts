export const LOCALES = [
	{ code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
	{ code: 'th', name: 'Thai', nativeName: 'ภาษาไทย', flag: '🇹🇭' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' }
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: LocaleCode = 'en';
