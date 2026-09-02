
        const { createApp, ref, onMounted } = Vue;
        const translations = {
            ar: {
                nav: {
                    home: 'الرئيسية',
                    rooms: 'الأجنحة',
                    services: 'الخدمات',
                    gallery: 'المعرض',
                    about: 'من نحن',
                    contact: 'تواصل معنا',
                    experiences: 'التجارب',
                    book: 'احجز الآن'
                },
                hero: {
                    label: 'آراء الضيوف والتواصل',
                    title: 'استمع لآراء ضيوفنا وتواصل معنا',
                    description: 'اكتشف ما يجعل قصر السكينة استثنائياً من خلال كلمات ضيوفنا، ودعنا نساعدك في أي استفسارات.',
                    scroll: 'استكشف'
                },
                stats: {
                    reviews: 'تقييم الضيوف',
                    satisfaction: 'نسبة الرضا',
                    rating: 'متوسط التقييم',
                    support: 'دعم متاح'
                },
                featured: {
                    badge: 'تقييم مميز',
                    text: 'كانت إقامتنا في قصر السكينة استثنائية بكل المقاييس. من لحظة وصولنا، عوملنا كالملوك. الاهتمام بالتفاصيل، الخدمة المتقنة، والأجنحة المذهلة تجاوزت كل توقعاتنا. هذا هو حقاً ما يجب أن تكون عليه الضيافة الفاخرة.',
                    author: 'جيمس وفيكتوريا ستيرلينج',
                    location: 'لندن، المملكة المتحدة'
                },
                reviews: {
                    label: 'تجارب الضيوف',
                    title: 'ماذا يقول ضيوفنا',
                    description: 'قصص حقيقية من ضيوف عاشوا تجربة قصر السكينة المميزة.',
                    r1: {
                        text: 'الجناح الرئاسي كان رائعاً بشكل مطلق. كل تفصيل كان مثالياً، من ملاءات القطن المصري إلى الإطلالات الخلابة. خدمة الخادم جعلتنا نشعر كالملوك.',
                        room: 'الجناح الرئاسي'
                    },
                    r2: {
                        text: 'احتفال ذكرى زواج لا يُنسى. الفريق تجاوز كل التوقعات لجعل إقامتنا مميزة. علاجات السبا كانت إلهية وتجربة الطعام كانت عالمية المستوى.',
                        room: 'الجناح الملكي'
                    },
                    r3: {
                        text: 'كمسافر أعمال، أقدر الكفاءة والراحة. قصر السكينة يقدم الاثنين بشكل مثالي. صالة رجال الأعمال مثالية للاجتماعات والواي فاي سريع جداً.',
                        room: 'الجناح التنفيذي'
                    },
                    r4: {
                        text: 'جناح شهر العسل كان رومانسياً بحت. بتلات الورد، شامبانيا عند الوصول، وأكثر سرير مريح نمنا فيه. سنعود بالتأكيد لذكرى زواجنا.',
                        room: 'جناح شهر العسل'
                    },
                    r5: {
                        text: 'السفر مع العائلة قد يكون صعباً، لكن قصر السكينة جعله سهلاً. الأطفال أحبوا المسبح، ونحن أحببنا هدوء جناح الحديقة.',
                        room: 'جناح الحديقة'
                    },
                    r6: {
                        text: 'أقمت في فنادق فاخرة كثيرة حول العالم، لكن قصر السكينة يتميز. الجمع بين وسائل الراحة الحديثة والأناقة الكلاسيكية متوازن بشكل مثالي.',
                        room: 'جناح جراند ديلوكس'
                    }
                },
                testimonials: {
                    label: 'شهادات',
                    title: 'أصوات التميز',
                    t1: {
                        text: 'كل لحظة في قصر السكينة بدت كالحلم. الفريق تذكر تفضيلاتنا من زيارتنا الأخيرة قبل عامين. هذا المستوى من التخصيص نادر وثمين.'
                    },
                    t2: {
                        text: 'تجربة الطهي وحدها تستحق الزيارة. الشيف لوران أبدع تجربة طعام خاصة لن ننساها أبداً. فن خالص في كل طبق.'
                    },
                    t3: {
                        text: 'من الاستقبال في المطار إلى الوداع، كل تفاعل كان دافئاً ومحترفاً. قصر السكينة يضع المعيار للضيافة الفاخرة.'
                    }
                },
                contact: {
                    label: 'تواصل معنا',
                    title: 'يسعدنا التواصل معك',
                    description: 'سواء كان لديك أسئلة عن خدماتنا، تريد حجز إقامة، أو ترغب ببساطة في مشاركة ملاحظاتك، فريقنا هنا لمساعدتك.',
                    address: {
                        title: 'موقعنا',
                        line1: 'الحي المتميز، وسط المدينة',
                        line2: 'دبي، الإمارات العربية المتحدة'
                    },
                    phone: {
                        title: 'أرقام الهاتف'
                    },
                    email: {
                        title: 'البريد الإلكتروني'
                    },
                    hours: {
                        title: 'ساعات العمل',
                        reception: 'الاستقبال: على مدار الساعة',
                        concierge: 'الكونسيرج: على مدار الساعة'
                    }
                },
                form: {
                    title: 'أرسل لنا رسالة',
                    subtitle: 'املأ النموذج أدناه وسنرد عليك قريباً.',
                    name: 'الاسم الكامل',
                    namePlaceholder: 'أدخل اسمك الكامل',
                    email: 'البريد الإلكتروني',
                    emailPlaceholder: 'أدخل بريدك الإلكتروني',
                    phone: 'رقم الهاتف',
                    phonePlaceholder: 'أدخل رقم هاتفك',
                    subject: 'الموضوع',
                    subjectPlaceholder: 'اختر موضوعاً',
                    subjects: {
                        reservation: 'استفسار عن الحجز',
                        inquiry: 'استفسار عام',
                        feedback: 'ملاحظات واقتراحات',
                        partnership: 'شراكة تجارية',
                        other: 'أخرى'
                    },
                    message: 'رسالتك',
                    messagePlaceholder: 'اكتب رسالتك هنا...',
                    submit: 'إرسال الرسالة',
                    reset: 'مسح النموذج'
                },
                map: {
                    title: 'زرنا',
                    description: 'يقع في قلب الحي المتميز في دبي، يوفر قصر السكينة سهولة الوصول إلى أرقى معالم المدينة.',
                    directions: 'احصل على الاتجاهات'
                },
                cta: {
                    label: 'جاهز للفخامة؟',
                    title: 'اختبر قصر السكينة اليوم',
                    description: 'احجز إقامتك الاستثنائية أو تواصل معنا للمساعدة الشخصية.',
                    bookNow: 'احجز إقامتك',
                    callUs: 'اتصل بنا الآن'
                },
                modal: {
                    title: 'تم إرسال الرسالة!',
                    text: 'شكراً لتواصلك مع قصر السكينة. سيراجع فريقنا رسالتك ويرد خلال 24 ساعة.',
                    btn: 'إغلاق'
                },
                footer: {
                    description: 'ملاذ من الفخامة الراقية حيث تلتقي الخدمة المتقنة بالأناقة الخالدة.',
                    explore: 'استكشف',
                    information: 'معلومات',
                    contactUs: 'تواصل معنا',
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
                const showModal = ref(false);
                const lang = ref('ar');
                const form = ref({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                const reviews = ref([
                    { text: 'reviews.r1.text', room: 'reviews.r1.room', author: 'ألكسندر وصوفيا تشين', location: 'سنغافورة', source: 'تريب أدفايزر', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
                    { text: 'reviews.r2.text', room: 'reviews.r2.room', author: 'إيما وويليام تايلور', location: 'نيويورك، الولايات المتحدة', source: 'جوجل', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
                    { text: 'reviews.r3.text', room: 'reviews.r3.room', author: 'روبرت ميتشل', location: 'تورونتو، كندا', source: 'بوكينج', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
                    { text: 'reviews.r4.text', room: 'reviews.r4.room', author: 'أحمد ونور الراشد', location: 'دبي، الإمارات', source: 'تريب أدفايزر', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
                    { text: 'reviews.r5.text', room: 'reviews.r5.room', author: 'عائلة جونسون', location: 'سيدني، أستراليا', source: 'إكسبيديا', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
                    { text: 'reviews.r6.text', room: 'reviews.r6.room', author: 'ماري لوران', location: 'باريس، فرنسا', source: 'جوجل', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' }
                ]);
                const testimonials = ref([
                    { text: 'testimonials.t1.text', author: 'فيكتوريا وجيمس ستيرلينج', location: 'لندن، المملكة المتحدة' },
                    { text: 'testimonials.t2.text', author: 'د. مايكل تشين', location: 'هونغ كونغ' },
                    { text: 'testimonials.t3.text', author: 'سارة وديفيد تومسون', location: 'لوس أنجلوس، الولايات المتحدة' }
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
                const submitForm = () => {
                    showModal.value = true;
                    document.body.style.overflow = 'hidden';
                    // Reset form
                    form.value = {
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    };
                };
                const resetForm = () => {
                    form.value = {
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    };
                };
                const closeModal = () => {
                    showModal.value = false;
                    document.body.style.overflow = '';
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
                        // Testimonials Swiper
                        new Swiper('.testimonials-swiper', {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            speed: 1200,
                            loop: true,
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false
                            },
                            pagination: {
                                el: '.testimonials-pagination',
                                clickable: true
                            },
                            navigation: {
                                nextEl: '.testimonials-next',
                                prevEl: '.testimonials-prev'
                            }
                        });
                        animateCounters();
                    }, 1500);
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            if (mobileMenuOpen.value) closeMobileMenu();
                            if (showModal.value) closeModal();
                        }
                    });
                });
                return {
                    loading,
                    scrolled,
                    mobileMenuOpen,
                    showModal,
                    lang,
                    form,
                    reviews,
                    testimonials,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu,
                    submitForm,
                    resetForm,
                    closeModal
                };
            }
        }).mount('#app');
    