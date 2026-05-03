import { error } from '@sveltejs/kit';
import { rooms } from '$lib/data/rooms';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const room = rooms.find((r) => r.id === params.slug);
	if (!room) {
		error(404, 'Room not found');
	}
	return { room };
};
