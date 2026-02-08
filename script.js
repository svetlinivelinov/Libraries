// Makeup Artist Website JavaScript

// Translation object
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-featured': 'Featured Work',
        'nav-services': 'Services',
        'nav-faq': 'FAQ',
        'nav-contact': 'Contact',
        'hero-title': 'Transform Your Beauty',
        'hero-tagline': 'Professional makeup artistry for every occasion - from natural elegance to glamorous transformations',
        'hero-cta': 'Book Your Session',
        'featured-title': 'Featured Work',
        'featured-subtitle': 'Showcasing our signature styles and transformations',
        'services-title': 'Our Services',
        'services-subtitle': 'Complete range of makeup services for every occasion',
        'faq-title': 'Frequently Asked Questions',
        'faq-subtitle': 'Everything you need to know about our services',
        'contact-title': 'Get In Touch',
        'hours-title': 'Studio Hours',
        'hours-weekdays': 'Monday - Friday: 9:00 AM - 7:00 PM',
        'hours-saturday': 'Saturday: 8:00 AM - 6:00 PM',
        'hours-sunday': 'Sunday: 10:00 AM - 4:00 PM',
        'hours-note': 'Evening and weekend appointments available by request',
        'bridal-makeup': 'Bridal Makeup',
        'editorial-glam': 'Editorial Glam',
        'natural-look': 'Natural Look',
        'evening-glam': 'Evening Glam',
        'special-effects': 'Special Effects',
        'prom-graduation': 'Prom & Graduation',
        'whats-included': "What's Included & Price",
        'book-now': 'Book Now',
        'learn-more': 'Learn More',
        'bridal-description': 'Timeless and romantic looks perfect for your special day. Includes trial session and day-of touch-ups.',
        'editorial-description': 'Bold and artistic looks for photoshoots, fashion shows, and events that demand attention.',
        'natural-description': 'Enhance your natural beauty with our signature "no-makeup makeup" look for everyday elegance.',
        'evening-description': 'Sophisticated and glamorous looks perfect for galas, red carpet events, and special evenings.',
        'effects-description': 'Creative and artistic makeup for themed events, Halloween, theatrical productions, and avant-garde looks.',
        'prom-description': 'Age-appropriate glamour for prom, graduation, and other milestone celebrations.',
        'carousel1-title': 'Bridal Elegance',
        'carousel1-text': 'Timeless and romantic looks that make your special day unforgettable. Our bridal packages include trial sessions and touch-ups.',
        'carousel2-title': 'Editorial Glam',
        'carousel2-text': 'Bold and artistic looks perfect for photoshoots, fashion shows, and special events that demand attention.',
        'carousel3-title': 'Natural Beauty',
        'carousel3-text': 'Enhance your natural features with our signature "no-makeup makeup" look perfect for everyday elegance.',
        'faq1-question': 'How long does a makeup session take?',
        'faq1-intro': 'Session duration varies by service:',
        'faq1-natural': 'Natural/Everyday Look:',
        'faq1-event': 'Special Event/Party:',
        'faq1-bridal': 'Bridal Makeup:',
        'faq1-editorial': 'Editorial/Fashion:',
        'faq1-note': 'We recommend scheduling extra time for consultations and touch-ups.',
        'faq2-question': 'Do you travel to clients?',
        'faq2-intro': 'Yes! We offer on-location services within a 30-mile radius. Travel fees apply based on distance:',
        'faq2-close': '0-10 miles:',
        'faq2-medium': '10-20 miles:',
        'faq2-far': '20-30 miles:',
        'faq2-note': 'For destinations beyond 30 miles, please contact us for a custom quote. We also have a fully equipped studio available for appointments.',
        'faq3-question': 'What products do you use?',
        'faq3-intro': 'We use only professional, high-quality makeup brands including:',
        'faq3-foundation': 'Foundation & Base:',
        'faq3-eyes': 'Eyes:',
        'faq3-lips': 'Lips:',
        'faq3-effects': 'Special Effects:',
        'faq3-note': 'All products are hypoallergenic and regularly sanitized. We can accommodate sensitive skin and specific brand preferences upon request.',
        'faq4-question': 'How far in advance should I book?',
        'faq4-intro': 'We recommend booking as early as possible to secure your preferred date and time:',
        'faq4-bridal': 'Bridal Services:',
        'faq4-events': 'Special Events:',
        'faq4-regular': 'Regular Sessions:',
        'faq4-note': 'However, we often accommodate last-minute bookings based on availability. Contact us to check our current schedule!',
        'copyright': '© 2026 Elegant Makeup. All rights reserved.'
    },
    bg: {
        'nav-home': 'Начало',
        'nav-featured': 'Избрани Работи',
        'nav-services': 'Услуги',
        'nav-faq': 'Въпроси',
        'nav-contact': 'Контакт',
        'hero-title': 'Преобрази Красотата Си',
        'hero-tagline': 'Професионален грим за всеки повод - от естествена елегантност до гламурни трансформации',
        'hero-cta': 'Запази Час',
        'featured-title': 'Избрани Работи',
        'featured-subtitle': 'Показваме нашите характерни стилове и трансформации',
        'services-title': 'Нашите Услуги',
        'services-subtitle': 'Пълна гама от услуги за грим за всеки повод',
        'faq-title': 'Често Задавани Въпроси',
        'faq-subtitle': 'Всичко, което трябва да знаете за нашите услуги',
        'contact-title': 'Свържете се с нас',
        'hours-title': 'Работно време',
        'hours-weekdays': 'Понеделник - Петък: 9:00 - 19:00',
        'hours-saturday': 'Събота: 8:00 - 18:00',
        'hours-sunday': 'Неделя: 10:00 - 16:00',
        'hours-note': 'Вечерни и уикенд срещи по заявка',
        'bridal-makeup': 'Булчински Грим',
        'editorial-glam': 'Артистичен Грим',
        'natural-look': 'Естествен Вид',
        'evening-glam': 'Вечерен Грим',
        'special-effects': 'Специални Ефекти',
        'prom-graduation': 'Бал и Дипломиране',
        'whats-included': 'Какво включва & Цена',
        'book-now': 'Запази сега',
        'learn-more': 'Научи повече',
        'bridal-description': 'Вечни и романтични визии, перфектни за вашия специален ден. Включва пробен сеанс и поправки.',
        'editorial-description': 'Смели и артистични визии за фотосесии, модни шоута и събития, които привличат внимание.',
        'natural-description': 'Подчертайте естествената си красота с нашия характерен "без грим" вид за ежедневна елегантност.',
        'evening-description': 'Изискани и гламурни визии, перфектни за галавечери, червен килим и специални вечери.',
        'effects-description': 'Креативен и артистичен грим за тематични събития, Хелоуин, театрални продукции и авангардни визии.',
        'prom-description': 'Подходящ гламур за бал, дипломиране и други важни празненства.',
        'carousel1-title': 'Булчинска Елегантност',
        'carousel1-text': 'Вечни и романтични визии, които правят специалния ви ден незабравим. Нашите булчински пакети включват пробни сесии и поправки.',
        'carousel2-title': 'Артистичен Гламур',
        'carousel2-text': 'Смели и артистични визии, перфектни за фотосесии, модни шоута и специални събития, които изискват внимание.',
        'carousel3-title': 'Естествена Красота',
        'carousel3-text': 'Подчертайте естествените си черти с нашия фирмен "без-грим грим", перфектен за ежедневна елегантност.',
        'faq1-question': 'Колко време отнема една сесия за грим?',
        'faq1-intro': 'Продължителността на сесията варира според услугата:',
        'faq1-natural': 'Естествен/Ежедневен Вид:',
        'faq1-event': 'Специално Събитие/Парти:',
        'faq1-bridal': 'Булчински Грим:',
        'faq1-editorial': 'Артистичен/Модни:',
        'faq1-note': 'Препоръчваме да заделите допълнително време за консултации и поправки.',
        'faq2-question': 'Пътувате ли до клиентите?',
        'faq2-intro': 'Да! Предлагаме услуги на локация в радиус от 50 км. Таксите за пътуване зависят от разстоянието:',
        'faq2-close': '0-15 км:',
        'faq2-medium': '15-30 км:',
        'faq2-far': '30-50 км:',
        'faq2-note': 'За дестинации над 50 км, моля свържете се с нас за индивидуална оферта. Разполагаме и с напълно оборудвано студио за срещи.',
        'faq3-question': 'Какви продукти използвате?',
        'faq3-intro': 'Използваме само професионални, висококачествени марки грим, включително:',
        'faq3-foundation': 'Фон дьо тен & База:',
        'faq3-eyes': 'Очи:',
        'faq3-lips': 'Устни:',
        'faq3-effects': 'Специални Ефекти:',
        'faq3-note': 'Всички продукти са хипоалергенни и редовно дезинфекцирани. Можем да се приспособим към чувствителна кожа и специфични предпочитания за марки при заявка.',
        'faq4-question': 'Колко време предварително трябва да резервирам?',
        'faq4-intro': 'Препоръчваме да резервирате възможно най-рано, за да осигурите предпочитаната дата и час:',
        'faq4-bridal': 'Булчински Услуги:',
        'faq4-events': 'Специални События:',
        'faq4-regular': 'Редовни Сесии:',
        'faq4-note': 'Въпреки това, често можем да поемем резервации в последния момент според наличността. Свържете се с нас, за да проверите текущия ни график!',
        'copyright': '© 2026 Елегант Грим. Всички права запазени.'
    }
};

