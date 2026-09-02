
        const { createApp, ref, onMounted } = Vue;

        const translations = {
            ar: {
                nav: {
                    home: 'الرئيسية',
                    rooms: 'الأجنحة',
                    services: 'الخدمات',
                    dining: 'المطاعم',
                    about: 'من نحن',
                    experiences: 'التجارب',
                    contact: 'تواصل معنا',
                    book: 'احجز الآن'
                },
                hero: {
                    label: 'خدمات عالمية المستوى',
                    title: 'اكتشف خدماتنا ومرافقنا الحصرية',
                    description: 'استمتع بفخامة لا مثيل لها مع مجموعتنا المنتقاة من الخدمات المصممة للارتقاء بكل لحظة من إقامتك.',
                    scroll: 'استكشف'
                },
                services: {
                    label: 'الخدمات الأساسية',
                    title: 'خدمات استثنائية لضيوف مميزين',
                    description: 'كل خدمة مصممة بعناية لتتجاوز توقعاتك وتصنع ذكريات لا تُنسى.',
                    learnMore: 'اعرف المزيد',
                    spa: {
                        title: 'السبا والعافية',
                        description: 'جدد نشاط جسمك وعقلك مع علاجات السبا العالمية وبرامج العافية.'
                    },
                    dining: {
                        title: 'المطاعم الفاخرة',
                        description: 'استمتع بإبداعات طهي رائعة من طهاتنا الحائزين على جوائز في أجواء أنيقة.'
                    },
                    concierge: {
                        title: 'خدمة الكونسيرج',
                        description: 'فريق كونسيرج مخصص على مدار الساعة لتلبية كل طلباتك ورغباتك.'
                    },
                    airport: {
                        title: 'النقل من المطار',
                        description: 'خدمة استقبال وتوصيل فاخرة بسيارات متميزة مع سائقين محترفين.'
                    },
                    fitness: {
                        title: 'مركز اللياقة',
                        description: 'أحدث المعدات ومدربين شخصيين متاحين على مدار الساعة.'
                    },
                    pool: {
                        title: 'المسبح اللامتناهي',
                        description: 'مسبح على السطح مع إطلالات بانورامية على المدينة وخدمة بجانب المسبح.'
                    },
                    business: {
                        title: 'مركز الأعمال',
                        description: 'قاعات اجتماعات ومرافق مؤتمرات مجهزة بالكامل لاحتياجات الشركات.'
                    },
                    butler: {
                        title: 'خدمة الخادم الشخصي',
                        description: 'خدمة خادم شخصي لضيوف الأجنحة لضمان تجربة فخامة سلسة.'
                    }
                },
                amenities: {
                    signature: 'تجربة مميزة',
                    award: 'حائز على جوائز',
                    hours: 'ساعات العمل',
                    bookNow: 'احجز جلسة',
                    reserve: 'احجز طاولة',
                    spa: {
                        label: 'واحة العافية',
                        title: 'مركز سيرينيتي للسبا والعافية',
                        description: 'اهرب إلى سبانا الحائز على جوائز، حيث تلتقي تقاليد الشفاء القديمة بالفخامة العصرية. يقدم معالجونا الخبراء علاجات مخصصة لاستعادة التوازن وتجديد روحك.',
                        feature1: 'علاجات تدليك مميزة',
                        feature2: 'علاجات فاخرة للوجه',
                        feature3: 'أجنحة خاصة للأزواج'
                    },
                    dining: {
                        label: 'التميز في الطهي',
                        title: 'مطعم الجناح الكبير',
                        description: 'انطلق في رحلة طهي في مطعمنا المميز، حيث يبدع شيفنا الحائز على نجمة ميشلان أطباقًا استثنائية باستخدام أجود المكونات من حول العالم.',
                        feature1: 'مطبخ حائز على نجمة ميشلان',
                        feature2: 'مجموعة نبيذ واسعة',
                        feature3: 'غرف طعام خاصة'
                    },
                    fitness: {
                        label: 'الصحة والحيوية',
                        title: 'مركز اللياقة والرياضات المائية',
                        description: 'يتميز مركز اللياقة الحديث لدينا بأحدث المعدات وخدمات التدريب الشخصي ومسبح لا متناهي مذهل مع إطلالات خلابة.',
                        feature1: 'جلسات تدريب شخصية',
                        feature2: 'دخول المسبح اللامتناهي',
                        feature3: 'دروس يوغا وتأمل'
                    }
                },
                gallery: {
                    label: 'رحلة بصرية',
                    title: 'استمتع بمرافقنا',
                    spa: 'سبا سيرينيتي',
                    pool: 'المسبح اللامتناهي',
                    restaurant: 'المطعم الفاخر',
                    lounge: 'الصالة الخاصة',
                    gym: 'مركز اللياقة',
                    wellness: 'العافية',
                    dining: 'الطهي',
                    leisure: 'الترفيه',
                    relaxation: 'الاسترخاء',
                    gourmet: 'الذواقة'
                },
                experiences: {
                    label: 'تجارب حصرية',
                    title: 'لحظات فاخرة منتقاة',
                    description: 'اكتشف تجارب فريدة مصممة حصرياً لضيوفنا المميزين.',
                    explore: 'استكشف',
                    butler: {
                        title: 'خدمة الخادم الشخصي',
                        description: 'استمتع بخدمة خادم مخصص على مدار الساعة لتوقع وتلبية كل احتياجاتك.'
                    },
                    private: {
                        title: 'تجربة طعام خاصة',
                        description: 'استمتع برحلة طهي حصرية يعدها شيفنا التنفيذي في أجواء حميمية.'
                    },
                    lounge: {
                        title: 'دخول الصالة التنفيذية',
                        description: 'دخول حصري لصالتنا الخاصة مع وسائل راحة متميزة وخدمة شخصية.'
                    },
                    yacht: {
                        title: 'جولات اليخت والهليكوبتر',
                        description: 'استكشف الساحل بيخت خاص أو استمتع بمناظر جوية مع جولات الهليكوبتر.'
                    }
                },
                testimonials: {
                    label: 'تجارب الضيوف',
                    title: 'ماذا يقول ضيوفنا',
                    t1: {
                        service: 'السبا والعافية',
                        text: 'كانت تجربة السبا رائعة للغاية. كان المعالجون ماهرين بشكل لا يصدق، والأجواء كانت فخامة خالصة. شعرت بالتجدد الكامل.'
                    },
                    t2: {
                        service: 'المطعم الفاخر',
                        text: 'رحلة طهي استثنائية. كل طبق كان تحفة فنية، والخدمة كانت لا تشوبها شائبة. مطابقة النبيذ كانت استثنائية.'
                    },
                    t3: {
                        service: 'خدمة الكونسيرج',
                        text: 'فريق الكونسيرج تجاوز كل التوقعات لجعل ذكرى زواجنا مميزة. اهتمامهم بالتفاصيل كان رائعاً.'
                    }
                },
                quickAccess: {
                    spa: 'السبا',
                    pool: 'المسبح',
                    gym: 'اللياقة',
                    dining: 'المطاعم',
                    lounge: 'الصالة',
                    business: 'الأعمال'
                },
                cta: {
                    label: 'ابدأ رحلتك',
                    title: 'اختبر الراحة والفخامة القصوى',
                    description: 'دعنا نصنع لحظات لا تُنسى مخصصة حصرياً لك.',
                    button: 'احجز تجربتك'
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
                const lightboxImage = ref('');
                const lang = ref('ar');

                const services = ref([
                    { 
                        title: 'services.spa.title', 
                        description: 'services.spa.description',
                        icon: '<path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"></path><circle cx="12" cy="10" r="3"></circle>'
                    },
                    { 
                        title: 'services.dining.title', 
                        description: 'services.dining.description',
                        icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"></path>'
                    },
                    { 
                        title: 'services.concierge.title', 
                        description: 'services.concierge.description',
                        icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>'
                    },
                    { 
                        title: 'services.airport.title', 
                        description: 'services.airport.description',
                        icon: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>'
                    },
                    { 
                        title: 'services.fitness.title', 
                        description: 'services.fitness.description',
                        icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9"></path>'
                    },
                    { 
                        title: 'services.pool.title', 
                        description: 'services.pool.description',
                        icon: '<path d="M2 12h20M2 18c2-1 4 1 6 0s4 1 6 0 4 1 6 0M2 6c2-1 4 1 6 0s4 1 6 0 4 1 6 0"></path>'
                    },
                    { 
                        title: 'services.business.title', 
                        description: 'services.business.description',
                        icon: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>'
                    },
                    { 
                        title: 'services.butler.title', 
                        description: 'services.butler.description',
                        icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
                    }
                ]);

                const galleryItems = ref([
                    { image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', title: 'gallery.spa', category: 'gallery.wellness' },
                    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', title: 'gallery.pool', category: 'gallery.leisure' },
                    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', title: 'gallery.restaurant', category: 'gallery.dining' },
                    { image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80', title: 'gallery.lounge', category: 'gallery.relaxation' },
                    { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', title: 'gallery.gym', category: 'gallery.wellness' }
                ]);

                const experiences = ref([
                    { 
                        title: 'experiences.butler.title', 
                        description: 'experiences.butler.description',
                        image: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?w=800&q=80',
                        icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
                    },
                    { 
                        title: 'experiences.private.title', 
                        description: 'experiences.private.description',
                        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80',
                        icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>'
                    },
                    { 
                        title: 'experiences.lounge.title', 
                        description: 'experiences.lounge.description',
                        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
                        icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line>'
                    },
                    { 
                        title: 'experiences.yacht.title', 
                        description: 'experiences.yacht.description',
                        image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
                        icon: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>'
                    }
                ]);

                const testimonials = ref([
                    {
                        service: 'testimonials.t1.service',
                        text: 'testimonials.t1.text',
                        author: 'شارلوت ويليامز',
                        location: 'لندن، المملكة المتحدة'
                    },
                    {
                        service: 'testimonials.t2.service',
                        text: 'testimonials.t2.text',
                        author: 'مايكل وسارة تشين',
                        location: 'سنغافورة'
                    },
                    {
                        service: 'testimonials.t3.service',
                        text: 'testimonials.t3.text',
                        author: 'أحمد ونور الراشد',
                        location: 'دبي، الإمارات'
                    }
                ]);

                const quickAccess = ref([
                    { label: 'quickAccess.spa', icon: '<path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"></path><circle cx="12" cy="10" r="3"></circle>' },
                    { label: 'quickAccess.pool', icon: '<path d="M2 12h20M2 18c2-1 4 1 6 0s4 1 6 0 4 1 6 0"></path>' },
                    { label: 'quickAccess.gym', icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>' },
                    { label: 'quickAccess.dining', icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>' },
                    { label: 'quickAccess.lounge', icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>' },
                    { label: 'quickAccess.business', icon: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>' }
                ]);

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

                const openLightbox = (src) => {
                    lightboxImage.value = src;
                    lightboxOpen.value = true;
                    document.body.style.overflow = 'hidden';
                };

                const closeLightbox = () => {
                    lightboxOpen.value = false;
                    document.body.style.overflow = '';
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
                    }, 1500);

                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            if (lightboxOpen.value) closeLightbox();
                            if (mobileMenuOpen.value) closeMobileMenu();
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
                    services,
                    galleryItems,
                    experiences,
                    testimonials,
                    quickAccess,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu,
                    openLightbox,
                    closeLightbox
                };
            }
        }).mount('#app');
    