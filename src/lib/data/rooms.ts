export interface RoomData {
	id: string;
	size: string;
	image: string;
	images?: string[];
	featured?: boolean;
}

export const rooms: RoomData[] = [
	{
		id: 'standard',
		size: '28 sqm',
		image: '/images/resort/k-173.webp',
		images: ['/images/resort/k-159.webp', '/images/resort/k-168.webp']
	},
	{
		id: 'superior',
		size: '35 sqm',
		image: '/images/resort/k-162.webp',
		images: ['/images/resort/k-161.webp', '/images/resort/k-92.webp']
	},
	{
		id: 'deluxe',
		size: '45 sqm',
		image: '/images/resort/k-54.webp',
		featured: true
	},
	{
		id: 'pool-villa',
		size: '55 sqm',
		image: '/images/resort/k-85.webp',
		images: ['/images/resort/room-3.webp', '/images/resort/k-90.webp', '/images/resort/k-178.webp'],
		featured: true
	},
	{
		id: 'junior-suite',
		size: '65 sqm',
		image: '/images/resort/room-1.webp',
		images: ['/images/resort/room-2.webp', '/images/resort/k-35.webp'],
		featured: true
	}
];
