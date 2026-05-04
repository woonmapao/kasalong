export type AttractionCategory = 'beach' | 'culture' | 'nature' | 'entertainment' | 'market';

export interface AttractionData {
	id: string;
	distance: string;
	duration: string;
	image: string;
	category: AttractionCategory;
	url?: string;
}

export const attractions: AttractionData[] = [
	{
		id: 'walking-street',
		distance: '2.5 km',
		duration: '5 min drive',
		image: '/images/attractions/walking-street.webp',
		category: 'entertainment'
	},
	{
		id: 'floating-market',
		distance: '5 km',
		duration: '10 min drive',
		image: '/images/attractions/floating-market.webp',
		category: 'market'
	},
	{
		id: 'sanctuary-of-truth',
		distance: '3 km',
		duration: '7 min drive',
		image: '/images/attractions/sanctuary-of-truth.webp',
		category: 'culture'
	},
	{
		id: 'pattaya-beach',
		distance: '4 km',
		duration: '8 min drive',
		image: '/images/attractions/pattaya-beach.webp',
		category: 'beach'
	},
	{
		id: 'nong-nooch-garden',
		distance: '15 km',
		duration: '20 min drive',
		image: '/images/attractions/nong-nooch.webp',
		category: 'nature'
	}
];
