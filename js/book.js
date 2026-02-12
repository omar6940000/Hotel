
        const { createApp, ref, computed, onMounted, watch } = Vue;

        const translations = {
            en: {
                nav: {
                    home: 'Home',
                    rooms: 'Suites',
                    dining: 'Dining',
                    spa: 'Wellness',
                    experiences: 'Experiences',
                    contact: 'Contact',
                    book: 'Book Now'
                },
                hero: {
                    title: 'Reserve Your Exceptional Stay',
                    description: 'Experience unparalleled luxury and personalized service. Your journey to extraordinary begins here.'
                },
                trust: {
                    secure: 'Secure Payment',
                    rated: '5-Star Rated',
                    support: '24/7 Support',
                    confirm: 'Instant Confirmation'
                },
                form: {
                    stayDetails: 'Stay Details',
                    checkIn: 'Check-in Date',
                    checkOut: 'Check-out Date',
                    selectDate: 'Select date',
                    guests: 'Number of Guests',
                    guest: 'Guest',
                    guestsLabel: 'Guests',
                    roomType: 'Suite Type',
                    night: 'night',
                    guestInfo: 'Guest Information',
                    fullName: 'Full Name',
                    enterName: 'Enter your full name',
                    email: 'Email Address',
                    enterEmail: 'Enter your email',
                    phone: 'Phone Number',
                    enterPhone: 'Enter your phone number',
                    country: 'Country',
                    selectCountry: 'Select your country',
                    requests: 'Special Requests',
                    enterRequests: 'Any special requests or preferences...',
                    extras: 'Enhance Your Stay',
                    payment: 'Payment Method'
                },
                extras: {
                    airport: 'Airport Pickup',
                    breakfast: 'Daily Breakfast',
                    spa: 'Spa Access'
                },
                payment: {
                    card: 'Credit Card',
                    hotel: 'Pay at Hotel',
                    cardNumber: 'Card Number',
                    expiry: 'Expiry Date',
                    cvv: 'CVV',
                    cardName: 'Cardholder Name',
                    nameOnCard: 'Name on card'
                },
                countries: {
                    ae: 'United Arab Emirates',
                    sa: 'Saudi Arabia',
                    us: 'United States',
                    uk: 'United Kingdom',
                    fr: 'France',
                    de: 'Germany',
                    other: 'Other'
                },
                rooms: {
                    presidential: 'Presidential Suite',
                    royal: 'Royal Suite',
                    grand: 'Grand Deluxe Suite',
                    executive: 'Executive Suite',
                    honeymoon: 'Honeymoon Suite',
                    garden: 'Garden Suite'
                },
                views: {
                    city: 'City View',
                    sea: 'Sea View',
                    garden: 'Garden View'
                },
                summary: {
                    title: 'Booking Summary',
                    subtitle: 'Your reservation details',
                    checkIn: 'Check-in',
                    checkOut: 'Check-out',
                    nights: 'Duration',
                    nightsLabel: 'nights',
                    roomRate: 'Room Rate',
                    subtotal: 'Subtotal',
                    tax: 'Taxes & Fees',
                    total: 'Total',
                    note: 'Includes all taxes and fees',
                    confirm: 'Confirm Reservation',
                    secure: 'Secure & Encrypted'
                },
                modal: {
                    title: 'Reservation Confirmed!',
                    text: 'Thank you for choosing Serenity Palace. A confirmation email has been sent to your email address with all the details of your stay.',
                    refLabel: 'Confirmation Number',
                    btn: 'Back to Home'
                },
                footer: {
                    description: 'A sanctuary of refined luxury where impeccable service meets timeless elegance.',
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
                    book: 'احجز الآن'
                },
                hero: {
                    title: 'احجز إقامتك الاستثنائية',
                    description: 'استمتع بفخامة لا مثيل لها وخدمة شخصية متميزة. رحلتك نحو التميز تبدأ هنا.'
                },
                trust: {
                    secure: 'دفع آمن',
                    rated: 'تقييم 5 نجوم',
                    support: 'دعم على مدار الساعة',
                    confirm: 'تأكيد فوري'
                },
                form: {
                    stayDetails: 'تفاصيل الإقامة',
                    checkIn: 'تاريخ الوصول',
                    checkOut: 'تاريخ المغادرة',
                    selectDate: 'اختر التاريخ',
                    guests: 'عدد الضيوف',
                    guest: 'ضيف',
                    guestsLabel: 'ضيوف',
                    roomType: 'نوع الجناح',
                    night: 'ليلة',
                    guestInfo: 'معلومات الضيف',
                    fullName: 'الاسم الكامل',
                    enterName: 'أدخل اسمك الكامل',
                    email: 'البريد الإلكتروني',
                    enterEmail: 'أدخل بريدك الإلكتروني',
                    phone: 'رقم الهاتف',
                    enterPhone: 'أدخل رقم هاتفك',
                    country: 'الدولة',
                    selectCountry: 'اختر دولتك',
                    requests: 'طلبات خاصة',
                    enterRequests: 'أي طلبات أو تفضيلات خاصة...',
                    extras: 'حسّن إقامتك',
                    payment: 'طريقة الدفع'
                },
                extras: {
                    airport: 'استقبال من المطار',
                    breakfast: 'إفطار يومي',
                    spa: 'دخول السبا'
                },
                payment: {
                    card: 'بطاقة ائتمان',
                    hotel: 'الدفع في الفندق',
                    cardNumber: 'رقم البطاقة',
                    expiry: 'تاريخ الانتهاء',
                    cvv: 'CVV',
                    cardName: 'اسم حامل البطاقة',
                    nameOnCard: 'الاسم على البطاقة'
                },
                countries: {
                    ae: 'الإمارات العربية المتحدة',
                    sa: 'المملكة العربية السعودية',
                    us: 'الولايات المتحدة',
                    uk: 'المملكة المتحدة',
                    fr: 'فرنسا',
                    de: 'ألمانيا',
                    other: 'أخرى'
                },
                rooms: {
                    presidential: 'الجناح الرئاسي',
                    royal: 'الجناح الملكي',
                    grand: 'جناح جراند ديلوكس',
                    executive: 'الجناح التنفيذي',
                    honeymoon: 'جناح شهر العسل',
                    garden: 'جناح الحديقة'
                },
                views: {
                    city: 'إطلالة المدينة',
                    sea: 'إطلالة البحر',
                    garden: 'إطلالة الحديقة'
                },
                summary: {
                    title: 'ملخص الحجز',
                    subtitle: 'تفاصيل حجزك',
                    checkIn: 'الوصول',
                    checkOut: 'المغادرة',
                    nights: 'المدة',
                    nightsLabel: 'ليالي',
                    roomRate: 'سعر الغرفة',
                    subtotal: 'المجموع الفرعي',
                    tax: 'الضرائب والرسوم',
                    total: 'الإجمالي',
                    note: 'شامل جميع الضرائب والرسوم',
                    confirm: 'تأكيد الحجز',
                    secure: 'آمن ومشفر'
                },
                modal: {
                    title: 'تم تأكيد الحجز!',
                    text: 'شكراً لاختيارك فندق قصر السكينة. تم إرسال بريد تأكيد إلى عنوان بريدك الإلكتروني مع جميع تفاصيل إقامتك.',
                    refLabel: 'رقم التأكيد',
                    btn: 'العودة للرئيسية'
                },
                footer: {
                    description: 'ملاذ من الفخامة الراقية حيث تلتقي الخدمة المتقنة بالأناقة الخالدة.',
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
                const showModal = ref(false);
                const bookingRef = ref('');
                const lang = ref(localStorage.getItem('lang') || 'en');

                const rooms = ref([
                    { id: 1, name: 'rooms.presidential', price: 3500, size: 250, guests: 6, view: 'views.city', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80' },
                    { id: 2, name: 'rooms.royal', price: 1800, size: 150, guests: 4, view: 'views.city', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80' },
                    { id: 3, name: 'rooms.grand', price: 850, size: 85, guests: 2, view: 'views.city', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80' },
                    { id: 4, name: 'rooms.executive', price: 650, size: 70, guests: 2, view: 'views.city', image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80' },
                    { id: 5, name: 'rooms.honeymoon', price: 1200, size: 100, guests: 2, view: 'views.sea', image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80' },
                    { id: 6, name: 'rooms.garden', price: 550, size: 65, guests: 2, view: 'views.garden', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' }
                ]);

                const booking = ref({
                    checkIn: '',
                    checkOut: '',
                    guests: '2',
                    roomType: 2,
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    requests: '',
                    extras: {
                        airport: false,
                        breakfast: false,
                        spa: false
                    },
                    paymentMethod: 'card',
                    cardNumber: '',
                    cardExpiry: '',
                    cardCvv: '',
                    cardName: ''
                });

                const t = (key) => {
                    const keys = key.split('.');
                    let value = translations[lang.value];
                    for (const k of keys) {
                        value = value?.[k];
                    }
                    return value || key;
                };

                const selectedRoom = computed(() => {
                    return rooms.value.find(r => r.id === booking.value.roomType) || rooms.value[0];
                });

                const nights = computed(() => {
                    if (!booking.value.checkIn || !booking.value.checkOut) return 1;
                    const checkIn = new Date(booking.value.checkIn);
                    const checkOut = new Date(booking.value.checkOut);
                    const diff = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
                    return diff > 0 ? diff : 1;
                });

                const subtotal = computed(() => {
                    let total = selectedRoom.value.price * nights.value;
                    if (booking.value.extras.airport) total += 75;
                    if (booking.value.extras.breakfast) total += 45 * nights.value;
                    if (booking.value.extras.spa) total += 120;
                    return total;
                });

                const tax = computed(() => Math.round(subtotal.value * 0.1));
                const total = computed(() => subtotal.value + tax.value);

                const isFormValid = computed(() => {
                    return booking.value.checkIn && 
                           booking.value.checkOut && 
                           booking.value.name && 
                           booking.value.email && 
                           booking.value.phone;
                });

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
                            initDatepickers();
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

                const generateRef = () => {
                    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                    let ref = 'SP-';
                    for (let i = 0; i < 8; i++) {
                        ref += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    return ref;
                };

                const confirmBooking = () => {
                    if (!isFormValid.value) return;
                    bookingRef.value = generateRef();
                    showModal.value = true;
                    document.body.style.overflow = 'hidden';
                };

                const closeModal = () => {
                    showModal.value = false;
                    document.body.style.overflow = '';
                    window.location.href = 'index.html';
                };

                let checkinPicker, checkoutPicker;

                const initDatepickers = () => {
                    const locale = lang.value === 'ar' ? {
                        weekdays: {
                            shorthand: ['أحد', 'إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'],
                            longhand: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
                        },
                        months: {
                            shorthand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                            longhand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
                        }
                    } : null;

                    if (checkinPicker) checkinPicker.destroy();
                    if (checkoutPicker) checkoutPicker.destroy();

                    checkinPicker = flatpickr('#checkin', {
                        minDate: 'today',
                        dateFormat: 'Y-m-d',
                        locale: locale,
                        onChange: (dates) => {
                            if (dates[0]) {
                                booking.value.checkIn = dates[0].toISOString().split('T')[0];
                                checkoutPicker.set('minDate', dates[0]);
                            }
                        }
                    });

                    checkoutPicker = flatpickr('#checkout', {
                        minDate: 'today',
                        dateFormat: 'Y-m-d',
                        locale: locale,
                        onChange: (dates) => {
                            if (dates[0]) {
                                booking.value.checkOut = dates[0].toISOString().split('T')[0];
                            }
                        }
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
                      .to('.hero-title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
                      .to('.hero-description', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
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
                        duration: 800,
                        once: true,
                        easing: 'ease-out-cubic',
                        offset: 50
                    });

                    setTimeout(initDatepickers, 100);

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
                    bookingRef,
                    lang,
                    rooms,
                    booking,
                    selectedRoom,
                    nights,
                    subtotal,
                    tax,
                    total,
                    isFormValid,
                    t,
                    toggleLanguage,
                    toggleMobileMenu,
                    closeMobileMenu,
                    confirmBooking,
                    closeModal
                };
            }
        }).mount('#app');
    