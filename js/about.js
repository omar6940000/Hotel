
        const { createApp, ref, onMounted } = Vue;

        const translations = {
            en: {
                nav: {
                    home: 'Home',
                    rooms: 'Suites',
                    dining: 'Dining',
                    spa: 'Wellness',
                    about: 'About',
                    experiences: 'Experiences',
                    contact: 'Contact',
                    book: 'Book Now'
                },
                hero: {
                    label: 'Since 2009',
                    title: 'Our Story, Your Experience',
                    description: 'A legacy of excellence, where timeless elegance meets unparalleled hospitality. Discover the story behind Serenity Palace.',
                    scroll: 'Discover'
                },
                story: {
                    label: 'Our Heritage',
                    title: 'A Legacy Built on Excellence',
                    text1: 'Founded in 2009, Serenity Palace emerged from a vision to redefine luxury hospitality. What began as a dream has evolved into one of the most prestigious destinations for discerning travelers seeking an extraordinary experience.',
                    text2: 'Every corner of our palace tells a story of meticulous craftsmanship, timeless design, and an unwavering commitment to creating moments that transcend ordinary hospitality. We believe that true luxury lies in the art of anticipating desires and exceeding expectations.',
                    founder: 'Alexander Sterling',
                    founderTitle: 'Founder & Chairman'
                },
                mission: {
                    label: 'Our Purpose',
                    title: 'Guided by Excellence',
                    missionTitle: 'Our Mission',
                    missionText: 'To create transformative experiences that inspire and rejuvenate our guests, delivering personalized luxury that exceeds expectations while honoring the traditions of gracious hospitality.',
                    visionTitle: 'Our Vision',
                    visionText: 'To be the global benchmark for luxury hospitality, where every stay becomes a cherished memory and every guest becomes part of our extended family.'
                },
                values: {
                    label: 'Core Values',
                    title: 'What Defines Us',
                    description: 'These principles guide every interaction and decision, ensuring an exceptional experience for our guests.',
                    excellence: 'Excellence',
                    excellenceText: 'Striving for perfection in every detail, from service to ambiance.',
                    integrity: 'Integrity',
                    integrityText: 'Building trust through transparency and ethical practices.',
                    innovation: 'Innovation',
                    innovationText: 'Embracing new ideas while honoring timeless traditions.',
                    care: 'Genuine Care',
                    careText: 'Creating heartfelt connections with every guest we serve.'
                },
                timeline: {
                    label: 'Our Journey',
                    title: 'Milestones of Excellence',
                    t1: { title: 'The Beginning', text: 'Serenity Palace opens its doors, introducing a new era of luxury hospitality.' },
                    t2: { title: 'First Recognition', text: 'Awarded Best New Luxury Hotel by Travel & Leisure Magazine.' },
                    t3: { title: 'Expansion', text: 'Opening of the renowned Serenity Spa and Wellness Center.' },
                    t4: { title: 'Global Recognition', text: 'Named among the World\'s Top 50 Hotels by Condé Nast Traveler.' },
                    t5: { title: 'Continuing Legacy', text: 'Celebrating 15 years of excellence and over 50,000 guests served.' }
                },
                awards: {
                    label: 'Recognition',
                    title: 'Awards & Accolades',
                    award1: 'TripAdvisor Travelers\' Choice',
                    award2: 'World Luxury Hotel Awards',
                    award3: 'Forbes Travel Guide 5-Star',
                    award4: 'Condé Nast Top 50 Hotels'
                },
                team: {
                    label: 'Leadership',
                    title: 'Meet Our Team',
                    description: 'Dedicated professionals committed to delivering exceptional experiences.',
                    member1: { name: 'Victoria Sterling', role: 'General Manager', bio: '20+ years in luxury hospitality' },
                    member2: { name: 'James Chen', role: 'Director of Operations', bio: 'Expert in guest experience' },
                    member3: { name: 'Sarah Mitchell', role: 'Head of Guest Relations', bio: 'Passionate about creating memories' },
                    member4: { name: 'David Laurent', role: 'Executive Chef', bio: 'Michelin-starred culinary artist' }
                },
                stats: {
                    years: 'Years of Excellence',
                    suites: 'Luxury Suites',
                    guests: 'Happy Guests',
                    awards: 'Awards Won'
                },
                cta: {
                    label: 'Begin Your Journey',
                    title: 'Experience Our Legacy in Luxury',
                    description: 'Let us create an unforgettable experience tailored exclusively for you.',
                    button: 'Book Your Stay'
                },
                footer: {
                    description: 'A sanctuary of refined luxury where impeccable service meets timeless elegance.',
                    explore: 'Explore',
                    information: 'Information',
                    contact: 'Contact Us',
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
                    about: 'من نحن',
                    experiences: 'التجارب',
                    contact: 'تواصل معنا',
                    book: 'احجز الآن'
                },
                hero: {
                    label: 'منذ 2009',
                    title: 'قصتنا، تجربتك',
                    description: 'إرث من التميز، حيث تلتقي الأناقة الخالدة بضيافة لا مثيل لها. اكتشف القصة وراء قصر السكينة.',
                    scroll: 'اكتشف'
                },
                story: {
                    label: 'تراثنا',
                    title: 'إرث مبني على التميز',
                    text1: 'تأسس قصر السكينة في عام 2009، وانبثق من رؤية لإعادة تعريف الضيافة الفاخرة. ما بدأ كحلم تطور ليصبح واحداً من أرقى الوجهات للمسافرين الباحثين عن تجربة استثنائية.',
                    text2: 'كل ركن في قصرنا يروي قصة حرفية دقيقة، تصميم خالد، والتزام راسخ بخلق لحظات تتجاوز الضيافة العادية. نؤمن أن الفخامة الحقيقية تكمن في فن استشعار الرغبات وتجاوز التوقعات.',
                    founder: 'ألكسندر ستيرلينج',
                    founderTitle: 'المؤسس والرئيس'
                },
                mission: {
                    label: 'هدفنا',
                    title: 'مسترشدون بالتميز',
                    missionTitle: 'مهمتنا',
                    missionText: 'خلق تجارب تحويلية تلهم وتجدد شباب ضيوفنا، وتقديم فخامة شخصية تتجاوز التوقعات مع احترام تقاليد الضيافة الكريمة.',
                    visionTitle: 'رؤيتنا',
                    visionText: 'أن نكون المعيار العالمي للضيافة الفاخرة، حيث تصبح كل إقامة ذكرى عزيزة وكل ضيف جزءاً من عائلتنا الممتدة.'
                },
                values: {
                    label: 'قيمنا الأساسية',
                    title: 'ما يميزنا',
                    description: 'هذه المبادئ توجه كل تفاعل وقرار، لضمان تجربة استثنائية لضيوفنا.',
                    excellence: 'التميز',
                    excellenceText: 'السعي للكمال في كل تفصيل، من الخدمة إلى الأجواء.',
                    integrity: 'النزاهة',
                    integrityText: 'بناء الثقة من خلال الشفافية والممارسات الأخلاقية.',
                    innovation: 'الابتكار',
                    innovationText: 'تبني الأفكار الجديدة مع احترام التقاليد الخالدة.',
                    care: 'الرعاية الحقيقية',
                    careText: 'خلق روابط صادقة مع كل ضيف نخدمه.'
                },
                timeline: {
                    label: 'رحلتنا',
                    title: 'محطات التميز',
                    t1: { title: 'البداية', text: 'قصر السكينة يفتح أبوابه، مقدماً حقبة جديدة من الضيافة الفاخرة.' },
                    t2: { title: 'أول تقدير', text: 'حصل على جائزة أفضل فندق فاخر جديد من مجلة ترافيل آند ليجر.' },
                    t3: { title: 'التوسع', text: 'افتتاح مركز سيرينيتي سبا والعافية الشهير.' },
                    t4: { title: 'اعتراف عالمي', text: 'صُنف ضمن أفضل 50 فندقاً في العالم من كوندي ناست ترافلر.' },
                    t5: { title: 'استمرار الإرث', text: 'الاحتفال بـ 15 عاماً من التميز وخدمة أكثر من 50,000 ضيف.' }
                },
                awards: {
                    label: 'التقدير',
                    title: 'الجوائز والتكريمات',
                    award1: 'جائزة اختيار المسافرين',
                    award2: 'جوائز الفنادق الفاخرة العالمية',
                    award3: 'تصنيف 5 نجوم من فوربس',
                    award4: 'أفضل 50 فندق من كوندي ناست'
                },
                team: {
                    label: 'القيادة',
                    title: 'تعرف على فريقنا',
                    description: 'محترفون متفانون ملتزمون بتقديم تجارب استثنائية.',
                    member1: { name: 'فيكتوريا ستيرلينج', role: 'المدير العام', bio: 'أكثر من 20 عاماً في الضيافة الفاخرة' },
                    member2: { name: 'جيمس تشين', role: 'مدير العمليات', bio: 'خبير في تجربة الضيوف' },
                    member3: { name: 'سارة ميتشل', role: 'رئيسة علاقات الضيوف', bio: 'شغوفة بصنع الذكريات' },
                    member4: { name: 'ديفيد لوران', role: 'الشيف التنفيذي', bio: 'فنان طهي حائز على نجمة ميشلان' }
                },
                stats: {
                    years: 'سنوات من التميز',
                    suites: 'جناح فاخر',
                    guests: 'ضيف سعيد',
                    awards: 'جائزة'
                },
                cta: {
                    label: 'ابدأ رحلتك',
                    title: 'اختبر إرثنا في عالم الفخامة',
                    description: 'دعنا نصنع لك تجربة لا تُنسى مخصصة حصرياً لك.',
                    button: 'احجز إقامتك'
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
                const lang = ref(localStorage.getItem('lang') || 'en');

                const values = ref([
                    { 
                        title: 'values.excellence', 
                        text: 'values.excellenceText',
                        icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>'
                    },
                    { 
                        title: 'values.integrity', 
                        text: 'values.integrityText',
                        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'
                    },
                    { 
                        title: 'values.innovation', 
                        text: 'values.innovationText',
                        icon: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>'
                    },
                    { 
                        title: 'values.care', 
                        text: 'values.careText',
                        icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>'
                    }
                ]);

                const timeline = ref([
                    { year: '2009', title: 'timeline.t1.title', text: 'timeline.t1.text' },
                    { year: '2012', title: 'timeline.t2.title', text: 'timeline.t2.text' },
                    { year: '2016', title: 'timeline.t3.title', text: 'timeline.t3.text' },
                    { year: '2020', title: 'timeline.t4.title', text: 'timeline.t4.text' },
                    { year: '2024', title: 'timeline.t5.title', text: 'timeline.t5.text' }
                ]);

                const awards = ref([
                    { title: 'awards.award1', year: '2024 & 2025', icon: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>' },
                    { title: 'awards.award2', year: '2023 - 2025', icon: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>' },
                    { title: 'awards.award3', year: '2022 - 2025', icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>' },
                    { title: 'awards.award4', year: '2020 - 2024', icon: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>' }
                ]);

                const team = ref([
                    { name: 'team.member1.name', role: 'team.member1.role', bio: 'team.member1.bio', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
                    { name: 'team.member2.name', role: 'team.member2.role', bio: 'team.member2.bio', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
                    { name: 'team.member3.name', role: 'team.member3.role', bio: 'team.member3.bio', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
                    { name: 'team.member4.name', role: 'team.member4.role', bio: 'team.member4.bio', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80' }
                ]);

                const t = (key) => {
                    const keys = key.split('.');
                    let value = translations[lang.value];
                    for (const k of keys) {
                        value = value?.[k];
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

                    setTimeout(animateCounters, 1500);

                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && mobileMenuOpen.value) {
                            closeMobileMenu();
                        }
                    });
                });

                return {
                    loading,
                    scrolled,
                    mobileMenuOpen,
                    lang,
                    values,
                    timeline,
                    awards,
                    team,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu
                };
            }
        }).mount('#app');
    