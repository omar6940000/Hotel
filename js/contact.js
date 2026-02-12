
        const { createApp, ref, onMounted } = Vue;
        const translations = {
            en: {
                nav: {
                    home: 'Home',
                    rooms: 'Suites',
                    services: 'Services',
                    gallery: 'Gallery',
                    about: 'About',
                    contact: 'Contact',
                    experiences: 'Experiences',
                    book: 'Book Now'
                },
                hero: {
                    label: 'Reviews & Contact',
                    title: 'Hear From Our Guests & Get in Touch',
                    description: 'Discover what makes Serenity Palace exceptional through the words of our guests, and let us assist you with any inquiries.',
                    scroll: 'Explore'
                },
                stats: {
                    reviews: 'Guest Reviews',
                    satisfaction: 'Satisfaction Rate',
                    rating: 'Average Rating',
                    support: 'Support Available'
                },
                featured: {
                    badge: 'Featured Review',
                    text: 'Our stay at Serenity Palace was nothing short of extraordinary. From the moment we arrived, we were treated like royalty. The attention to detail, the impeccable service, and the stunning suites exceeded all our expectations. This is truly what luxury hospitality should be.',
                    author: 'James & Victoria Sterling',
                    location: 'London, United Kingdom'
                },
                reviews: {
                    label: 'Guest Experiences',
                    title: 'What Our Guests Say',
                    description: 'Real stories from guests who have experienced the Serenity Palace difference.',
                    r1: {
                        text: 'The Presidential Suite was absolutely magnificent. Every detail was perfect, from the Egyptian cotton sheets to the breathtaking views. The butler service made us feel like royalty.',
                        room: 'Presidential Suite'
                    },
                    r2: {
                        text: 'An unforgettable anniversary celebration. The staff went above and beyond to make our stay special. The spa treatments were divine and the dining experience was world-class.',
                        room: 'Royal Suite'
                    },
                    r3: {
                        text: 'As a business traveler, I appreciate efficiency and comfort. Serenity Palace delivers both flawlessly. The Executive Lounge is perfect for meetings and the WiFi is lightning fast.',
                        room: 'Executive Suite'
                    },
                    r4: {
                        text: 'The honeymoon suite was pure romance. Rose petals, champagne on arrival, and the most comfortable bed we have ever slept in. We will definitely return for our anniversary.',
                        room: 'Honeymoon Suite'
                    },
                    r5: {
                        text: 'Traveling with family can be challenging, but Serenity Palace made it effortless. The kids loved the pool, and we loved the peace and quiet of our garden suite.',
                        room: 'Garden Suite'
                    },
                    r6: {
                        text: 'I have stayed at many luxury hotels around the world, but Serenity Palace stands out. The combination of modern amenities and classic elegance is perfectly balanced.',
                        room: 'Grand Deluxe Suite'
                    }
                },
                testimonials: {
                    label: 'Testimonials',
                    title: 'Voices of Excellence',
                    t1: {
                        text: 'Every moment at Serenity Palace felt like a dream. The staff remembered our preferences from our last visit two years ago. That level of personalization is rare and precious.'
                    },
                    t2: {
                        text: 'The culinary experience alone is worth the visit. Chef Laurent created a private dining experience that we will never forget. Pure artistry on every plate.'
                    },
                    t3: {
                        text: 'From the airport pickup to the farewell, every interaction was warm and professional. Serenity Palace sets the standard for luxury hospitality.'
                    }
                },
                contact: {
                    label: 'Get in Touch',
                    title: 'We Would Love to Hear From You',
                    description: 'Whether you have questions about our services, want to make a reservation, or simply wish to share your feedback, our team is here to assist you.',
                    address: {
                        title: 'Our Location',
                        line1: 'Premium District, Downtown',
                        line2: 'Dubai, United Arab Emirates'
                    },
                    phone: {
                        title: 'Phone Numbers'
                    },
                    email: {
                        title: 'Email Addresses'
                    },
                    hours: {
                        title: 'Working Hours',
                        reception: 'Reception: 24/7',
                        concierge: 'Concierge: 24/7'
                    }
                },
                form: {
                    title: 'Send Us a Message',
                    subtitle: 'Fill out the form below and we will get back to you shortly.',
                    name: 'Full Name',
                    namePlaceholder: 'Enter your full name',
                    email: 'Email Address',
                    emailPlaceholder: 'Enter your email',
                    phone: 'Phone Number',
                    phonePlaceholder: 'Enter your phone number',
                    subject: 'Subject',
                    subjectPlaceholder: 'Select a subject',
                    subjects: {
                        reservation: 'Reservation Inquiry',
                        inquiry: 'General Inquiry',
                        feedback: 'Feedback & Suggestions',
                        partnership: 'Business Partnership',
                        other: 'Other'
                    },
                    message: 'Your Message',
                    messagePlaceholder: 'Write your message here...',
                    submit: 'Send Message',
                    reset: 'Clear Form'
                },
                map: {
                    title: 'Visit Us',
                    description: 'Located in the heart of Dubai\'s prestigious Premium District, Serenity Palace offers easy access to the city\'s finest attractions.',
                    directions: 'Get Directions'
                },
                cta: {
                    label: 'Ready for Luxury?',
                    title: 'Experience Serenity Palace Today',
                    description: 'Book your exceptional stay or contact us for personalized assistance.',
                    bookNow: 'Book Your Stay',
                    callUs: 'Call Us Now'
                },
                modal: {
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out to Serenity Palace. Our team will review your message and respond within 24 hours.',
                    btn: 'Close'
                },
                footer: {
                    description: 'A sanctuary of refined luxury where impeccable service meets timeless elegance.',
                    explore: 'Explore',
                    information: 'Information',
                    contactUs: 'Contact Us',
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
                const lang = ref(localStorage.getItem('lang') || 'en');
                const form = ref({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                const reviews = ref([
                    { text: 'reviews.r1.text', room: 'reviews.r1.room', author: 'Alexander & Sofia Chen', location: 'Singapore', source: 'TripAdvisor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
                    { text: 'reviews.r2.text', room: 'reviews.r2.room', author: 'Emma & William Taylor', location: 'New York, USA', source: 'Google', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
                    { text: 'reviews.r3.text', room: 'reviews.r3.room', author: 'Robert Mitchell', location: 'Toronto, Canada', source: 'Booking.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
                    { text: 'reviews.r4.text', room: 'reviews.r4.room', author: 'أحمد ونور الراشد', location: 'Dubai, UAE', source: 'TripAdvisor', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
                    { text: 'reviews.r5.text', room: 'reviews.r5.room', author: 'The Johnson Family', location: 'Sydney, Australia', source: 'Expedia', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
                    { text: 'reviews.r6.text', room: 'reviews.r6.room', author: 'Marie Laurent', location: 'Paris, France', source: 'Google', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' }
                ]);
                const testimonials = ref([
                    { text: 'testimonials.t1.text', author: 'Victoria & James Sterling', location: 'London, UK' },
                    { text: 'testimonials.t2.text', author: 'Dr. Michael Chen', location: 'Hong Kong' },
                    { text: 'testimonials.t3.text', author: 'Sarah & David Thompson', location: 'Los Angeles, USA' }
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
    