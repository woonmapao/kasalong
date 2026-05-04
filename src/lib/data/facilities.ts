export interface FacilityData {
	id: string;
	image: string;
	icon: string;
}

export interface ConferenceRoomData {
	id: string;
	capacity: number;
}

export const facilities: FacilityData[] = [
	{ id: 'pool', image: '/images/resort/k-81.webp', icon: 'Waves' },
	{ id: 'dining', image: '/images/resort/k-16.webp', icon: 'UtensilsCrossed' },
	{ id: 'conference', image: '/images/resort/hero-2.webp', icon: 'Building2' }
];

export const conferenceRooms: ConferenceRoomData[] = [
	{ id: 'lannaGrandHall', capacity: 200 },
	{ id: 'orchidRoom', capacity: 100 },
	{ id: 'lotusRoom', capacity: 50 }
];

export const quickFacilityIds = ['parking', 'reception', 'wifi', 'security'] as const;

export const quickFacilityIcons: Record<string, string> = {
	parking: 'ParkingCircle',
	reception: 'Clock',
	wifi: 'Wifi',
	security: 'ShieldCheck'
};