// Current language state
let currentLanguage = 'en';

// Makeup styles data array
const makeupStyles = [
    {
        id: 1,
        title: "Bridal Makeup",
        description: "Timeless and romantic looks perfect for your special day. Includes trial session and day-of touch-ups.",
        image: "images/1 (1).png",
        price: "$150 - $250",
        features: ["Trial session included", "4-hour wear guarantee", "Touch-up kit", "Consultation"]
    },
    {
        id: 2,
        title: "Editorial Glam",
        description: "Bold and artistic looks for photoshoots, fashion shows, and events that demand attention.",
        image: "images/1 (2).png",
        price: "$120 - $200",
        features: ["Creative concepts", "High-fashion techniques", "Photo-ready finish", "Style consultation"]
    },
    {
        id: 3,
        title: "Natural Look",
        description: "Enhance your natural beauty with our signature 'no-makeup makeup' look for everyday elegance.",
        image: "images/1 (3).png",
        price: "$80 - $120",
        features: ["Skin enhancement", "Subtle highlighting", "Natural glow", "Everyday wearable"]
    },
    {
        id: 4,
        title: "Evening Glam",
        description: "Sophisticated and glamorous looks perfect for galas, red carpet events, and special evenings.",
        image: "images/1 (4).png",
        price: "$100 - $180",
        features: ["Dramatic eyes", "Contour & highlight", "Long-lasting formula", "Event-appropriate"]
    },
    {
        id: 5,
        title: "Special Effects",
        description: "Creative and artistic makeup for themed events, Halloween, theatrical productions, and avant-garde looks.",
        image: "images/1 (5).png",
        price: "$200 - $350",
        features: ["Custom designs", "Prosthetics available", "Body painting", "Character creation"]
    },
    {
        id: 6,
        title: "Prom & Graduation",
        description: "Age-appropriate glamour for prom, graduation, and other milestone celebrations.",
        image: "images/1 (6).png",
        price: "$90 - $150",
        features: ["Teen-friendly looks", "Photo-ready makeup", "Long-lasting", "Trend-aware styles"]
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    initializeWebsite();
    
    // Setup language functionality
    setupLanguageToggle();
    
    // Render makeup cards
    renderMakeupCards();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Setup navbar scroll effect
    setupNavbarScrollEffect();
});

