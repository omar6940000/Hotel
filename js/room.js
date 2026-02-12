
        const { createApp, ref, computed, onMounted, watch, nextTick } = Vue;

        const translations = {
            en: {
                nav: {
                    home: 'Home',
                    rooms: 'Suites',
                    dining: 'Dining',
                    spa: 'Wellness',
                    experiences: 'Experiences',
                    contact: 'Contact',
                    reserve: 'Reserve'
                },
                hero: {
                    label: 'Luxury Accommodations',
                    title: 'Suites Designed for',
                    titleAccent: 'Exceptional Living',
                    description: 'Each suite is a masterpiece of design and comfort, offering an unparalleled experience where every detail has been thoughtfully curated for the most discerning guests.',
                    statSuites: 'Luxury Suites',
                    statTypes: 'Suite Categories',
                    statRating: 'Service Rating',
                    scroll: 'Explore'
                },
                filter: {
                    price: 'Price Range',
                    guests: 'Guests',
                    view: 'View Type',
                    sortBy: 'Sort By',
                    all: 'All Options',
                    under: 'Under',
                    persons: 'Persons',
                    cityView: 'City View',
                    seaView: 'Sea View',
                    gardenView: 'Garden View',
                    recommended: 'Recommended',
                    priceLow: 'Price: Low to High',
                    priceHigh: 'Price: High to Low',
                    reset: 'Reset All'
                },
                room: {
                    night: 'night',
                    sqm: 'Sq. Meters',
                    guests: 'Guests',
                    beds: 'Beds',
                    book: 'Reserve Suite',
                    details: 'View Details'
                },
                rooms: {
                    presidential: {
                        category: 'Ultimate Luxury',
                        name: 'Presidential Suite',
                        description: 'The pinnacle of luxury living featuring expansive living spaces, a private cinema, chef\'s kitchen, and dedicated 24-hour butler service with breathtaking panoramic views.'
                    },
                    royal: {
                        category: 'Signature Collection',
                        name: 'Royal Suite',
                        description: 'An opulent sanctuary featuring panoramic city views, a private terrace with plunge pool, and bespoke furnishings curated from the world\'s finest artisans.'
                    },
                    grand: {
                        category: 'Premium',
                        name: 'Grand Deluxe Suite',
                        description: 'Elegant comfort meets sophisticated design in our spacious Grand Deluxe suites, featuring premium amenities, marble bathrooms, and stunning views.'
                    },
                    executive: {
                        category: 'Business Elite',
                        name: 'Executive Suite',
                        description: 'Perfect for the discerning business traveler, featuring a dedicated workspace, high-speed connectivity, and access to our exclusive Executive Lounge.'
                    },
                    honeymoon: {
                        category: 'Romance',
                        name: 'Honeymoon Suite',
                        description: 'A romantic haven designed for couples, featuring a private jacuzzi, champagne bar, rose petal turndown service, and intimate dining experiences.'
                    },
                    garden: {
                        category: 'Serene Retreat',
                        name: 'Garden Suite',
                        description: 'Immerse yourself in tranquility with direct access to our private gardens, outdoor seating area, and the soothing sounds of nature.'
                    }
                },
                amenities: {
                    kingBed: 'King Size Bed',
                    seaView: 'Sea View',
                    cityView: 'City View',
                    gardenView: 'Garden View',
                    terrace: 'Private Terrace',
                    wifi: 'High-Speed WiFi',
                    bathroom: 'Marble Bathroom',
                    minibar: 'Premium Minibar',
                    butler: 'Butler Service',
                    jacuzzi: 'Private Jacuzzi',
                    cinema: 'Private Cinema',
                    kitchen: 'Chef\'s Kitchen',
                    pool: 'Plunge Pool',
                    lounge: 'Executive Lounge',
                    workspace: 'Private Office',
                    dining: 'In-Room Dining'
                },
                badges: {
                    exclusive: 'Most Exclusive',
                    honeymoon: 'Romantic Escape',
                    favorite: 'Guest Favorite',
                    limited: 'Limited Availability'
                },
                stats: {
                    suites: 'Luxury Suites',
                    satisfaction: 'Guest Satisfaction',
                    service: 'Concierge Service',
                    years: 'Years of Excellence'
                },
                comparison: {
                    label: 'Suite Comparison',
                    title: 'Find Your Perfect Match',
                    description: 'Compare our luxury accommodations side by side to discover the ideal suite for your stay.',
                    first: 'Select First Suite',
                    second: 'Select Second Suite',
                    features: 'Features',
                    size: 'Suite Size',
                    maxGuests: 'Maximum Guests',
                    viewType: 'View Type',
                    terrace: 'Private Terrace',
                    butler: 'Butler Service',
                    price: 'Price per Night'
                },
                gallery: {
                    label: 'Visual Journey',
                    title: 'Suite Perspectives'
                },
                testimonials: {
                    label: 'Guest Experiences',
                    title: 'Stories of Excellence',
                    t1: {
                        room: 'Presidential Suite',
                        text: 'The Presidential Suite exceeded every expectation. The butler service was impeccable, and the views were absolutely breathtaking. A truly once-in-a-lifetime experience.'
                    },
                    t2: {
                        room: 'Royal Suite',
                        text: 'We stayed in the Royal Suite for our anniversary and it was magical. The private terrace and plunge pool made us feel like royalty.'
                    },
                    t3: {
                        room: 'Honeymoon Suite',
                        text: 'The most romantic experience of our lives. Every detail was perfect, from the rose petals to the champagne. We will treasure these memories forever.'
                    }
                },
                cta: {
                    label: 'Begin Your Journey',
                    title: 'Discover the Suite That Reflects Your Style',
                    description: 'Let our dedicated team curate an unforgettable experience tailored exclusively for you.',
                    button: 'Reserve Your Suite'
                },
                noResults: {
                    title: 'No Suites Found',
                    description: 'We couldn\'t find any suites matching your criteria. Try adjusting your filters.'
                },
                footer: {
                    description: 'A sanctuary of refined luxury where impeccable service meets timeless elegance. Experience hospitality at its finest.',
                    explore: 'Explore',
                    information: 'Information',
                    contact: 'Contact Us',
                    about: 'About Us',
                    careers: 'Careers',
                    press: 'Press',
                    privacy: 'Privacy Policy',
                    address: 'Premium District, Downtown',
                    copyright: '© 2025 Serenity Palace Hotel. All rights reserved.'
                }
            },
            ar: {
                nav: {
                    home: 'الرئيسية',
                    rooms: 'الأجنحة',
                    dining: 'المطاعم',
                    spa: 'السبا',
                    experiences: 'التجارب',
                    contact: 'تواصل معنا',
                    reserve: 'احجز الآن'
                },
                hero: {
                    label: 'إقامة فاخرة',
                    title: 'أجنحة مصممة',
                    titleAccent: 'لإقامة استثنائية',
                    description: 'كل جناح هو تحفة فنية من التصميم والراحة، يقدم تجربة لا مثيل لها حيث تم اختيار كل تفصيل بعناية لأكثر الضيوف تطلباً.',
                    statSuites: 'جناح فاخر',
                    statTypes: 'فئات الأجنحة',
                    statRating: 'تقييم الخدمة',
                    scroll: 'استكشف'
                },
                filter: {
                    price: 'نطاق السعر',
                    guests: 'الضيوف',
                    view: 'نوع الإطلالة',
                    sortBy: 'ترتيب حسب',
                    all: 'جميع الخيارات',
                    under: 'أقل من',
                    persons: 'أشخاص',
                    cityView: 'إطلالة المدينة',
                    seaView: 'إطلالة البحر',
                    gardenView: 'إطلالة الحديقة',
                    recommended: 'الموصى به',
                    priceLow: 'السعر: الأقل أولاً',
                    priceHigh: 'السعر: الأعلى أولاً',
                    reset: 'إعادة تعيين'
                },
                room: {
                    night: 'الليلة',
                    sqm: 'متر مربع',
                    guests: 'ضيوف',
                    beds: 'أسرّة',
                    book: 'احجز الجناح',
                    details: 'التفاصيل'
                },
                rooms: {
                    presidential: {
                        category: 'الفخامة القصوى',
                        name: 'الجناح الرئاسي',
                        description: 'قمة الفخامة مع مساحات معيشة واسعة، سينما خاصة، مطبخ للشيف، وخدمة خادم شخصي على مدار الساعة مع إطلالات بانورامية خلابة.'
                    },
                    royal: {
                        category: 'المجموعة المميزة',
                        name: 'الجناح الملكي',
                        description: 'ملاذ فاخر يتميز بإطلالات بانورامية على المدينة، شرفة خاصة مع مسبح، وأثاث مصمم خصيصاً من أرقى الحرفيين في العالم.'
                    },
                    grand: {
                        category: 'بريميوم',
                        name: 'جناح جراند ديلوكس',
                        description: 'الراحة الأنيقة تلتقي بالتصميم الراقي في أجنحة جراند ديلوكس الواسعة، مع وسائل راحة فاخرة وحمامات رخامية وإطلالات خلابة.'
                    },
                    executive: {
                        category: 'نخبة الأعمال',
                        name: 'الجناح التنفيذي',
                        description: 'مثالي لرجال الأعمال المتميزين، يتميز بمساحة عمل مخصصة، اتصال عالي السرعة، وإمكانية الوصول إلى صالة التنفيذيين الحصرية.'
                    },
                    honeymoon: {
                        category: 'رومانسية',
                        name: 'جناح شهر العسل',
                        description: 'ملاذ رومانسي مصمم للأزواج، يتميز بجاكوزي خاص، بار شامبانيا، خدمة تجهيز السرير ببتلات الورد، وتجارب طعام حميمية.'
                    },
                    garden: {
                        category: 'ملاذ هادئ',
                        name: 'جناح الحديقة',
                        description: 'انغمس في الهدوء مع وصول مباشر إلى حدائقنا الخاصة، منطقة جلوس خارجية، وأصوات الطبيعة المهدئة.'
                    }
                },
                amenities: {
                    kingBed: 'سرير كينج',
                    seaView: 'إطلالة بحرية',
                    cityView: 'إطلالة المدينة',
                    gardenView: 'إطلالة الحديقة',
                    terrace: 'شرفة خاصة',
                    wifi: 'واي فاي سريع',
                    bathroom: 'حمام رخامي',
                    minibar: 'ميني بار فاخر',
                    butler: 'خدمة الخادم',
                    jacuzzi: 'جاكوزي خاص',
                    cinema: 'سينما خاصة',
                    kitchen: 'مطبخ الشيف',
                    pool: 'مسبح خاص',
                    lounge: 'صالة تنفيذية',
                    workspace: 'مكتب خاص',
                    dining: 'طعام بالغرفة'
                },
                badges: {
                    exclusive: 'الأكثر حصرية',
                    honeymoon: 'ملاذ رومانسي',
                    favorite: 'مفضل الضيوف',
                    limited: 'توفر محدود'
                },
                stats: {
                    suites: 'جناح فاخر',
                    satisfaction: 'رضا الضيوف',
                    service: 'خدمة الكونسيرج',
                    years: 'سنوات من التميز'
                },
                comparison: {
                    label: 'مقارنة الأجنحة',
                    title: 'اعثر على الجناح المثالي',
                    description: 'قارن بين أجنحتنا الفاخرة جنباً إلى جنب لاكتشاف الجناح المثالي لإقامتك.',
                    first: 'اختر الجناح الأول',
                    second: 'اختر الجناح الثاني',
                    features: 'المميزات',
                    size: 'مساحة الجناح',
                    maxGuests: 'أقصى عدد ضيوف',
                    viewType: 'نوع الإطلالة',
                    terrace: 'شرفة خاصة',
                    butler: 'خدمة الخادم',
                    price: 'السعر لكل ليلة'
                },
                gallery: {
                    label: 'رحلة بصرية',
                    title: 'لمحات من الأجنحة'
                },
                testimonials: {
                    label: 'تجارب الضيوف',
                    title: 'قصص التميز',
                    t1: {
                        room: 'الجناح الرئاسي',
                        text: 'الجناح الرئاسي تجاوز كل التوقعات. خدمة الخادم كانت مثالية والإطلالات كانت خلابة. تجربة فريدة من نوعها حقاً.'
                    },
                    t2: {
                        room: 'الجناح الملكي',
                        text: 'أقمنا في الجناح الملكي بمناسبة ذكرى زواجنا وكان سحرياً. الشرفة الخاصة والمسبح جعلانا نشعر كالملوك.'
                    },
                    t3: {
                        room: 'جناح شهر العسل',
                        text: 'أكثر تجربة رومانسية في حياتنا. كل التفاصيل كانت مثالية، من بتلات الورد إلى الشامبانيا. سنحتفظ بهذه الذكريات للأبد.'
                    }
                },
                cta: {
                    label: 'ابدأ رحلتك',
                    title: 'اكتشف الجناح الذي يعكس ذوقك',
                    description: 'دع فريقنا المتفاني يصمم لك تجربة لا تُنسى مخصصة حصرياً لك.',
                    button: 'احجز جناحك'
                },
                noResults: {
                    title: 'لم يتم العثور على أجنحة',
                    description: 'لم نتمكن من العثور على أجنحة تطابق معاييرك. جرب تعديل الفلاتر.'
                },
                footer: {
                    description: 'ملاذ من الفخامة الراقية حيث تلتقي الخدمة المتقنة بالأناقة الخالدة. استمتع بالضيافة في أبهى صورها.',
                    explore: 'استكشف',
                    information: 'معلومات',
                    contact: 'تواصل معنا',
                    about: 'من نحن',
                    careers: 'الوظائف',
                    press: 'الصحافة',
                    privacy: 'سياسة الخصوصية',
                    address: 'الحي المتميز، وسط المدينة',
                    copyright: '© 2025 فندق قصر السكينة. جميع الحقوق محفوظة.'
                }
            }
        };

        createApp({
            setup() {
                const loading = ref(true);
                const scrolled = ref(false);
                const mobileMenuOpen = ref(false);
                const lightboxOpen = ref(false);
                const lightboxImage = ref('');
                const lang = ref(localStorage.getItem('lang') || 'en');

                const filters = ref({
                    price: '',
                    guests: '',
                    view: ''
                });

                const sortBy = ref('recommended');

                const compare = ref({
                    room1: 1,
                    room2: 2
                });

                const rooms = ref([
                    {
                        id: 1,
                        category: 'rooms.presidential.category',
                        name: 'rooms.presidential.name',
                        description: 'rooms.presidential.description',
                        price: 3500,
                        size: 250,
                        guests: 6,
                        beds: 3,
                        view: 'city',
                        terrace: true,
                        butler: true,
                        popularity: 98,
                        badge: 'badges.exclusive',
                        amenities: ['amenities.kingBed', 'amenities.cityView', 'amenities.cinema', 'amenities.kitchen', 'amenities.butler', 'amenities.terrace'],
                        images: [
                            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
                            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
                            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80'
                        ]
                    },
                    {
                        id: 2,
                        category: 'rooms.royal.category',
                        name: 'rooms.royal.name',
                        description: 'rooms.royal.description',
                        price: 1800,
                        size: 150,
                        guests: 4,
                        beds: 2,
                        view: 'city',
                        terrace: true,
                        butler: true,
                        popularity: 95,
                        badge: 'badges.favorite',
                        amenities: ['amenities.kingBed', 'amenities.cityView', 'amenities.pool', 'amenities.terrace', 'amenities.butler', 'amenities.bathroom'],
                        images: [
                            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
                            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80',
                            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80'
                        ]
                    },
                    {
                        id: 3,
                        category: 'rooms.grand.category',
                        name: 'rooms.grand.name',
                        description: 'rooms.grand.description',
                        price: 850,
                        size: 85,
                        guests: 2,
                        beds: 1,
                        view: 'city',
                        terrace: false,
                        butler: false,
                        popularity: 88,
                        badge: null,
                        amenities: ['amenities.kingBed', 'amenities.cityView', 'amenities.wifi', 'amenities.bathroom', 'amenities.minibar', 'amenities.dining'],
                        images: [
                            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
                            'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80',
                            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&q=80'
                        ]
                    },
                    {
                        id: 4,
                        category: 'rooms.executive.category',
                        name: 'rooms.executive.name',
                        description: 'rooms.executive.description',
                        price: 650,
                        size: 70,
                        guests: 2,
                        beds: 1,
                        view: 'city',
                        terrace: false,
                        butler: false,
                        popularity: 85,
                        badge: null,
                        amenities: ['amenities.kingBed', 'amenities.cityView', 'amenities.workspace', 'amenities.lounge', 'amenities.wifi', 'amenities.minibar'],
                        images: [
                            'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80',
                            'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80',
                            'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&q=80'
                        ]
                    },
                    {
                        id: 5,
                        category: 'rooms.honeymoon.category',
                        name: 'rooms.honeymoon.name',
                        description: 'rooms.honeymoon.description',
                        price: 1200,
                        size: 100,
                        guests: 2,
                        beds: 1,
                        view: 'sea',
                        terrace: true,
                        butler: true,
                        popularity: 96,
                        badge: 'badges.honeymoon',
                        amenities: ['amenities.kingBed', 'amenities.seaView', 'amenities.jacuzzi', 'amenities.terrace', 'amenities.butler', 'amenities.bathroom'],
                        images: [
                            'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80',
                            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
                            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80'
                        ]
                    },
                    {
                        id: 6,
                        category: 'rooms.garden.category',
                        name: 'rooms.garden.name',
                        description: 'rooms.garden.description',
                        price: 550,
                        size: 65,
                        guests: 2,
                        beds: 1,
                        view: 'garden',
                        terrace: true,
                        butler: false,
                        popularity: 82,
                        badge: 'badges.limited',
                        amenities: ['amenities.kingBed', 'amenities.gardenView', 'amenities.terrace', 'amenities.wifi', 'amenities.bathroom', 'amenities.minibar'],
                        images: [
                            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
                            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80',
                            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80'
                        ]
                    }
                ]);

                const galleryImages = ref([
                    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
                    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
                    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
                    'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80',
                    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80'
                ]);

                const testimonials = ref([
                    {
                        room: 'testimonials.t1.room',
                        text: 'testimonials.t1.text',
                        author: 'Alexander & Victoria Sterling',
                        location: 'London, United Kingdom'
                    },
                    {
                        room: 'testimonials.t2.room',
                        text: 'testimonials.t2.text',
                        author: 'Sofia & Michael Chen',
                        location: 'Singapore'
                    },
                    {
                        room: 'testimonials.t3.room',
                        text: 'testimonials.t3.text',
                        author: 'أحمد ونور الراشد',
                        location: 'Dubai, UAE'
                    }
                ]);

                const t = (key, params = {}) => {
                    const keys = key.split('.');
                    let value = translations[lang.value];
                    for (const k of keys) {
                        value = value?.[k];
                    }
                    if (typeof value === 'string' && params) {
                        Object.keys(params).forEach(param => {
                            value = value.replace(`{${param}}`, params[param]);
                        });
                    }
                    return value || key;
                };

                const toggleLanguage = () => {
                    gsap.to('body', {
                        opacity: 0.5,
                        duration: 0.25,
                        onComplete: () => {
                            lang.value = lang.value === 'en' ? 'ar' : 'en';
                            localStorage.setItem('lang', lang.value);
                            document.documentElement.lang = lang.value;
                            document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr';
                            document.body.classList.toggle('rtl', lang.value === 'ar');
                            gsap.to('body', { opacity: 1, duration: 0.3 });
                        }
                    });
                };

                const toggleMobileMenu = () => {
                    mobileMenuOpen.value = !mobileMenuOpen.value;
                    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
                };

                const closeMobileMenu = () => {
                    mobileMenuOpen.value = false;
                    document.body.style.overflow = '';
                };

                const openLightbox = (src) => {
                    lightboxImage.value = src;
                    lightboxOpen.value = true;
                    document.body.style.overflow = 'hidden';
                };

                const closeLightbox = () => {
                    lightboxOpen.value = false;
                    document.body.style.overflow = '';
                };

                const resetFilters = () => {
                    filters.value = { price: '', guests: '', view: '' };
                    sortBy.value = 'recommended';
                };

                const getRoom = (id) => rooms.value.find(r => r.id === id) || rooms.value[0];

                const filteredRooms = computed(() => {
                    let result = [...rooms.value];

                    if (filters.value.price) {
                        const [min, max] = filters.value.price.split('-').map(v => v.replace('+', ''));
                        result = result.filter(room => {
                            if (filters.value.price.includes('+')) return room.price >= parseInt(min);
                            return room.price >= parseInt(min) && room.price <= parseInt(max);
                        });
                    }

                    if (filters.value.guests) {
                        const guestCount = parseInt(filters.value.guests);
                        result = result.filter(room => {
                            if (filters.value.guests === '6') return room.guests >= 6;
                            return room.guests >= guestCount;
                        });
                    }

                    if (filters.value.view) {
                        result = result.filter(room => room.view === filters.value.view);
                    }

                    switch (sortBy.value) {
                        case 'priceLow':
                            result.sort((a, b) => a.price - b.price);
                            break;
                        case 'priceHigh':
                            result.sort((a, b) => b.price - a.price);
                            break;
                    }

                    return result;
                });

                let roomSwipers = [];

                const initRoomSwipers = () => {
                    roomSwipers.forEach(swiper => swiper.destroy(true, true));
                    roomSwipers = [];

                    filteredRooms.value.forEach(room => {
                        const el = document.getElementById(`room-swiper-${room.id}`);
                        if (el) {
                            const swiper = new Swiper(el, {
                                slidesPerView: 1,
                                loop: true,
                                speed: 1000,
                                effect: 'fade',
                                fadeEffect: { crossFade: true },
                                pagination: {
                                    el: `#pagination-${room.id}`,
                                    clickable: true
                                },
                                navigation: {
                                    nextEl: `.next-${room.id}`,
                                    prevEl: `.prev-${room.id}`
                                }
                            });
                            roomSwipers.push(swiper);
                        }
                    });
                };

                const animateCounters = () => {
                    document.querySelectorAll('.counter').forEach(counter => {
                        const target = parseInt(counter.dataset.target);
                        gsap.to(counter, {
                            innerHTML: target,
                            duration: 2.5,
                            snap: { innerHTML: 1 },
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: counter,
                                start: 'top 85%'
                            }
                        });
                    });
                };

                const initHeroAnimations = () => {
                    const tl = gsap.timeline({ delay: 0.5 });
                    
                    gsap.to('.hero-bg img', {
                        scale: 1,
                        duration: 2,
                        ease: 'power2.out'
                    });

                    tl.to('.hero-breadcrumb', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
                      .to('.hero-label', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                      .to('.hero-title', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
                      .to('.hero-description', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
                      .to('.hero-stats', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
                };

                onMounted(() => {
                    setTimeout(() => {
                        loading.value = false;
                        setTimeout(initHeroAnimations, 100);
                    }, 1500);

                    if (lang.value === 'ar') {
                        document.documentElement.lang = 'ar';
                        document.documentElement.dir = 'rtl';
                        document.body.classList.add('rtl');
                    }

                    window.addEventListener('scroll', () => {
                        scrolled.value = window.scrollY > 80;
                    });

                    AOS.init({
                        duration: 1000,
                        once: true,
                        easing: 'ease-out-cubic',
                        offset: 50
                    });

                    setTimeout(() => {
                        initRoomSwipers();
                        
                        new Swiper('.testimonials-swiper', {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 1200,
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false
                            },
                            pagination: {
                                el: '.testimonials-pagination',
                                clickable: true
                            }
                        });

                        animateCounters();
                    }, 1600);

                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            if (lightboxOpen.value) closeLightbox();
                            if (mobileMenuOpen.value) closeMobileMenu();
                        }
                    });
                });

                watch(filteredRooms, () => {
                    nextTick(() => {
                        setTimeout(initRoomSwipers, 100);
                    });
                });

                return {
                    loading,
                    scrolled,
                    mobileMenuOpen,
                    lightboxOpen,
                    lightboxImage,
                    lang,
                    filters,
                    sortBy,
                    compare,
                    rooms,
                    filteredRooms,
                    galleryImages,
                    testimonials,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu,
                    openLightbox,
                    closeLightbox,
                    resetFilters,
                    getRoom
                };
            }
        }).mount('#app');
    