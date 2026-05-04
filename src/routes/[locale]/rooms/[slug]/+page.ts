import { error } from '@sveltejs/kit';
import { rooms } from '$lib/data/rooms';
import { LOCALES } from '$lib/i18n/locales';
import type { PageLoad } from './$types';

export const entries = () =>
	LOCALES.flatMap((l) => rooms.map((r) => ({ locale: l.code, slug: r.id })));

export const load: PageLoad = ({ params }) => {
	const room = rooms.find((r) => r.id === params.slug);
	if (!room) {
		error(404, 'Room not found');
	}
	return { roomData: room };
};
