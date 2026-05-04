import { getContext, setContext } from 'svelte';
import type { RoomData } from '$lib/data/rooms';
import type { FacilityData, ConferenceRoomData } from '$lib/data/facilities';
import type { AttractionData } from '$lib/data/attractions';

// ─── Translation shape ────────────────────────────────────────────────────────

interface RoomTranslation {
	name: string;
	bedType: string;
	capacity: string;
	description: string;
	features: string[];
}

interface FacilityTranslation {
	name: string;
	description: string;
	details: string[];
	hours?: string;
}

interface ConferenceRoomTranslation {
	name: string;
	features: string[];
}

interface AttractionTranslation {
	name: string;
	description: string;
	category: string;
}

export interface Translations {
	nav: {
		home: string;
		rooms: string;
		facilities: string;
		attractions: string;
		gallery: string;
		contact: string;
	};
	common: {
		bookNow: string;
		bookYourStay: string;
		exploreRooms: string;
		viewAllRooms: string;
		contactUs: string;
		reserveNow: string;
		viewBookingOptions: string;
		askAQuestion: string;
		askTheTeam: string;
		sendAnotherMessage: string;
		viewAmenities: string;
		hideAmenities: string;
		bookThisRoom: string;
		enquire: string;
		discoverFacilities: string;
		nearbyAttractions: string;
		getDirections: string;
	};
	home: {
		heroPretitle: string;
		heroTagline: string;
		culturalTitle: string;
		culturalSubtitle: string;
		culturalBody1: string;
		culturalBody2: string;
		culturalStat1: { value: string; label: string };
		culturalStat2: { value: string; label: string };
		culturalStat3: { value: string; label: string };
		culturalButton: string;
		servicesTitle: string;
		servicesSubtitle: string;
		services: {
			pool: { label: string; detail: string };
			spa: { label: string; detail: string };
			dining: { label: string; detail: string };
			conference: { label: string; detail: string };
			parking: { label: string; detail: string };
			reception: { label: string; detail: string };
		};
		locationTitle: string;
		locationSubtitle: string;
		locationDistanceLabel: string;
		locationDistanceValue: string;
		locationHighlights: {
			walkingStreet: string;
			pattayaBeach: string;
			sanctuaryOfTruth: string;
			floatingMarket: string;
			nongNoochGarden: string;
		};
		featuredTitle: string;
		featuredSubtitle: string;
		ctaTitle: string;
		ctaSubtitle: string;
	};
	rooms: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		ctaTitle: string;
		ctaSubtitle: string;
		breadcrumbHome: string;
		breadcrumbRooms: string;
		specsSize: string;
		specsCapacity: string;
		specsBed: string;
		aboutRoom: string;
		amenities: string;
		readyToExperience: string;
		bookYourStayAtKasalong: string;
		secureYourRoom: string;
		data: {
			standard: RoomTranslation;
			superior: RoomTranslation;
			deluxe: RoomTranslation;
			'pool-villa': RoomTranslation;
			'junior-suite': RoomTranslation;
		};
	};
	facilities: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		conferenceTitle: string;
		conferenceSubtitle: string;
		conferenceCapacity: string;
		quick: {
			parking: { label: string; detail: string };
			reception: { label: string; detail: string };
			wifi: { label: string; detail: string };
			security: { label: string; detail: string };
		};
		data: {
			pool: FacilityTranslation;
			dining: FacilityTranslation;
			conference: FacilityTranslation;
		};
		conferenceRooms: {
			lannaGrandHall: ConferenceRoomTranslation;
			orchidRoom: ConferenceRoomTranslation;
			lotusRoom: ConferenceRoomTranslation;
		};
	};
	attractions: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		ctaTitle: string;
		ctaSubtitle: string;
		data: {
			'walking-street': AttractionTranslation;
			'floating-market': AttractionTranslation;
			'sanctuary-of-truth': AttractionTranslation;
			'pattaya-beach': AttractionTranslation;
			'nong-nooch-garden': AttractionTranslation;
		};
	};
	gallery: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		categories: {
			all: string;
			exterior: string;
			facilities: string;
			rooms: string;
		};
	};
	contact: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		formTitle: string;
		infoTitle: string;
		formName: string;
		formNamePlaceholder: string;
		formEmail: string;
		formPhone: string;
		formPhonePlaceholder: string;
		formSubject: string;
		formMessage: string;
		formMessagePlaceholder: string;
		formSend: string;
		formSending: string;
		formSuccess: string;
		formSuccessBody: string;
		formError: string;
		subjects: {
			generalEnquiry: string;
			roomReservation: string;
			groupBooking: string;
			conferenceEvents: string;
			spaWellness: string;
			feedback: string;
		};
		infoAddress: string;
		infoTelephone: string;
		infoEmail: string;
		infoReservations: string;
		infoGeneral: string;
		infoHours: string;
		infoConnect: string;
		ctaTitle: string;
		ctaSubtitle: string;
	};
	book: {
		pagePreTitle: string;
		pageTitle: string;
		sectionTitle: string;
		sectionSubtitle: string;
		trustSecure: string;
		trustSecureDetail: string;
		trustBest: string;
		trustBestDetail: string;
		trustSupport: string;
		trustSupportDetail: string;
		ctaPreTitle: string;
		ctaTitle: string;
		ctaSubtitle: string;
		lineLabel: string;
		facebookLabel: string;
		faq: string;
		faqLabel: string;
		platforms: {
			agoda: { tagline: string; highlight: string };
			booking: { tagline: string };
			traveloka: { tagline: string };
			trip: { tagline: string };
			expedia: { tagline: string };
			ctrip: { tagline: string };
		};
	};
	footer: {
		tagline: string;
		explore: string;
		contact: string;
		hours: string;
		hoursReception: string;
		hoursPool: string;
		hoursDining: string;
		bookNow: string;
		rights: string;
	};
	seo: {
		home: { title: string; description: string };
		rooms: { title: string; description: string };
		attractions: { title: string; description: string };
		facilities: { title: string; description: string };
		gallery: { title: string; description: string };
		contact: { title: string; description: string };
		book: { title: string; description: string };
	};
}

