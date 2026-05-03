export interface BookingPlatform {
	id: string;
	name: string;
	url: string;
	logo: string;
	tagline: string;
	highlight?: string;
	bgColor: string;
	textColor: string;
}

export interface DirectContact {
	id: string;
	label: string;
	url: string;
	icon: string;
	color: string;
}

export const platforms: BookingPlatform[] = [
	{
		id: 'agoda',
		name: 'Agoda',
		url: 'https://www.agoda.com/th-th/kasalong-resort/hotel/pattaya-th.html',
		logo: '/images/booking/agoda.svg',
		tagline: 'Great deals for Thai travelers',
		highlight: 'Most Popular',
		bgColor: '#E40000',
		textColor: '#ffffff'
	},
	{
		id: 'booking',
		name: 'Booking.com',
		url: 'https://www.booking.com/hotel/th/kasalong-resort-and-spa.th.html',
		logo: '/images/booking/booking.svg',
		tagline: 'Free cancellation options',
		bgColor: '#003580',
		textColor: '#ffffff'
	},
	{
		id: 'traveloka',
		name: 'Traveloka',
		url: 'https://www.traveloka.com/th-th/hotel/detail',
		logo: '/images/booking/traveloka.svg',
		tagline: 'Popular in Southeast Asia',
		bgColor: '#0064D2',
		textColor: '#ffffff'
	},
	{
		id: 'trip',
		name: 'Trip.com',
		url: 'https://th.trip.com/hotels/pattaya-hotel-detail-2549578/kasalong-resort-and-spa/',
		logo: '/images/booking/trip.svg',
		tagline: 'Earn rewards and points',
		bgColor: '#008BC2',
		textColor: '#ffffff'
	},
	{
		id: 'expedia',
		name: 'Expedia',
		url: 'https://www.expedia.co.th/Pattaya-Hotels-Kasalong-Resort-And-Spa-Hotel.h92346239',
		logo: '/images/booking/expedia.svg',
		tagline: 'Bundle with flights & save',
		bgColor: '#00355F',
		textColor: '#ffffff'
	},
	{
		id: 'ctrip',
		name: 'Ctrip',
		url: 'https://m.ctrip.com/webapp/hotel/hoteldetail/2549578.html',
		logo: '/images/booking/ctrip.svg',
		tagline: 'Popular for Chinese travelers',
		bgColor: '#FF6600',
		textColor: '#ffffff'
	}
];

export const directContacts: DirectContact[] = [
	{
		id: 'line',
		label: 'Book via LINE',
		url: 'https://lin.ee/q6WIXj6',
		icon: 'MessageCircle',
		color: '#06C755'
	},
	{
		id: 'facebook',
		label: 'Message on Facebook',
		url: 'https://www.facebook.com/KasalongResortandSpa',
		icon: 'Facebook',
		color: '#1877F2'
	}
];
