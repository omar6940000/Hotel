
        const { createApp, ref, computed, onMounted, watch } = Vue;

        const translations = {
            en: {
                nav: {
                    home: 'Home',
                    rooms: 'Rooms & Suites',
                    dining: 'Dining',
                    spa: 'Wellness',
                    experiences: 'Experiences',
                    contact: 'Contact',
                    reserve: 'Reserve'
                },
                hero: {
                    subtitle: 'Welcome to Serenity Palace',
                    title: 'Where Excellence Meets Serenity',
                    description: 'Immerse yourself in an unparalleled journey of refined luxury, where every moment is crafted to perfection and every detail speaks of timeless elegance.',
                    btnReserve: 'Reserve Your Stay',
                    btnExplore: 'Explore The Experience',
                    feature1: '5-Star Service',
                    feature2: 'Prime Location',
                    feature3: 'Exclusive Suites',
                    feature4: 'Personalized Experience',
                    scroll: 'Discover'
                },
                experience: {
                    label: 'Signature Experience',
                    title: 'A Legacy of Uncompromising Excellence',
                    description: 'Every aspect of your stay has been thoughtfully curated to exceed the expectations of the most discerning travelers.'
                },
                exp1: {
                    title: 'Personalized Hospitality',
                    description: 'From the moment you arrive, our dedicated team anticipates your every need, creating bespoke experiences that reflect your unique preferences and desires.',
                    feature1: 'Dedicated Personal Butler',
                    feature2: '24/7 Concierge Service',
                    feature3: 'Customized Amenities'
                },
                exp2: {
                    title: 'Luxury Wellness Sanctuary',
                    description: 'Discover our world-renowned spa, where ancient healing traditions merge with contemporary techniques to restore balance and rejuvenate your spirit.',
                    feature1: 'Signature Treatments',
                    feature2: 'Private Wellness Suites',
                    feature3: 'Expert Therapists'
                },
                stats: {
                    years: 'Years of Excellence',
                    suites: 'Luxury Suites',
                    satisfaction: 'Guest Satisfaction',
                    service: 'Concierge Service'
                },
                rooms: {
                    label: 'Accommodations',
                    title: 'Exceptional Sanctuaries of Comfort',
                    description: 'Each room and suite has been designed as a private retreat, combining sophisticated aesthetics with supreme comfort.'
                },
                room1: {
                    category: 'Signature Collection',
                    name: 'The Royal Suite',
                    description: 'An opulent sanctuary featuring panoramic city views, a private terrace, and bespoke furnishings curated from the world\'s finest artisans.'
                },
                room2: {
                    category: 'Ultimate Luxury',
                    name: 'Presidential Suite',
                    description: 'The pinnacle of luxury living with expansive living spaces, a private cinema, chef\'s kitchen, and dedicated butler service.'
                },
                room3: {
                    category: 'Premium',
                    name: 'Grand Deluxe Room',
                    description: 'Elegant comfort meets sophisticated design in our spacious Grand Deluxe rooms, featuring premium amenities and stunning views.'
                },
                room: {
                    guests: '{n} Guests',
                    view: 'City View',
                    terrace: 'Private Terrace',
                    spa: 'In-Room Spa',
                    night: 'night',
                    book: 'Book Now'
                },
                awards: {
                    label: 'Recognition',
                    title: 'Awards & Accolades'
                },
                award1: {
                    title: 'TripAdvisor Travelers\' Choice',
                    year: 'Best Luxury Hotel 2025'
                },
                award2: {
                    title: 'World Luxury Hotel Awards',
                    year: 'Winner 2024 & 2025'
                },
                award3: {
                    title: 'Forbes Travel Guide',
                    year: 'Five-Star Rating'
                },
                testimonials: {
                    label: 'Guest Stories',
                    title: 'Voices of Excellence'
                },
                testimonial1: {
                    text: 'An extraordinary experience that redefined our understanding of luxury. The attention to detail and personalized service exceeded every expectation.',
                    author: 'James & Victoria Sterling',
                    location: 'London, United Kingdom'
                },
                testimonial2: {
                    text: 'From the moment we arrived, we were treated like royalty. The Serenity Palace sets a new standard for hospitality excellence.',
                    author: 'Sofia Chen',
                    location: 'Singapore'
                },
                testimonial3: {
                    text: 'A perfect blend of timeless elegance and modern luxury. Every moment was magical, and the staff made us feel truly special.',
                    author: 'Mohammed Al-Rashid',
                    location: 'Dubai, UAE'
                },
                gallery: {
                    label: 'Visual Journey',
                    title: 'Glimpses of Elegance'
                },
                cta: {
                    title: 'Your Exceptional Stay Begins Here',
                    description: 'Allow us to craft an unforgettable experience tailored exclusively for you. Contact our reservations team to begin your journey.',
                    button: 'Make a Reservation'
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
                    address: 'Downtown, Premium District',
                    copyright: '© 2025 Serenity Palace Hotel. All rights reserved.'
                }
            },
            ar: {
                nav: {
                    home: 'الرئيسية',
                    rooms: 'الغرف والأجنحة',
                    dining: 'المطاعم',
                    spa: 'السبا',
                    experiences: 'التجارب',
                    contact: 'اتصل بنا',
                    reserve: 'احجز الآن'
                },
                hero: {
                    subtitle: 'مرحباً بكم في قصر السكينة',
                    title: 'حيث يلتقي التميز بالسكينة',
                    description: 'انغمس في رحلة استثنائية من الفخامة الراقية، حيث كل لحظة مصممة بإتقان وكل تفصيل يعكس الأناقة الخالدة.',
                    btnReserve: 'احجز إقامتك',
                    btnExplore: 'استكشف التجربة',
                    feature1: 'خدمة 5 نجوم',
                    feature2: 'موقع متميز',
                    feature3: 'أجنحة حصرية',
                    feature4: 'تجربة شخصية',
                    scroll: 'اكتشف'
                },
                experience: {
                    label: 'تجربة فريدة',
                    title: 'إرث من التميز المطلق',
                    description: 'كل جانب من إقامتك تم اختياره بعناية ليتجاوز توقعات أكثر المسافرين تطلباً.'
                },
                exp1: {
                    title: 'ضيافة شخصية',
                    description: 'من لحظة وصولك، يستشعر فريقنا المتفاني كل احتياجاتك، ويصمم تجارب فريدة تعكس تفضيلاتك ورغباتك الخاصة.',
                    feature1: 'خادم شخصي مخصص',
                    feature2: 'خدمة كونسيرج على مدار الساعة',
                    feature3: 'وسائل راحة مخصصة'
                },
                exp2: {
                    title: 'واحة العافية الفاخرة',
                    description: 'اكتشف منتجعنا الصحي المشهور عالمياً، حيث تمتزج تقاليد الشفاء القديمة مع التقنيات المعاصرة لاستعادة التوازن وتجديد روحك.',
                    feature1: 'علاجات مميزة',
                    feature2: 'أجنحة عافية خاصة',
                    feature3: 'معالجون خبراء'
                },
                stats: {
                    years: 'سنوات من التميز',
                    suites: 'جناح فاخر',
                    satisfaction: 'رضا الضيوف',
                    service: 'خدمة الكونسيرج'
                },
                rooms: {
                    label: 'الإقامة',
                    title: 'ملاذات استثنائية للراحة',
                    description: 'صُممت كل غرفة وجناح كملاذ خاص، يجمع بين الجماليات الراقية والراحة الفائقة.'
                },
                room1: {
                    category: 'المجموعة المميزة',
                    name: 'الجناح الملكي',
                    description: 'ملاذ فاخر يتميز بإطلالات بانورامية على المدينة، شرفة خاصة، وأثاث مصمم خصيصاً من أرقى الحرفيين في العالم.'
                },
                room2: {
                    category: 'الفخامة القصوى',
                    name: 'الجناح الرئاسي',
                    description: 'قمة الفخامة مع مساحات معيشة واسعة، سينما خاصة، مطبخ للشيف، وخدمة خادم مخصص.'
                },
                room3: {
                    category: 'بريميوم',
                    name: 'غرفة جراند ديلوكس',
                    description: 'الراحة الأنيقة تلتقي بالتصميم الراقي في غرف جراند ديلوكس الواسعة، مع وسائل راحة فاخرة وإطلالات خلابة.'
                },
                room: {
                    guests: '{n} ضيوف',
                    view: 'إطلالة على المدينة',
                    terrace: 'شرفة خاصة',
                    spa: 'سبا داخلي',
                    night: 'الليلة',
                    book: 'احجز الآن'
                },
                awards: {
                    label: 'التقدير',
                    title: 'الجوائز والتكريمات'
                },
                award1: {
                    title: 'جائزة اختيار المسافرين',
                    year: 'أفضل فندق فاخر 2025'
                },
                award2: {
                    title: 'جوائز الفنادق الفاخرة العالمية',
                    year: 'الفائز 2024 و 2025'
                },
                award3: {
                    title: 'دليل فوربس للسفر',
                    year: 'تصنيف خمس نجوم'
                },
                testimonials: {
                    label: 'قصص الضيوف',
                    title: 'أصوات التميز'
                },
                testimonial1: {
                    text: 'تجربة استثنائية أعادت تعريف فهمنا للفخامة. الاهتمام بالتفاصيل والخدمة الشخصية فاقت كل التوقعات.',
                    author: 'جيمس وفيكتوريا ستيرلينج',
                    location: 'لندن، المملكة المتحدة'
                },
                testimonial2: {
                    text: 'من لحظة وصولنا، عوملنا كالملوك. قصر السكينة يضع معياراً جديداً للضيافة المتميزة.',
                    author: 'صوفيا تشين',
                    location: 'سنغافورة'
                },
                testimonial3: {
                    text: 'مزيج مثالي من الأناقة الخالدة والفخامة العصرية. كل لحظة كانت ساحرة، والفريق جعلنا نشعر بأننا مميزون حقاً.',
                    author: 'محمد الراشد',
                    location: 'دبي، الإمارات'
                },
                gallery: {
                    label: 'رحلة بصرية',
                    title: 'لمحات من الأناقة'
                },
                cta: {
                    title: 'إقامتك الاستثنائية تبدأ هنا',
                    description: 'دعنا نصمم لك تجربة لا تُنسى مخصصة حصرياً لك. تواصل مع فريق الحجوزات لبدء رحلتك.',
                    button: 'احجز الآن'
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
                    address: 'وسط المدينة، الحي المتميز',
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
                
                // Language
                const lang = ref(localStorage.getItem('lang') || 'en');

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
                    const newLang = lang.value === 'en' ? 'ar' : 'en';
                    
                    // Fade out animation
                    gsap.to('body', {
                        opacity: 0.5,
                        duration: 0.2,
                        onComplete: () => {
                            lang.value = newLang;
                            localStorage.setItem('lang', newLang);
                            
                            // Update direction
                            document.documentElement.lang = newLang;
                            document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
                            document.body.classList.toggle('rtl', newLang === 'ar');
                            
                            // Fade in animation
                            gsap.to('body', {
                                opacity: 1,
                                duration: 0.3
                            });
                        }
                    });
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

                // Mobile menu functions
                const toggleMobileMenu = () => {
                    mobileMenuOpen.value = !mobileMenuOpen.value;
                    if (mobileMenuOpen.value) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = '';
                    }
                };

                const closeMobileMenu = () => {
                    mobileMenuOpen.value = false;
                    document.body.style.overflow = '';
                };

                // Counter animation
                const animateCounters = () => {
                    const counters = document.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.target);
                        gsap.to(counter, {
                            innerHTML: target,
                            duration: 2,
                            snap: { innerHTML: 1 },
                            scrollTrigger: {
                                trigger: counter,
                                start: 'top 80%'
                            }
                        });
                    });
                };

                onMounted(() => {
                    // Hide preloader
                    setTimeout(() => {
                        loading.value = false;
                    }, 1500);

                    // Set initial language direction
                    if (lang.value === 'ar') {
                        document.documentElement.lang = 'ar';
                        document.documentElement.dir = 'rtl';
                        document.body.classList.add('rtl');
                    }

                    // Scroll handler
                    window.addEventListener('scroll', () => {
                        scrolled.value = window.scrollY > 100;
                    });

                    // Initialize AOS
                    AOS.init({
                        duration: 1000,
                        once: true,
                        easing: 'ease-out-cubic'
                    });

                    // GSAP Hero animations
                    setTimeout(() => {
                        const tl = gsap.timeline();
                        tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 })
                          .to('.hero-title', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
                          .to('.hero-description', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
                          .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
                          .to('.hero-features', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
                    }, 1600);

                    // Initialize Swipers
                    new Swiper('.rooms-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 50,
                        speed: 800,
                        navigation: {
                            nextEl: '.room-next',
                            prevEl: '.room-prev'
                        }
                    });

                    new Swiper('.testimonials-swiper', {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        speed: 1000,
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false
                        },
                        pagination: {
                            el: '.testimonials-pagination',
                            clickable: true
                        }
                    });

                    // Counter animations
                    setTimeout(animateCounters, 100);

                    // Keyboard handler for lightbox and mobile menu
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            if (lightboxOpen.value) {
                                closeLightbox();
                            }
                            if (mobileMenuOpen.value) {
                                closeMobileMenu();
                            }
                        }
                    });
                });

                return {
                    loading,
                    scrolled,
                    mobileMenuOpen,
                    lightboxOpen,
                    lightboxImage,
                    lang,
                    t,
                    toggleLanguage,
                    openLightbox,
                    closeLightbox,
                    toggleMobileMenu,
                    closeMobileMenu
                };
            }
        }).mount('#app');
    