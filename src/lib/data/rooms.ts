export interface Room {
	id: string;
	name: string;
	size: string;
	capacity: string;
	bedType: string;
	description: string;
	features: string[];
	image: string;
	images?: string[];
	featured?: boolean;
}

export const rooms: Room[] = [
	{
		id: 'standard',
		name: 'Standard Room',
		size: '28 sqm',
		capacity: '2 guests',
		bedType: 'Double or Twin',
		description:
			'Warmly appointed with golden teak panelling and traditional Thai carved decorations. The perfect base for exploring Pattaya.',
		features: ['Air Conditioning', 'Free WiFi', 'Flat-screen TV', 'En-suite Bathroom', 'Mini Fridge', 'Safe Box'],
		image: '/images/resort/k-173.webp',
		images: ['/images/resort/k-159.webp', '/images/resort/k-168.webp']
	},
	{
		id: 'superior',
		name: 'Superior Room',
		size: '35 sqm',
		capacity: '2 guests',
		bedType: 'King or Four-poster',
		description:
			'A charming four-poster teak canopy bed with sheer draping, warm amber walls, and hand-carved Thai wall art — classic Lanna romance.',
		features: ['Four-poster Canopy Bed', 'Air Conditioning', 'Free WiFi', 'Flat-screen TV', 'En-suite Bathroom', 'Mini Bar', 'Safe Box'],
		image: '/images/resort/k-162.webp',
		images: ['/images/resort/k-161.webp', '/images/resort/k-92.webp']
	},
	{
		id: 'deluxe',
		name: 'Deluxe Room',
		size: '45 sqm',
		capacity: '2–3 guests',
		bedType: 'King',
		description:
			'The stunning arched headboard framing intricate gold Thai botanical murals sets the tone for an unforgettable stay in this spacious Deluxe room.',
		features: ['Ornate Arched Headboard', 'Gold Thai Murals', 'Air Conditioning', 'Free WiFi', 'En-suite Bathroom', 'Mini Bar', 'Safe Box'],
		image: '/images/resort/k-54.webp',
		featured: true
	},
	{
		id: 'pool-villa',
		name: 'Pool View Room',
		size: '55 sqm',
		capacity: '2–3 guests',
		bedType: 'King',
		description:
			'Wake up to shimmering turquoise pool views through floor-to-ceiling sliding doors. Teak wood furnishings and Thai carvings complete this tropical sanctuary.',
		features: ['Direct Pool View', 'Sliding Glass Doors', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Full Bathroom', 'Mini Bar', 'Outdoor Seating'],
		image: '/images/resort/k-85.webp',
		images: ['/images/resort/room-3.webp', '/images/resort/k-90.webp', '/images/resort/k-178.webp'],
		featured: true
	},
	{
		id: 'junior-suite',
		name: 'Junior Suite',
		size: '65 sqm',
		capacity: '2–3 guests',
		bedType: 'King',
		description:
			'The crown jewel of Kasalong — gold-leaf coffered ceiling, intricately carved teak wardrobes with golden Thai botanical inlays, and premium amenities throughout.',
		features: ['Gold Leaf Ceiling', 'Carved Teak Wardrobes', 'Soaking Tub', 'Air Conditioning', 'Free WiFi', 'Smart TV', 'Mini Bar', 'Butler Service'],
		image: '/images/resort/room-1.webp',
		images: ['/images/resort/room-2.webp', '/images/resort/k-35.webp'],
		featured: true
	}
];