// ─── Localized data helpers ───────────────────────────────────────────────────

export interface LocalizedRoom extends RoomData {
	name: string;
	description: string;
	features: string[];
	bedType: string;
	capacity: string;
}

export interface LocalizedFacility extends FacilityData {
	name: string;
	description: string;
	details: string[];
	hours?: string;
}

export interface LocalizedConferenceRoom extends ConferenceRoomData {
	name: string;
	features: string[];
}

export interface LocalizedAttraction extends AttractionData {
	name: string;
	description: string;
	category: string;
}

type RoomId = keyof Translations['rooms']['data'];

export function localizeRooms(rooms: RoomData[], t: Translations): LocalizedRoom[] {
	return rooms.map((room) => {
		const data = t.rooms.data[room.id as RoomId];
		return {
			...room,
			name: data?.name ?? room.id,
			description: data?.description ?? '',
			features: data?.features ?? [],
			bedType: data?.bedType ?? '',
			capacity: data?.capacity ?? ''
		};
	});
}

type FacilityId = keyof Translations['facilities']['data'];

export function localizeFacilities(facilities: FacilityData[], t: Translations): LocalizedFacility[] {
	return facilities.map((f) => {
		const data = t.facilities.data[f.id as FacilityId];
		return {
			...f,
			name: data?.name ?? f.id,
			description: data?.description ?? '',
			details: data?.details ?? [],
			hours: data?.hours
		};
	});
}

type AttractionId = keyof Translations['attractions']['data'];

export function localizeAttractions(
	attractions: AttractionData[],
	t: Translations
): LocalizedAttraction[] {
	return attractions.map((a) => {
		const data = t.attractions.data[a.id as AttractionId];
		return {
			...a,
			name: data?.name ?? a.id,
			description: data?.description ?? '',
			category: data?.category ?? a.category
		};
	});
}

// ─── i18n store & context ────────────────────────────────────────────────────

export interface I18nStore {
	locale: string;
	translations: Translations;
	t: (key: string) => string;
}

export function createI18nStore(locale: string, translations: Translations): I18nStore {
	function t(key: string): string {
		const keys = key.split('.');
		let val: unknown = translations;
		for (const k of keys) {
			if (val && typeof val === 'object') {
				val = (val as Record<string, unknown>)[k];
			} else {
				return key;
			}
		}
		return typeof val === 'string' ? val : key;
	}
	return { locale, translations, t };
}

export function localePath(locale: string, path: string): string {
	if (!path || path === '/') return `/${locale}/`;
	return `/${locale}${path}`;
}

const I18N_KEY = Symbol('i18n');

export function setI18n(store: I18nStore): void {
	setContext(I18N_KEY, store);
}

export function getI18n(): I18nStore {
	return getContext<I18nStore>(I18N_KEY);
}
