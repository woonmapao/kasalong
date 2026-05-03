export interface Attraction {
	id: string;
	name: string;
	distance: string;
	duration: string;
	description: string;
	image: string;
	category: 'beach' | 'culture' | 'nature' | 'entertainment' | 'market';
	url?: string;
}

export const attractions: Attraction[] = [
	{
		id: 'walking-street',
		name: 'Walking Street',
		distance: '2.5 km',
		duration: '5 min drive',
		description:
			"Pattaya's world-famous entertainment strip comes alive at night with restaurants, clubs, and vibrant nightlife. An unforgettable evening awaits.",
		image: '/images/attractions/walking-street.webp',
		category: 'entertainment'
	},
	{
		id: 'floating-market',
		name: 'Pattaya Floating Market',
		distance: '5 km',
		duration: '10 min drive',
		description:
			'Experience authentic Thai culture at this unique floating market. Browse local crafts, taste street food, and explore four regional Thai culture zones.',
		image: '/images/attractions/floating-market.webp',
		category: 'market'
	},
	{
		id: 'sanctuary-of-truth',
		name: 'Sanctuary of Truth',
		distance: '3 km',
		duration: '7 min drive',
		description:
			'A breathtaking all-wood structure filled with sculptures inspired by ancient Khmer and Thai art. One of Pattaya\'s most awe-inspiring landmarks.',
		image: '/images/attractions/sanctuary-of-truth.webp',
		category: 'culture'
	},
	{
		id: 'pattaya-beach',
		name: 'Pattaya Beach',
		distance: '4 km',
		duration: '8 min drive',
		description:
			'The iconic crescent-shaped beach offers water sports, beachside dining, and stunning sunsets. A classic Pattaya experience not to be missed.',
		image: '/images/attractions/pattaya-beach.webp',
		category: 'beach'
	},
	{
		id: 'nong-nooch-garden',
		name: 'Nong Nooch Tropical Garden',
		distance: '15 km',
		duration: '20 min drive',
		description:
			'Over 600 acres of manicured gardens featuring the world\'s largest collection of cycads, Thai cultural shows, and elephant performances.',
		image: '/images/attractions/nong-nooch.webp',
		category: 'nature'
	}
];
