import type { Translations } from '../index';

const en = {
	nav: {
		home: 'Home',
		rooms: 'Our Rooms',
		facilities: 'Facilities',
		attractions: 'Attractions',
		gallery: 'Gallery',
		contact: 'Contact'
	},
	common: {
		bookNow: 'Book Now',
		bookYourStay: 'Book Your Stay',
		exploreRooms: 'Explore Rooms',
		viewAllRooms: 'View All Rooms',
		contactUs: 'Contact Us',
		reserveNow: 'Reserve Now',
		viewBookingOptions: 'View Booking Options',
		askAQuestion: 'Ask a Question',
		askTheTeam: 'Ask the Team',
		sendAnotherMessage: 'Send another message',
		viewAmenities: 'View amenities ↓',
		hideAmenities: 'Hide amenities ↑',
		bookThisRoom: 'Book This Room',
		enquire: 'Enquire',
		discoverFacilities: 'Discover Our Facilities',
		nearbyAttractions: 'Nearby Attractions',
		getDirections: 'Get Directions'
	},
	home: {
		heroPretitle: 'Pattaya, Thailand',
		heroTagline:
			'Experience the grandeur of authentic Thai Lanna culture — gold-leaf ceilings, carved teak interiors, and a stunning flower-mosaic pool await.',
		culturalTitle: 'Where Lanna Tradition Meets Gold-Leaf Grandeur',
		culturalSubtitle:
			'Nestled just 10 minutes from downtown Pattaya, Kasalong is unlike any hotel you have visited — every corridor, every room, every ceiling tells a story in gold.',
		culturalBody1:
			'From the dramatic gold-leaf coffered lobby to intricately carved teak wardrobes adorned with gilded Thai botanical motifs, Kasalong is a living artwork of the Lanna kingdom — a style of Northern Thailand renowned for its rich ornamentation and warm, welcoming spirit.',
		culturalBody2:
			"Our flower-mosaic pool, ornate restaurant with its carved-wood ceiling, and grand Lanna ballroom have made Kasalong one of Pattaya's most distinctive resorts for leisure and events alike.",
		culturalStat1: { value: '5', label: 'Room Types' },
		culturalStat2: { value: '10 min', label: 'to Downtown' },
		culturalStat3: { value: '24/7', label: 'Guest Service' },
		culturalButton: 'Discover Our Facilities',
		servicesTitle: 'Resort Facilities',
		servicesSubtitle: 'Everything you need for a perfect stay, all in one place.',
		services: {
			pool: { label: 'Swimming Pool', detail: '6 AM – 9 PM' },
			spa: { label: 'Spa & Wellness', detail: '10 AM – 9 PM' },
			dining: { label: 'Thai Dining', detail: '6 AM – 10 PM' },
			conference: { label: 'Conference Rooms', detail: 'Seats up to 200' },
			parking: { label: 'Free Parking', detail: 'Guest & tour bus' },
			reception: { label: '24-Hr Reception', detail: 'Always here for you' }
		},
		locationTitle: 'Prime Location in the Heart of Pattaya',
		locationSubtitle:
			'Perfectly positioned to explore the best of Pattaya while retreating to our ornate Lanna sanctuary.',
		locationDistanceLabel: 'Distance to City',
		locationDistanceValue: '10 Minutes',
		locationHighlights: {
			walkingStreet: 'Walking Street',
			pattayaBeach: 'Pattaya Beach',
			sanctuaryOfTruth: 'Sanctuary of Truth',
			floatingMarket: 'Floating Market',
			nongNoochGarden: 'Nong Nooch Garden'
		},
		featuredTitle: 'Our Rooms & Villas',
		featuredSubtitle:
			'From cozy standard rooms to lavish pool villas, every space is thoughtfully designed with Thai Lanna elegance.',
		ctaTitle: 'Ready to Experience Kasalong?',
		ctaSubtitle: 'Book your stay today and step into a world of Thai Lanna grandeur.'
	},
	rooms: {
		pagePreTitle: 'Accommodation',
		pageTitle: 'Our Rooms & Villas',
		sectionTitle: 'Find Your Perfect Room',
		sectionSubtitle:
			'Five distinct room types, each offering a unique expression of Thai Lanna luxury and modern comfort.',
		ctaTitle: 'Not sure which room is right for you?',
		ctaSubtitle: "Contact our team and we'll help you find the perfect match for your stay.",
		breadcrumbHome: 'Home',
		breadcrumbRooms: 'Rooms',
		specsSize: 'Size',
		specsCapacity: 'Capacity',
		specsBed: 'Bed',
		aboutRoom: 'About This Room',
		amenities: 'Room Amenities',
		readyToExperience: 'Ready to experience it?',
		bookYourStayAtKasalong: 'Book Your Stay at Kasalong',
		secureYourRoom:
			'Secure your {name} and enjoy an unforgettable Thai Lanna experience in Pattaya.',
		data: {
			standard: {
				name: 'Standard Room',
				bedType: 'Double or Twin',
				capacity: '2 guests',
				description:
					'Warmly appointed with golden teak panelling and traditional Thai carved decorations. The perfect base for exploring Pattaya.',
				features: [
					'Air Conditioning',
					'Free WiFi',
					'Flat-screen TV',
					'En-suite Bathroom',
					'Mini Fridge',
					'Safe Box'
				]
			},
			superior: {
				name: 'Superior Room',
				bedType: 'King or Four-poster',
				capacity: '2 guests',
				description:
					'A charming four-poster teak canopy bed with sheer draping, warm amber walls, and hand-carved Thai wall art — classic Lanna romance.',
				features: [
					'Four-poster Canopy Bed',
					'Air Conditioning',
					'Free WiFi',
					'Flat-screen TV',
					'En-suite Bathroom',
					'Mini Bar',
					'Safe Box'
				]
			},
			deluxe: {
				name: 'Deluxe Room',
				bedType: 'King',
				capacity: '2–3 guests',
				description:
					'The stunning arched headboard framing intricate gold Thai botanical murals sets the tone for an unforgettable stay in this spacious Deluxe room.',
				features: [
					'Ornate Arched Headboard',
					'Gold Thai Murals',
					'Air Conditioning',
					'Free WiFi',
					'En-suite Bathroom',
					'Mini Bar',
					'Safe Box'
				]
			},
			'pool-villa': {
				name: 'Pool View Room',
				bedType: 'King',
				capacity: '2–3 guests',
				description:
					'Wake up to shimmering turquoise pool views through floor-to-ceiling sliding doors. Teak wood furnishings and Thai carvings complete this tropical sanctuary.',
				features: [
					'Direct Pool View',
					'Sliding Glass Doors',
					'Air Conditioning',
					'Free WiFi',
					'Smart TV',
					'Full Bathroom',
					'Mini Bar',
					'Outdoor Seating'
				]
			},
			'junior-suite': {
				name: 'Junior Suite',
				bedType: 'King',
				capacity: '2–3 guests',
				description:
					'The crown jewel of Kasalong — gold-leaf coffered ceiling, intricately carved teak wardrobes with golden Thai botanical inlays, and premium amenities throughout.',
				features: [
					'Gold Leaf Ceiling',
					'Carved Teak Wardrobes',
					'Soaking Tub',
					'Air Conditioning',
					'Free WiFi',
					'Smart TV',
					'Mini Bar',
					'Butler Service'
				]
			}
		}
	},
	facilities: {
		pagePreTitle: 'What We Offer',
		pageTitle: 'Resort Facilities',
		sectionTitle: 'Everything for a Perfect Stay',
		sectionSubtitle:
			'World-class amenities designed to delight every guest, from leisure travelers to business delegates.',
		conferenceTitle: 'Conference & Event Spaces',
		conferenceSubtitle:
			'Three versatile spaces equipped for every type of event, from intimate boardroom meetings to grand banquets.',
		conferenceCapacity: 'Max capacity',
		quick: {
			parking: { label: 'Free Parking', detail: 'Guest & tour bus parking' },
			reception: { label: '24-Hr Reception', detail: 'Always here to help' },
			wifi: { label: 'Free WiFi', detail: 'High-speed throughout' },
			security: { label: '24-Hr Security', detail: 'Your safety, always' }
		},
		data: {
			pool: {
				name: 'Resort Swimming Pool',
				description:
					'Our stunning resort pool features a signature flower mosaic design set against the backdrop of lush tropical gardens and traditional Thai architecture. A true centrepiece of the resort.',
				details: [
					'Flower mosaic pool design',
					'Sun loungers & deck chairs',
					'Pool towels provided',
					'Tropical garden setting',
					'Terracotta pool deck'
				],
				hours: '6:00 AM – 9:00 PM'
			},
			dining: {
				name: 'Thai Cuisine & Dining',
				description:
					'Dine beneath an exquisite gold-carved teak ceiling in our signature restaurant. Authentic Thai flavours and international cuisine served in a breathtakingly ornate setting.',
				details: [
					'À la carte menu',
					'Authentic Thai cuisine',
					'International selections',
					'In-room dining available',
					'Private dining upon request'
				],
				hours: '6:00 AM – 10:00 PM'
			},
			conference: {
				name: 'Conference & Events',
				description:
					'Our grand Lanna-style event spaces — adorned with traditional amber lanterns and ornate Thai décor — create an unforgettable backdrop for conferences, seminars, and celebrations.',
				details: [
					'3 dedicated event spaces',
					'Full AV system',
					'High-speed WiFi',
					'In-house catering',
					'Event coordination team'
				]
			}
		},
		conferenceRooms: {
			lannaGrandHall: {
				name: 'Lanna Grand Hall',
				features: [
					'Full AV system & stage',
					'Traditional amber lanterns',
					'Banquet or theatre layout',
					'Grand entrance foyer'
				]
			},
			orchidRoom: {
				name: 'Orchid Room',
				features: [
					'Projector & screen',
					'Flexible seating layouts',
					'Natural lighting',
					'Breakout terrace'
				]
			},
			lotusRoom: {
				name: 'Lotus Room',
				features: [
					'Boardroom configuration',
					'Video conferencing',
					'Whiteboard',
					'Private catering service'
				]
			}
		}
	},
	attractions: {
		pagePreTitle: 'Explore Pattaya',
		pageTitle: 'Nearby Attractions',
		sectionTitle: 'Discover Pattaya',
		sectionSubtitle:
			"Our prime location puts Pattaya's most iconic attractions at your doorstep. Explore beaches, cultural landmarks, and vibrant entertainment — all within easy reach.",
		ctaTitle: 'Ready to Start Exploring?',
		ctaSubtitle:
			'Our friendly reception team can arrange tours, transfers, and local recommendations.',
		data: {
			'walking-street': {
				name: 'Walking Street',
				description:
					"Pattaya's world-famous entertainment strip comes alive at night with restaurants, clubs, and vibrant nightlife. An unforgettable evening awaits.",
				category: 'Entertainment'
			},
			'floating-market': {
				name: 'Pattaya Floating Market',
				description:
					'Experience authentic Thai culture at this unique floating market. Browse local crafts, taste street food, and explore four regional Thai culture zones.',
				category: 'Market'
			},
			'sanctuary-of-truth': {
				name: 'Sanctuary of Truth',
				description:
					"A breathtaking all-wood structure filled with sculptures inspired by ancient Khmer and Thai art. One of Pattaya's most awe-inspiring landmarks.",
				category: 'Culture'
			},
			'pattaya-beach': {
				name: 'Pattaya Beach',
				description:
					'The iconic crescent-shaped beach offers water sports, beachside dining, and stunning sunsets. A classic Pattaya experience not to be missed.',
				category: 'Beach'
			},
			'nong-nooch-garden': {
				name: 'Nong Nooch Tropical Garden',
				description:
					"Over 600 acres of manicured gardens featuring the world's largest collection of cycads, Thai cultural shows, and elephant performances.",
				category: 'Nature'
			}
		}
	},
	gallery: {
		pagePreTitle: 'Visual Story',
		pageTitle: 'Photo Gallery',
		sectionTitle: 'A Glimpse of Kasalong',
		sectionSubtitle:
			'Browse our collection of photos showcasing the beauty of our resort, rooms, facilities, and the stunning Pattaya surroundings.',
		categories: {
			all: 'All Photos',
			exterior: 'Exterior & Grounds',
			facilities: 'Pool, Dining & Facilities',
			rooms: 'Rooms & Suites'
		}
	},
	contact: {
		pagePreTitle: "We'd Love to Hear From You",
		pageTitle: 'Contact Us',
		sectionTitle: 'Get in Touch',
		sectionSubtitle:
			'Our team is available 24 hours a day to assist with reservations, enquiries, and anything else you need.',
		formTitle: 'Send a Message',
		infoTitle: 'Our Information',
		formName: 'Full Name *',
		formNamePlaceholder: 'Your full name',
		formEmail: 'Email Address *',
		formPhone: 'Phone (optional)',
		formPhonePlaceholder: '+66 xx xxx xxxx',
		formSubject: 'Subject',
		formMessage: 'Message *',
		formMessagePlaceholder: 'How can we help you?',
		formSend: 'Send Message',
		formSending: 'Sending…',
		formSuccess: 'Message Sent!',
		formSuccessBody:
			'Thank you for reaching out. Our team will get back to you within 24 hours.',
		formError: 'Something went wrong. Please try again or contact us directly.',
		subjects: {
			generalEnquiry: 'General Enquiry',
			roomReservation: 'Room Reservation',
			groupBooking: 'Group Booking',
			conferenceEvents: 'Conference & Events',
			spaWellness: 'Spa & Wellness',
			feedback: 'Feedback'
		},
		infoAddress: 'Address',
		infoTelephone: 'Telephone',
		infoEmail: 'Email',
		infoReservations: 'Reservations',
		infoGeneral: 'General',
		infoHours: 'Hours',
		infoConnect: 'Connect with us',
		ctaTitle: 'Ready to Book?',
		ctaSubtitle: 'Skip the form and book directly through your preferred platform.'
	},
	book: {
		pagePreTitle: 'Reserve Your Experience',
		pageTitle: 'Book Your Stay',
		sectionTitle: 'Choose Your Booking Platform',
		sectionSubtitle:
			"Select your preferred platform below. All links take you directly to Kasalong Resort's listing.",
		trustSecure: 'Secure Booking',
		trustSecureDetail: 'All platforms are verified',
		trustBest: 'Best Experience',
		trustBestDetail: 'Guaranteed quality stay',
		trustSupport: '24-Hr Support',
		trustSupportDetail: "We're always available",
		ctaPreTitle: 'Prefer to talk to us directly?',
		ctaTitle: 'Book via LINE or Facebook',
		ctaSubtitle:
			'Chat with our reservations team for personalised assistance, special requests, or group bookings.',
		lineLabel: 'Book via LINE',
		facebookLabel: 'Message on Facebook',
		faqLabel: 'Need help choosing?',
		faq: 'Agoda and Traveloka offer the best rates for Thai travelers. Booking.com is great for free cancellation flexibility. Contact our team via LINE for group or special event bookings.',
		platforms: {
			agoda: { tagline: 'Great deals for Thai travelers', highlight: 'Most Popular' },
			booking: { tagline: 'Free cancellation options' },
			traveloka: { tagline: 'Popular in Southeast Asia' },
			trip: { tagline: 'Earn rewards and points' },
			expedia: { tagline: 'Bundle with flights & save' },
			ctrip: { tagline: 'Popular for Chinese travelers' }
		}
	},
	footer: {
		tagline: 'A premium Thai Lanna cultural experience in the heart of Pattaya, Thailand.',
		explore: 'Explore',
		contact: 'Contact',
		hours: 'Hours',
		hoursReception: 'Reception',
		hoursPool: 'Pool',
		hoursDining: 'Dining',
		bookNow: 'Book Now',
		rights: 'All rights reserved.'
	},
	seo: {
		home: {
			title: 'Kasalong Resort and Spa Pattaya — Thai Lanna Luxury',
			description:
				'Experience the perfect blend of authentic Thai Lanna culture and modern luxury at Kasalong Resort and Spa, just 10 minutes from downtown Pattaya.'
		},
		rooms: {
			title: 'Our Rooms — Kasalong Resort and Spa Pattaya',
			description:
				'Choose from 5 elegant room types at Kasalong Resort: Standard, Superior, Deluxe, Pool Villa, and Junior Suite — each with Thai Lanna-inspired design.'
		},
		attractions: {
			title: 'Nearby Attractions — Kasalong Resort and Spa Pattaya',
			description:
				"Explore Pattaya's best attractions just minutes from Kasalong Resort: Walking Street, Pattaya Beach, Sanctuary of Truth, Floating Market and more."
		},
		facilities: {
			title: 'Facilities — Kasalong Resort and Spa Pattaya',
			description: "Discover Kasalong's world-class facilities: resort pool, Thai dining, conference rooms, and more."
		},
		gallery: {
			title: 'Gallery — Kasalong Resort and Spa Pattaya',
			description:
				"Explore Kasalong Resort's photo gallery: rooms, pool, dining, and the beautiful surroundings of Pattaya, Thailand."
		},
		contact: {
			title: 'Contact Us — Kasalong Resort and Spa Pattaya',
			description:
				"Get in touch with Kasalong Resort and Spa Pattaya. Call, email, or send us a message. We're available 24 hours a day."
		},
		book: {
			title: 'Book Your Stay — Kasalong Resort and Spa Pattaya',
			description:
				'Book Kasalong Resort and Spa Pattaya on your preferred platform: Agoda, Booking.com, Traveloka, Trip.com, Expedia or Ctrip.'
		}
	}
} satisfies Translations;

export default en;
