export type GalleryCategory = 'all' | 'rooms' | 'facilities' | 'exterior';

export interface GalleryImage {
	id: string;
	src: string;
	alt: string;
	category: Exclude<GalleryCategory, 'all'>;
	width: number;
	height: number;
}

export const galleryImages: GalleryImage[] = [
	// Exterior & Grounds
	{ id: 'g1',  src: '/images/resort/k-5.jpg',       alt: 'Kasalong Resort entrance with traditional Lanna roofline', category: 'exterior', width: 2048, height: 1365 },
	{ id: 'g2',  src: '/images/resort/k-3.jpg',       alt: 'Resort main entrance and garden', category: 'exterior', width: 2048, height: 1365 },
	{ id: 'g3',  src: '/images/resort/interior-2.jpg', alt: 'Resort courtyard with tropical palms', category: 'exterior', width: 2048, height: 1365 },
	{ id: 'g4',  src: '/images/resort/aerial.jpg',    alt: 'Aerial view of Kasalong Resort', category: 'exterior', width: 728, height: 485 },

	// Pool & Facilities
	{ id: 'g5',  src: '/images/resort/k-81.jpg',      alt: 'Main resort pool with building reflections', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g6',  src: '/images/resort/k-182.jpg',     alt: 'Flower mosaic plunge pool', category: 'facilities', width: 2508, height: 1672 },
	{ id: 'g7',  src: '/images/resort/k-133.jpg',     alt: 'Pool terrace and tropical gardens', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g8',  src: '/images/resort/k-96.jpg',      alt: 'Pool area with lush garden backdrop', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g9',  src: '/images/resort/k-104.jpg',     alt: 'Pool from above — flower mosaic design', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g10', src: '/images/resort/k-16.jpg',      alt: 'Restaurant with carved teak gold ceiling', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g11', src: '/images/resort/k-17.jpg',      alt: 'Resort restaurant dining hall', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g12', src: '/images/resort/k-15.jpg',      alt: 'Restaurant with red and gold Thai murals', category: 'facilities', width: 2048, height: 1365 },
	{ id: 'g13', src: '/images/resort/hero-2.jpg',    alt: 'Lanna Grand Hall conference & events', category: 'facilities', width: 1600, height: 1066 },
	{ id: 'g14', src: '/images/resort/hero-1.jpg',    alt: 'Spa treatment room', category: 'facilities', width: 1600, height: 1066 },
	{ id: 'g15', src: '/images/resort/interior-1.jpg', alt: 'Gold leaf lobby and reception', category: 'facilities', width: 2048, height: 1365 },

	// Rooms
	{ id: 'g16', src: '/images/resort/room-1.jpg',    alt: 'Junior Suite with gold leaf ceiling and carved wardrobes', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g17', src: '/images/resort/k-54.jpg',      alt: 'Deluxe room with gold Thai arch headboard', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g18', src: '/images/resort/k-85.jpg',      alt: 'Pool view room with sliding doors', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g19', src: '/images/resort/k-162.jpg',     alt: 'Superior four-poster canopy bed', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g20', src: '/images/resort/k-173.jpg',     alt: 'Standard room with Thai décor', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g21', src: '/images/resort/room-2.jpg',    alt: 'Suite living area with teak wood', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g22', src: '/images/resort/k-35.jpg',      alt: 'Signature golden bathtub with Thai arch niche', category: 'rooms', width: 2048, height: 1365 },
	{ id: 'g23', src: '/images/resort/k-90.jpg',      alt: 'Pool view room interior', category: 'rooms', width: 2048, height: 1365 }
];