// Initialize website functionality
function initializeWebsite() {
    console.log('Elegant Makeup Artist Website Initialized');
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
    });
}

// Render makeup cards dynamically with accordion for details
function renderMakeupCards() {
    const container = document.getElementById('makeup-cards-container');
    
    if (!container) {
        console.error('Makeup cards container not found');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Get localized makeup data
    const localizedMakeupStyles = getLocalizedMakeupData();
    
    // Generate cards HTML
    localizedMakeupStyles.forEach((style, index) => {
        const cardHTML = createMakeupCard(style, index);
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    // Add fade-in animation with staggered delay
    const cards = container.querySelectorAll('.makeup-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        // Stagger the animation
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
}

// Create makeup card with accordion for pricing and features
function createMakeupCard(style, index) {
    const featuresHTML = style.features.map(feature => 
        `<li><i class="bi bi-check-circle text-success me-2"></i>${feature}</li>`
    ).join('');
    
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="makeup-card">
                <div class="service-image-container">
                    <img src="${style.image}" class="service-image" alt="${style.title}">
                </div>
                <div class="service-content">
                    <h5 class="service-title">${style.title}</h5>
                    <p class="service-description">${style.description}</p>
                    
                    <div class="card-accordion">
                        <div class="accordion" id="accordion${index}">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#details${index}">
                                        <i class="bi bi-list-check me-2"></i>${getTranslation('whats-included')}
                                    </button>
                                </h2>
                                <div id="details${index}" class="accordion-collapse collapse" data-bs-parent="#accordion${index}">
                                    <div class="accordion-body">
                                        <div class="service-price mb-3">${style.price}</div>
                                        <h6 class="features-title">${getTranslation('whats-included').split('&')[0].trim()}:</h6>
                                        <ul class="service-features">
                                            ${featuresHTML}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="service-buttons">
                        <button class="btn btn-primary me-2 mb-2" onclick="bookService('${style.title}')">
                            <i class="bi bi-calendar-plus me-2"></i>${getTranslation('book-now')}
                        </button>
                        <button class="btn btn-outline-primary mb-2" onclick="learnMore('${style.title}')">
                            <i class="bi bi-info-circle me-2"></i>${getTranslation('learn-more')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.fade-in');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 70; // Account for fixed navbar
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
}

// Setup navbar scroll effect
function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Book service functionality
function bookService(serviceName) {
    // Create a more sophisticated booking modal or redirect
    showBookingModal(serviceName);
}

// Show booking modal
function showBookingModal(serviceName) {
    const modalHTML = `
        <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient-primary text-white">
                        <h5 class="modal-title" id="bookingModalLabel">
                            <i class="bi bi-calendar-heart me-2"></i>Book ${serviceName}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="bookingForm">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="firstName" class="form-label">First Name *</label>
                                    <input type="text" class="form-control" id="firstName" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="lastName" class="form-label">Last Name *</label>
                                    <input type="text" class="form-control" id="lastName" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">Email *</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="phone" class="form-label">Phone Number *</label>
                                    <input type="tel" class="form-control" id="phone" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="preferredDate" class="form-label">Preferred Date *</label>
                                    <input type="date" class="form-control" id="preferredDate" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="preferredTime" class="form-label">Preferred Time *</label>
                                    <select class="form-select" id="preferredTime" required>
                                        <option value="">Select a time</option>
                                        <option value="9:00 AM">9:00 AM</option>
                                        <option value="10:00 AM">10:00 AM</option>
                                        <option value="11:00 AM">11:00 AM</option>
                                        <option value="12:00 PM">12:00 PM</option>
                                        <option value="1:00 PM">1:00 PM</option>
                                        <option value="2:00 PM">2:00 PM</option>
                                        <option value="3:00 PM">3:00 PM</option>
                                        <option value="4:00 PM">4:00 PM</option>
                                        <option value="5:00 PM">5:00 PM</option>
                                        <option value="6:00 PM">6:00 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="eventType" class="form-label">Event/Occasion</label>
                                <input type="text" class="form-control" id="eventType" 
                                       placeholder="e.g., Wedding, Photoshoot, Gala">
                            </div>
                            <div class="mb-3">
                                <label for="specialRequests" class="form-label">Special Requests or Notes</label>
                                <textarea class="form-control" id="specialRequests" rows="3" 
                                          placeholder="Any specific requirements, allergies, or preferences..."></textarea>
                            </div>
                            <div class="form-check mb-3">
                                <input class="form-check-input" type="checkbox" id="travelService">
                                <label class="form-check-label" for="travelService">
                                    I need on-location service (travel fees may apply)
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            <i class="bi bi-x-circle me-2"></i>Cancel
                        </button>
                        <button type="button" class="btn btn-primary" onclick="submitBooking()">
                            <i class="bi bi-send me-2"></i>Send Booking Request
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if present
    const existingModal = document.getElementById('bookingModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
    modal.show();
    
    // Set minimum date to today
    const dateInput = document.getElementById('preferredDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Submit booking form
function submitBooking() {
    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Show loading state
    const submitBtn = event.target;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="spinner-border spinner-border-sm me-2"></i>Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual booking logic)
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
        modal.hide();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show success message
function showSuccessMessage() {
    const alertHTML = `
        <div class="alert alert-success alert-dismissible fade show position-fixed" 
             style="top: 20px; right: 20px; z-index: 9999; min-width: 300px;" role="alert">
            <i class="bi bi-check-circle me-2"></i>
            <strong>Booking request sent!</strong> We'll contact you within 24 hours to confirm your appointment.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', alertHTML);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        const alert = document.querySelector('.alert-success');
        if (alert) {
            alert.remove();
        }
    }, 5000);
}

// Learn more functionality
function learnMore(serviceName) {
    const service = makeupStyles.find(style => style.title === serviceName);
    
    if (service) {
        alert(`Learn more about ${service.title}:\n\n${service.description}\n\nPrice Range: ${service.price}\n\nFeatures:\n${service.features.join('\n')}\n\nContact us for more detailed information!`);
    }
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Add some sparkle effects to elements
function addSparkleEffect() {
    const sparkleElements = document.querySelectorAll('.hero-title, .section-title');
    
    sparkleElements.forEach(element => {
        element.classList.add('sparkle');
    });
}

// Initialize sparkle effects when page loads
window.addEventListener('load', addSparkleEffect);

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Console message for developers
console.log(`
🎨 Elegant Makeup Artist Website
🌟 Features: Responsive Design, Dynamic Content, Smooth Animations
💄 Built with: HTML5, CSS3, JavaScript ES6+, Bootstrap 5
✨ Ready for customization and deployment!
`);

// Language Translation Functions
function setupLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const currentLangSpan = document.getElementById('currentLang');
    
    if (languageToggle && currentLangSpan) {
        languageToggle.addEventListener('click', function() {
            // Toggle language
            currentLanguage = currentLanguage === 'en' ? 'bg' : 'en';
            
            // Update button text
            currentLangSpan.textContent = currentLanguage === 'en' ? 'BG' : 'EN';
            
            // Apply translations
            applyTranslations();
            
            // Re-render makeup cards with new language
            renderMakeupCards();
        });
    }
}

function getTranslation(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyTranslations() {
    // Translate all elements with data-translate attribute
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update page title
    document.title = currentLanguage === 'en' 
        ? 'Elegant Makeup - Professional Makeup Services'
        : 'Elegant Makeup - Професионални услуги за грим';
    
    // Update navbar brand text
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        const brandText = currentLanguage === 'en' ? 'Elegant Makeup' : 'Елегантен грим';
        navbarBrand.innerHTML = `<i class="bi bi-brush me-2"></i>${brandText}`;
    }
}

function getLocalizedMakeupData() {
    const baseData = [
        {
            id: 1,
            titleKey: 'bridal-makeup',
            descriptionKey: 'bridal-description',
            image: "images/1 (1).png",
            price: "$150 - $250",
            features: ["Trial session included", "4-hour wear guarantee", "Touch-up kit", "Consultation"]
        },
        {
            id: 2,
            titleKey: 'editorial-glam',
            descriptionKey: 'editorial-description',
            image: "images/1 (2).png",
            price: "$120 - $200",
            features: ["Creative concepts", "High-fashion techniques", "Photo-ready finish", "Style consultation"]
        },
        {
            id: 3,
            titleKey: 'natural-look',
            descriptionKey: 'natural-description',
            image: "images/1 (3).png",
            price: "$80 - $120",
            features: ["Skin enhancement", "Subtle highlighting", "Natural glow", "Everyday wearable"]
        },
        {
            id: 4,
            titleKey: 'evening-glam',
            descriptionKey: 'evening-description',
            image: "images/1 (4).png",
            price: "$100 - $180",
            features: ["Dramatic eyes", "Contour & highlight", "Long-lasting formula", "Event-appropriate"]
        },
        {
            id: 5,
            titleKey: 'special-effects',
            descriptionKey: 'effects-description',
            image: "images/1 (5).png",
            price: "$200 - $350",
            features: ["Custom designs", "Prosthetics available", "Body painting", "Character creation"]
        },
        {
            id: 6,
            titleKey: 'prom-graduation',
            descriptionKey: 'prom-description',
            image: "images/1 (6).png",
            price: "$90 - $150",
            features: ["Teen-friendly looks", "Photo-ready makeup", "Long-lasting", "Trend-aware styles"]
        }
    ];
    
    return baseData.map(item => ({
        id: item.id,
        title: getTranslation(item.titleKey),
        description: getTranslation(item.descriptionKey),
        image: item.image,
        price: item.price,
        features: item.features // TODO: Add feature translations if needed
    }));
}

// Export functions for potential external use
window.MakeupArtistApp = {
    makeupStyles,
    renderMakeupCards,
    bookService,
    learnMore
};