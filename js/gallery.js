
        const { createApp, ref, computed, onMounted, watch } = Vue;

        const translations = {
            ar: {
                nav: {
                    home: 'الرئيسية',
                    rooms: 'الأجنحة',
                    services: 'الخدمات',
                    gallery: 'المعرض',
                    about: 'من نحن',
                    experiences: 'التجارب',
                    contact: 'تواصل معنا',
                    book: 'احجز الآن'
                },
                hero: {
                    label: 'رحلة بصرية',
                    title: 'استكشف معرضنا الحصري',
                    description: 'اكتشف جمال وأناقة قصر السكينة من خلال مجموعتنا المنتقاة من الصور التي تعرض الفخامة في أبهى صورها.',
                    scroll: 'استكشف'
                },
                filter: {
                    all: 'الكل',
                    suites: 'الأجنحة',
                    dining: 'المطاعم',
                    spa: 'السبا والعافية',
                    amenities: 'المرافق',
                    events: 'الفعاليات'
                },
                gallery: {
                    label: 'معرض الصور',
                    title: 'لحظات من الأناقة',
                    description: 'كل صورة تلتقط جوهر الفخامة والاهتمام بالتفاصيل الذي يميز فندقنا.'
                },
                categories: {
                    suites: {
                        label: 'الغرف والأجنحة',
                        title: 'إقامة فاخرة'
                    },
                    spa: {
                        label: 'السبا والعافية',
                        title: 'واحة الهدوء'
                    }
                },
                featured: {
                    lobby: {
                        category: 'الردهة الرئيسية',
                        title: 'قاعة الاستقبال الكبرى',
                        description: 'ادخل إلى عالم من الأناقة الراقية من خلال ردهتنا الفخمة المزينة بثريات كريستالية.'
                    },
                    suite: {
                        category: 'الجناح الرئاسي',
                        title: 'قمة الفخامة',
                        description: 'استمتع بقمة الضيافة في جناحنا الرئاسي الواسع مع إطلالات بانورامية.'
                    },
                    pool: {
                        category: 'المسبح اللامتناهي',
                        title: 'جنة على السطح',
                        description: 'استرخِ في مسبحنا اللامتناهي المذهل مع إطلالة على أفق المدينة عند غروب الشمس.'
                    },
                    restaurant: {
                        category: 'المطعم الفاخر',
                        title: 'تميز في الطهي',
                        description: 'تذوق المأكولات العالمية في أجواء من الرقي والأناقة.'
                    },
                    spa: {
                        category: 'مركز العافية',
                        title: 'ملاذ الهدوء',
                        description: 'جدد نشاط جسمك وعقلك في واحة السبا الحائزة على جوائز.'
                    }
                },
                images: {
                    suites: {
                        presidential: 'الجناح الرئاسي',
                        royal: 'الجناح الملكي',
                        grand: 'جراند ديلوكس',
                        executive: 'الجناح التنفيذي',
                        honeymoon: 'جناح شهر العسل',
                        garden: 'جناح الحديقة'
                    },
                    dining: {
                        restaurant: 'المطعم الرئيسي',
                        lounge: 'صالة الكوكتيل',
                        terrace: 'الشرفة',
                        private: 'طعام خاص'
                    },
                    spa: {
                        treatment: 'غرفة العلاج',
                        pool: 'مسبح السبا',
                        sauna: 'ساونا فاخرة',
                        relaxation: 'منطقة الاسترخاء'
                    },
                    amenities: {
                        pool: 'المسبح اللامتناهي',
                        gym: 'مركز اللياقة',
                        lobby: 'الردهة الكبرى',
                        garden: 'الحدائق الخاصة'
                    },
                    events: {
                        ballroom: 'قاعة الاحتفالات',
                        conference: 'مركز المؤتمرات',
                        wedding: 'قاعة الأفراح',
                        terrace: 'شرفة الفعاليات'
                    }
                },
                stats: {
                    photos: 'صورة مذهلة',
                    categories: 'فئة',
                    suites: 'جناح فاخر',
                    years: 'سنة من التميز'
                },
                cta: {
                    label: 'ابدأ رحلتك',
                    title: 'احجز إقامتك واختبر الفخامة بنفسك',
                    description: 'دعنا نصنع لحظات لا تُنسى مخصصة حصرياً لك.',
                    button: 'احجز الآن'
                },
                footer: {
                    description: 'ملاذ من الفخامة الراقية حيث تلتقي الخدمة المتقنة بالأناقة الخالدة.',
                    explore: 'استكشف',
                    information: 'معلومات',
                    contact: 'تواصل معنا',
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
                const lightboxIndex = ref(0);
                const lightboxImages = ref([]);
                const lang = ref('ar');
                const activeFilter = ref('all');
                const currentSlide = ref(1);
                const progressWidth = ref(20);

                const featuredImages = ref([
                    { image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80', category: 'featured.lobby.category', title: 'featured.lobby.title', description: 'featured.lobby.description' },
                    { image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80', category: 'featured.suite.category', title: 'featured.suite.title', description: 'featured.suite.description' },
                    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80', category: 'featured.pool.category', title: 'featured.pool.title', description: 'featured.pool.description' },
                    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80', category: 'featured.restaurant.category', title: 'featured.restaurant.title', description: 'featured.restaurant.description' },
                    { image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80', category: 'featured.spa.category', title: 'featured.spa.title', description: 'featured.spa.description' }
                ]);

                const galleryImages = ref([
                    // Suites
                    { image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', category: 'filter.suites', title: 'images.suites.presidential', filter: 'suites', size: 'featured' },
                    { image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', category: 'filter.suites', title: 'images.suites.royal', filter: 'suites', size: '' },
                    { image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', category: 'filter.suites', title: 'images.suites.grand', filter: 'suites', size: 'tall' },
                    // Dining
                    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', category: 'filter.dining', title: 'images.dining.restaurant', filter: 'dining', size: 'wide' },
                    { image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80', category: 'filter.dining', title: 'images.dining.lounge', filter: 'dining', size: '' },
                    // Spa
                    { image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', category: 'filter.spa', title: 'images.spa.treatment', filter: 'spa', size: '' },
                    { image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', category: 'filter.spa', title: 'images.spa.relaxation', filter: 'spa', size: 'wide' },
                    // Amenities
                    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', category: 'filter.amenities', title: 'images.amenities.pool', filter: 'amenities', size: 'tall' },
                    { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', category: 'filter.amenities', title: 'images.amenities.gym', filter: 'amenities', size: '' },
                    { image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', category: 'filter.amenities', title: 'images.amenities.garden', filter: 'amenities', size: '' },
                    // Events
                    { image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80', category: 'filter.events', title: 'images.events.ballroom', filter: 'events', size: 'wide' },
                    { image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80', category: 'filter.events', title: 'images.events.wedding', filter: 'events', size: '' }
                ]);

                const suitesImages = ref([
                    { image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', title: 'images.suites.presidential' },
                    { image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80', title: 'images.suites.royal' },
                    { image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', title: 'images.suites.grand' },
                    { image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80', title: 'images.suites.executive' },
                    { image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80', title: 'images.suites.honeymoon' },
                    { image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80', title: 'images.suites.garden' }
                ]);

                const spaImages = ref([
                    { image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', title: 'images.spa.treatment' },
                    { image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', title: 'images.spa.relaxation' },
                    { image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80', title: 'images.spa.pool' },
                    { image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80', title: 'images.spa.sauna' }
                ]);

                const filteredGallery = computed(() => {
                    if (activeFilter.value === 'all') return galleryImages.value;
                    return galleryImages.value.filter(img => img.filter === activeFilter.value);
                });

                const currentLightboxImage = computed(() => {
                    return lightboxImages.value[lightboxIndex.value] || { image: '', title: '', category: '' };
                });

                const t = (key) => {
                    const keys = key.split('.');
                    let value = translations[lang.value];
                    for (const k of keys) {
                        value = value?.[k];
                    }
                    return value || '';
                };

                const toggleLanguage = () => {};

                const toggleMobileMenu = () => {
                    mobileMenuOpen.value = !mobileMenuOpen.value;
                    document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
                };

                const closeMobileMenu = () => {
                    mobileMenuOpen.value = false;
                    document.body.style.overflow = '';
                };

                const setFilter = (filter) => {
                    activeFilter.value = filter;
                };

                const openLightbox = (index) => {
                    lightboxImages.value = filteredGallery.value;
                    lightboxIndex.value = index;
                    lightboxOpen.value = true;
                    document.body.style.overflow = 'hidden';
                };

                const openLightboxCategory = (category, index) => {
                    if (category === 'suites') {
                        lightboxImages.value = suitesImages.value;
                    } else if (category === 'spa') {
                        lightboxImages.value = spaImages.value;
                    }
                    lightboxIndex.value = index;
                    lightboxOpen.value = true;
                    document.body.style.overflow = 'hidden';
                };

                const closeLightbox = () => {
                    lightboxOpen.value = false;
                    document.body.style.overflow = '';
                };

                const prevImage = () => {
                    lightboxIndex.value = lightboxIndex.value === 0 ? lightboxImages.value.length - 1 : lightboxIndex.value - 1;
                };

                const nextImage = () => {
                    lightboxIndex.value = (lightboxIndex.value + 1) % lightboxImages.value.length;
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
                    const tl = gsap.timeline({ delay: 0.3 });
                    
                    gsap.to('.hero-bg img', {
                        scale: 1,
                        duration: 1.5,
                        ease: 'power2.out'
                    });

                    tl.to('.hero-breadcrumb', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
                      .to('.hero-label', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
                      .to('.hero-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
                      .to('.hero-description', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
                      .to('.hero-scroll', { opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2');
                };

                onMounted(() => {
                    setTimeout(() => {
                        loading.value = false;
                        setTimeout(initHeroAnimations, 100);
                    }, 1200);

                    if (lang.value === 'ar') {
                        document.documentElement.lang = 'ar';
                        document.documentElement.dir = 'rtl';
                        document.body.classList.add('rtl');
                    }

                    window.addEventListener('scroll', () => {
                        scrolled.value = window.scrollY > 50;
                    });

                    AOS.init({
                        duration: 1000,
                        once: true,
                        easing: 'ease-out-cubic',
                        offset: 50
                    });

                    setTimeout(() => {
                        // Featured Swiper
                        const featuredSwiper = new Swiper('.featured-swiper', {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            speed: 1200,
                            loop: true,
                            autoplay: {
                                delay: 5000,
                                disableOnInteraction: false
                            },
                            navigation: {
                                nextEl: '.featured-next',
                                prevEl: '.featured-prev'
                            },
                            on: {
                                slideChange: function() {
                                    currentSlide.value = this.realIndex + 1;
                                    progressWidth.value = ((this.realIndex + 1) / featuredImages.value.length) * 100;
                                }
                            }
                        });

                        // Suites Swiper
                        new Swiper('.suites-swiper', {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            speed: 800,
                            navigation: {
                                nextEl: '.suites-next',
                                prevEl: '.suites-prev'
                            },
                            breakpoints: {
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }
                        });

                        // Spa Swiper
                        new Swiper('.spa-swiper', {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            speed: 800,
                            navigation: {
                                nextEl: '.spa-next',
                                prevEl: '.spa-prev'
                            },
                            breakpoints: {
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }
                        });

                        animateCounters();
                    }, 1500);

                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            if (lightboxOpen.value) closeLightbox();
                            if (mobileMenuOpen.value) closeMobileMenu();
                        }
                        if (lightboxOpen.value) {
                            if (e.key === 'ArrowLeft') prevImage();
                            if (e.key === 'ArrowRight') nextImage();
                        }
                    });
                });

                return {
                    loading,
                    scrolled,
                    mobileMenuOpen,
                    lightboxOpen,
                    lightboxIndex,
                    lightboxImages,
                    currentLightboxImage,
                    lang,
                    activeFilter,
                    currentSlide,
                    progressWidth,
                    featuredImages,
                    galleryImages,
                    filteredGallery,
                    suitesImages,
                    spaImages,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu,
                    setFilter,
                    openLightbox,
                    openLightboxCategory,
                    closeLightbox,
                    prevImage,
                    nextImage
                };
            }
        }).mount('#app');
    