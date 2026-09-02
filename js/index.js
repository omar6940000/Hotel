
        const { createApp, ref, computed, onMounted, watch } = Vue;

        const translations = {
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
                const lang = ref('ar');

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
                    return value || '';
                };

                const toggleLanguage = () => {};

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
    