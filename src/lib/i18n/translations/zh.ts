import type { Translations } from '../index';

const zh = {
	nav: {
		home: '首页',
		rooms: '客房',
		facilities: '设施',
		attractions: '景点',
		gallery: '相册',
		contact: '联系我们'
	},
	common: {
		bookNow: '立即预订',
		bookYourStay: '预订住宿',
		exploreRooms: '浏览客房',
		viewAllRooms: '查看所有客房',
		contactUs: '联系我们',
		reserveNow: '立即预约',
		viewBookingOptions: '查看预订方式',
		askAQuestion: '提交问题',
		askTheTeam: '咨询团队',
		sendAnotherMessage: '再发一条消息',
		viewAmenities: '查看设施 ↓',
		hideAmenities: '收起设施 ↑',
		bookThisRoom: '预订此房间',
		enquire: '询问',
		discoverFacilities: '了解酒店设施',
		nearbyAttractions: '周边景点',
		getDirections: '获取路线'
	},
	home: {
		heroPretitle: '泰国芭提雅',
		heroTagline: '感受正宗泰北兰纳文化的宏伟魅力——金叶天花板、柚木雕刻内饰，以及令人叹为观止的花卉马赛克泳池。',
		culturalTitle: '兰纳传统与金叶辉煌的完美交融',
		culturalSubtitle:
			'卡萨隆位于芭提雅市中心仅10分钟车程处——每一条走廊、每一间客房、每一处天花板都在诉说着黄金的故事。',
		culturalBody1:
			'从气势磅礴的金叶格子天花板大堂，到精心雕刻的柚木衣橱上镶嵌着镀金泰式植物图案，卡萨隆是兰纳王国的活体艺术品——泰国北部这种风格以其丰富的装饰和热情好客的精神而闻名。',
		culturalBody2:
			'花卉马赛克泳池、精美餐厅的雕刻木质天花板，以及宏伟的兰纳宴会厅，使卡萨隆成为芭提雅最具特色的休闲和活动度假胜地之一。',
		culturalStat1: { value: '5', label: '房型' },
		culturalStat2: { value: '10分钟', label: '至市中心' },
		culturalStat3: { value: '24/7', label: '宾客服务' },
		culturalButton: '了解酒店设施',
		servicesTitle: '度假村设施',
		servicesSubtitle: '为您的完美住宿提供一切所需，尽在一处。',
		services: {
			pool: { label: '游泳池', detail: '早6时至晚9时' },
			spa: { label: '水疗中心', detail: '早10时至晚9时' },
			dining: { label: '泰式餐饮', detail: '早6时至晚10时' },
			conference: { label: '会议室', detail: '可容纳200人' },
			parking: { label: '免费停车', detail: '轿车及旅游巴士' },
			reception: { label: '24小时前台', detail: '随时为您服务' }
		},
		locationTitle: '芭提雅核心区的黄金地段',
		locationSubtitle: '得天独厚的位置，让您轻松探索芭提雅，并随时归返我们精美的兰纳风格度假胜地。',
		locationDistanceLabel: '至市中心距离',
		locationDistanceValue: '10分钟',
		locationHighlights: {
			walkingStreet: '步行街',
			pattayaBeach: '芭提雅海滩',
			sanctuaryOfTruth: '真理圣殿',
			floatingMarket: '水上市场',
			nongNoochGarden: '农诺花园'
		},
		featuredTitle: '我们的客房与别墅',
		featuredSubtitle: '从温馨的标准间到奢华的泳池别墅，每个空间都以泰北兰纳风格精心设计。',
		ctaTitle: '准备好体验卡萨隆了吗？',
		ctaSubtitle: '立即预订，踏入兰纳宏伟世界。'
	},
	rooms: {
		pagePreTitle: '住宿',
		pageTitle: '我们的客房与别墅',
		sectionTitle: '寻找您的完美客房',
		sectionSubtitle: '五种不同房型，每种都以独特方式诠释泰北兰纳豪华与现代舒适。',
		ctaTitle: '不确定哪种房型最适合您？',
		ctaSubtitle: '联系我们的团队，我们将帮您找到最佳选择。',
		breadcrumbHome: '首页',
		breadcrumbRooms: '客房',
		specsSize: '面积',
		specsCapacity: '入住人数',
		specsBed: '床型',
		aboutRoom: '关于本客房',
		amenities: '客房设施',
		readyToExperience: '准备好体验了吗？',
		bookYourStayAtKasalong: '预订卡萨隆住宿',
		secureYourRoom: '预订{name}，在芭提雅享受难忘的兰纳泰式体验。',
		data: {
			standard: {
				name: '标准间',
				bedType: '双人床或两张单人床',
				capacity: '2位宾客',
				description: '以金色柚木板和传统泰式雕刻装饰，是探索芭提雅的完美据点。',
				features: ['空调', '免费WiFi', '平板电视', '独立卫浴', '迷你冰箱', '保险箱']
			},
			superior: {
				name: '高级间',
				bedType: '大床或四柱床',
				capacity: '2位宾客',
				description: '迷人的柚木四柱天幕床配以薄纱垂帘、琥珀色墙壁和手工雕刻泰式壁画——经典兰纳浪漫情怀。',
				features: ['四柱天幕床', '空调', '免费WiFi', '平板电视', '独立卫浴', '迷你吧', '保险箱']
			},
			deluxe: {
				name: '豪华间',
				bedType: '大床',
				capacity: '2-3位宾客',
				description: '令人叹为观止的拱形床头板镶嵌精美泰式植物金壁画，为宽敞豪华间的难忘入住定下基调。',
				features: ['精美拱形床头板', '泰式金色壁画', '空调', '免费WiFi', '独立卫浴', '迷你吧', '保险箱']
			},
			'pool-villa': {
				name: '泳池景观房',
				bedType: '大床',
				capacity: '2-3位宾客',
				description: '透过落地滑动玻璃门，醒来即见碧蓝泳池美景。柚木家具和泰式雕刻完成了这片热带天堂。',
				features: ['直面泳池景观', '落地滑动玻璃门', '空调', '免费WiFi', '智能电视', '完整卫浴', '迷你吧', '室外休闲区']
			},
			'junior-suite': {
				name: '豪华套房',
				bedType: '大床',
				capacity: '2-3位宾客',
				description: '卡萨隆的皇冠明珠——金叶格子天花板、精雕柚木衣橱镶嵌金色泰式植物图案，以及全程顶级配套设施。',
				features: ['金叶天花板', '精雕柚木衣橱', '浸泡浴缸', '空调', '免费WiFi', '智能电视', '迷你吧', '管家服务']
			}
		}
	},
	facilities: {
		pagePreTitle: '我们的服务',
		pageTitle: '度假村设施',
		sectionTitle: '完美住宿的一切',
		sectionSubtitle: '世界级设施，专为每位宾客精心设计，无论休闲旅行者还是商务代表。',
		conferenceTitle: '会议与活动场地',
		conferenceSubtitle: '三个多功能场地，适合各类活动，从小型董事会会议到大型宴会。',
		conferenceCapacity: '最大容纳',
		quick: {
			parking: { label: '免费停车', detail: '轿车及旅游巴士' },
			reception: { label: '24小时前台', detail: '随时为您提供帮助' },
			wifi: { label: '免费WiFi', detail: '全酒店高速网络' },
			security: { label: '24小时安保', detail: '您的安全是我们的责任' }
		},
		data: {
			pool: {
				name: '度假村游泳池',
				description: '我们壮观的度假村泳池以标志性花卉马赛克设计为特色，背靠郁郁葱葱的热带花园和传统泰式建筑，是度假村真正的核心。',
				details: ['花卉马赛克泳池设计', '躺椅和甲板椅', '提供泳池毛巾', '热带花园环境', '赤陶泳池甲板'],
				hours: '早6时至晚9时'
			},
			dining: {
				name: '泰式美食与餐饮',
				description: '在我们招牌餐厅精美的金色雕刻柚木天花板下用餐。正宗泰国风味和国际美食在令人叹为观止的华丽环境中呈现。',
				details: ['单点菜单', '正宗泰国菜', '国际美食', '客房送餐服务', '私人用餐需预约'],
				hours: '早6时至晚10时'
			},
			conference: {
				name: '会议与活动',
				description: '我们宏伟的兰纳风格活动场地——以传统琥珀灯笼和精美泰式装饰为特色——为会议、研讨会和庆典活动创造难忘的背景。',
				details: ['3个专属活动场地', '完整AV系统', '高速WiFi', '驻场餐饮服务', '活动协调团队']
			}
		},
		conferenceRooms: {
			lannaGrandHall: {
				name: '兰纳大厅',
				features: ['AV系统及舞台', '传统琥珀灯笼', '宴会或剧场式布局', '宏伟入口大厅']
			},
			orchidRoom: {
				name: '兰花厅',
				features: ['投影仪及屏幕', '灵活座位布局', '自然采光', '休息露台']
			},
			lotusRoom: {
				name: '莲花厅',
				features: ['董事会配置', '视频会议', '白板', '私人餐饮服务']
			}
		}
	},
	attractions: {
		pagePreTitle: '探索芭提雅',
		pageTitle: '周边景点',
		sectionTitle: '发现芭提雅',
		sectionSubtitle: '我们的优越位置让芭提雅最具标志性的景点触手可及——海滩、文化地标和生动娱乐，尽在咫尺。',
		ctaTitle: '准备好开始探索了吗？',
		ctaSubtitle: '我们的前台团队可安排旅游、接送和当地推荐。',
		data: {
			'walking-street': {
				name: '步行街',
				description: '芭提雅举世闻名的娱乐街夜间活力四射——餐厅、夜总会和多彩夜生活。一个难忘的夜晚等待着您。',
				category: '娱乐'
			},
			'floating-market': {
				name: '芭提雅水上市场',
				description: '在这个独特的水上市场体验正宗泰国文化。浏览当地手工艺品、品尝街头美食，探索四个泰国地区文化区。',
				category: '集市'
			},
			'sanctuary-of-truth': {
				name: '真理圣殿',
				description: '一座令人叹为观止的全木结构建筑，充满受古代高棉和泰国艺术启发的雕塑——芭提雅最令人肃然起敬的地标之一。',
				category: '文化'
			},
			'pattaya-beach': {
				name: '芭提雅海滩',
				description: '标志性的月牙形海滩提供水上运动、海滨餐饮和壮观日落。经典芭提雅体验，不容错过。',
				category: '海滩'
			},
			'nong-nooch-garden': {
				name: '农诺热带花园',
				description: '超过600英亩精心修缮的花园，拥有世界上最大的苏铁收藏，以及泰国文化表演和大象表演。',
				category: '自然'
			}
		}
	},
	gallery: {
		pagePreTitle: '视觉故事',
		pageTitle: '照片相册',
		sectionTitle: '卡萨隆一瞥',
		sectionSubtitle: '浏览我们的照片合集，展示度假村、客房、设施以及美丽的芭提雅环境。',
		categories: {
			all: '所有照片',
			exterior: '外观与庭院',
			facilities: '泳池、餐饮与设施',
			rooms: '客房与套房'
		}
	},
	contact: {
		pagePreTitle: '期待您的联系',
		pageTitle: '联系我们',
		sectionTitle: '与我们取得联系',
		sectionSubtitle: '我们的团队全天候提供服务，协助预订、咨询及任何需求。',
		formTitle: '发送消息',
		infoTitle: '我们的联系信息',
		formName: '姓名 *',
		formNamePlaceholder: '您的全名',
		formEmail: '电子邮件 *',
		formPhone: '电话（选填）',
		formPhonePlaceholder: '+66 xx xxx xxxx',
		formSubject: '主题',
		formMessage: '消息 *',
		formMessagePlaceholder: '我们能为您做些什么？',
		formSend: '发送消息',
		formSending: '发送中…',
		formSuccess: '消息已发送！',
		formSuccessBody: '感谢您的联系。我们的团队将在24小时内回复。',
		formError: '出现错误，请重试或直接联系我们。',
		subjects: {
			generalEnquiry: '一般咨询',
			roomReservation: '客房预订',
			groupBooking: '团体预订',
			conferenceEvents: '会议与活动',
			spaWellness: '水疗与健康',
			feedback: '意见反馈'
		},
		infoAddress: '地址',
		infoTelephone: '电话',
		infoEmail: '电子邮件',
		infoReservations: '预订',
		infoGeneral: '一般事务',
		infoHours: '营业时间',
		infoConnect: '关注我们',
		ctaTitle: '准备好预订了吗？',
		ctaSubtitle: '跳过表单，直接通过您偏好的平台预订。'
	},
	book: {
		pagePreTitle: '预订您的体验',
		pageTitle: '预订住宿',
		sectionTitle: '选择预订平台',
		sectionSubtitle: '在下方选择您偏好的平台。所有链接直接跳转至卡萨隆的页面。',
		trustSecure: '安全预订',
		trustSecureDetail: '所有平台均已验证',
		trustBest: '最佳体验',
		trustBestDetail: '保证入住品质',
		trustSupport: '24小时支持',
		trustSupportDetail: '我们随时为您服务',
		ctaPreTitle: '希望直接与我们沟通？',
		ctaTitle: '通过LINE或Facebook预订',
		ctaSubtitle: '与我们的预订团队联系，获得个性化服务、特殊要求或团体预订支持。',
		lineLabel: '通过LINE预订',
		facebookLabel: '在Facebook上留言',
		faqLabel: '需要帮助选择？',
		faq: 'Agoda和Traveloka为泰国旅客提供最优惠价格。Booking.com适合需要灵活取消的旅客。团体或特殊活动预订请通过LINE联系我们团队。',
		platforms: {
			agoda: { tagline: '为泰国旅客提供优惠', highlight: '最受欢迎' },
			booking: { tagline: '免费取消选项' },
			traveloka: { tagline: '东南亚热门平台' },
			trip: { tagline: '赚取积分和奖励' },
			expedia: { tagline: '与机票捆绑更省钱' },
			ctrip: { tagline: '中国旅客热门选择' }
		}
	},
	footer: {
		tagline: '泰国芭提雅核心区尊贵的兰纳文化体验。',
		explore: '探索',
		contact: '联系',
		hours: '营业时间',
		hoursReception: '前台',
		hoursPool: '泳池',
		hoursDining: '餐厅',
		bookNow: '立即预订',
		rights: '版权所有。'
	},
	seo: {
		home: {
			title: '卡萨隆度假村及水疗中心 芭提雅 — 兰纳泰式豪华',
			description: '在卡萨隆度假村及水疗中心体验正宗泰北兰纳文化与现代奢华的完美融合，距芭提雅市中心仅10分钟。'
		},
		rooms: {
			title: '我们的客房 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '从卡萨隆5种精致房型中选择：标准间、高级间、豪华间、泳池景观房及豪华套房——每间均以兰纳风格设计。'
		},
		attractions: {
			title: '周边景点 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '探索卡萨隆附近芭提雅最佳景点：步行街、芭提雅海滩、真理圣殿、水上市场等。'
		},
		facilities: {
			title: '设施 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '了解卡萨隆世界级设施：游泳池、泰式餐饮、会议室等。'
		},
		gallery: {
			title: '相册 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '浏览卡萨隆照片相册：客房、泳池、餐饮以及芭提雅美丽环境。'
		},
		contact: {
			title: '联系我们 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '联系卡萨隆度假村及水疗中心 芭提雅。致电、发邮件或留言。全天候为您服务。'
		},
		book: {
			title: '预订住宿 — 卡萨隆度假村及水疗中心 芭提雅',
			description: '通过首选平台预订卡萨隆度假村及水疗中心：Agoda、Booking.com、Traveloka、Trip.com、Expedia或携程。'
		}
	}
} satisfies Translations;

export default zh;
