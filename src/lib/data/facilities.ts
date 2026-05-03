export interface Facility {
	id: string;
	name: string;
	description: string;
	details: string[];
	hours?: string;
	image: string;
	icon: string;
}

export interface ConferenceRoom {
	name: string;
	capacity: number;
	features: string[];
}

export const facilities: Facility[] = [
	{
		id: 'pool',
		name: 'Resort Swimming Pool',
		description:
			'Our stunning resort pool features a signature flower mosaic design set against the backdrop of lush tropical gardens and traditional Thai architecture. A true centrepiece of the resort.',
		details: ['Flower mosaic pool design', 'Sun loungers & deck chairs', 'Pool towels provided', 'Tropical garden setting', 'Terracotta pool deck'],
		hours: '6:00 AM – 9:00 PM',
		image: '/images/resort/k-81.jpg',
		icon: 'Waves'
	},
	{
		id: 'dining',
		name: 'Thai Cuisine & Dining',
		description:
			'Dine beneath an exquisite gold-carved teak ceiling in our signature restaurant. Authentic Thai flavours and international cuisine served in a breathtakingly ornate setting.',
		details: ['À la carte menu', 'Authentic Thai cuisine', 'International selections', 'In-room dining available', 'Private dining upon request'],
		hours: '6:00 AM – 10:00 PM',
		image: '/images/resort/k-16.jpg',
		icon: 'UtensilsCrossed'
	},
	{
		id: 'conference',
		name: 'Conference & Events',
		description:
			'Our grand Lanna-style event spaces — adorned with traditional amber lanterns and ornate Thai décor — create an unforgettable backdrop for conferences, seminars, and celebrations.',
		details: ['3 dedicated event spaces', 'Full AV system', 'High-speed WiFi', 'In-house catering', 'Event coordination team'],
		image: '/images/resort/hero-2.jpg',
		icon: 'Building2'
	}
];

export const conferenceRooms: ConferenceRoom[] = [
	{
		name: 'Lanna Grand Hall',
		capacity: 200,
		features: ['Full AV system & stage', 'Traditional amber lanterns', 'Banquet or theatre layout', 'Grand entrance foyer']
	},
	{
		name: 'Orchid Room',
		capacity: 100,
		features: ['Projector & screen', 'Flexible seating layouts', 'Natural lighting', 'Breakout terrace']
	},
	{
		name: 'Lotus Room',
		capacity: 50,
		features: ['Boardroom configuration', 'Video conferencing', 'Whiteboard', 'Private catering service']
	}
];

export const quickFacilities = [
	{ icon: 'ParkingCircle', label: 'Free Parking', detail: 'Guest & tour bus parking' },
	{ icon: 'Clock', label: '24-Hr Reception', detail: 'Always here to help' },
	{ icon: 'Wifi', label: 'Free WiFi', detail: 'High-speed throughout' },
	{ icon: 'ShieldCheck', label: '24-Hr Security', detail: 'Your safety, always' }
];
