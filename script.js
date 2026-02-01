// ========================================
// ENGAGEMENT INVITATION - JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the page
    initializePersonalizedInvite();
    initializeCelebrationEffect();
    initializePage();
    initializeScrollAnimations();
    initializeRSVPForm();
    initializeParticleEffects();
    initializeParallaxEffects();
    initializeMagicCursor();
    initializeScrollIndicator();
});

// ═══════════════════════════════════════
// PERSONALIZED INVITATION (URL BASED)
// ═══════════════════════════════════════
function initializePersonalizedInvite() {
    const urlParams = new URLSearchParams(window.location.search);
    const inviteType = urlParams.get('invite');
    const invitationImage = document.getElementById('invitationImage');

    if (invitationImage && inviteType) {
        if (inviteType.toLowerCase() === 'nitya') {
            invitationImage.src = 'invitation-nitya.jpg';
            invitationImage.alt = 'Engagement Invitation - Nityasri Lakshmi Gopinath & Surya Teja Duggi';
        }
        // 'surya' or default uses the original invitation.jpg
    }
}

// ═══════════════════════════════════════
// CELEBRATION EFFECT (CONFETTI & FLOWERS)
// ═══════════════════════════════════════
function initializeCelebrationEffect() {
    const celebrationContainer = document.createElement('div');
    celebrationContainer.id = 'celebrationContainer';
    celebrationContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(celebrationContainer);

    // Create confetti and flower particles
    const particles = [];
    const emojis = ['🎉', '✨', '💐', '🌸', '🌺', '💫', '🌹', '🎊', '💝', '🌷'];
    const colors = ['#D4AF37', '#FFD700', '#FF69B4', '#FF1493', '#9370DB', '#87CEEB'];

    // Create 80 particles
    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        const isEmoji = Math.random() > 0.5;

        if (isEmoji) {
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        } else {
            particle.style.width = (Math.random() * 10 + 5) + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        }

        particle.style.cssText += `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -50px;
            opacity: 1;
            animation: celebrationFall ${3 + Math.random() * 3}s ease-out forwards;
            animation-delay: ${Math.random() * 2}s;
        `;

        celebrationContainer.appendChild(particle);
        particles.push(particle);
    }

    // Add animation keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes celebrationFall {
            0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(${Math.random() > 0.5 ? '' : '-'}720deg) scale(0.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // Remove celebration after 5 seconds
    setTimeout(() => {
        celebrationContainer.style.transition = 'opacity 1s ease-out';
        celebrationContainer.style.opacity = '0';
        setTimeout(() => {
            celebrationContainer.remove();
            styleSheet.remove();
        }, 1000);
    }, 5000);
}

// ═══════════════════════════════════════
// PAGE INITIALIZATION
// ═══════════════════════════════════════
function initializePage() {
    // Populate dynamic content from config
    if (typeof EVENT_CONFIG !== 'undefined') {
        populateEventDetails();
    }
}

function populateEventDetails() {
    // Set couple names in footer
    const footerNames = document.querySelector('.footer-names');
    if (footerNames) {
        footerNames.textContent = `${EVENT_CONFIG.partner1Name} & ${EVENT_CONFIG.partner2Name}`;
    }

    // Set venue details
    const venueName = document.querySelector('.venue-name');
    if (venueName) {
        venueName.textContent = EVENT_CONFIG.venueName;
    }

    const venueAddress = document.querySelector('.venue-address');
    if (venueAddress) {
        venueAddress.innerHTML = `
      ${EVENT_CONFIG.venueAddress}<br>
      ${EVENT_CONFIG.venueStreet}<br>
      ${EVENT_CONFIG.venueCity}, ${EVENT_CONFIG.venueState} ${EVENT_CONFIG.venueZip}
    `;
    }

    // Set date and time in venue info
    const dateValue = document.querySelector('[data-field="date"]');
    if (dateValue) {
        dateValue.textContent = EVENT_CONFIG.eventDate;
    }

    const timeValue = document.querySelector('[data-field="time"]');
    if (timeValue) {
        timeValue.textContent = EVENT_CONFIG.eventTime;
    }

    const dressValue = document.querySelector('[data-field="dresscode"]');
    if (dressValue) {
        dressValue.textContent = EVENT_CONFIG.dressCode;
    }

    const parkingValue = document.querySelector('[data-field="parking"]');
    if (parkingValue) {
        parkingValue.textContent = EVENT_CONFIG.parkingInfo;
    }

    // Set RSVP deadline
    const rsvpDeadline = document.querySelector('.rsvp-deadline');
    if (rsvpDeadline) {
        rsvpDeadline.textContent = `Please respond by ${EVENT_CONFIG.rsvpDeadline}`;
    }

    // Map links are now hardcoded in HTML to support different link types (Apple Maps, Google Maps, etc.)

    // Set map embed if provided
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe && EVENT_CONFIG.mapEmbedUrl) {
        mapIframe.src = EVENT_CONFIG.mapEmbedUrl;
    }

    // Set contact info
    const contactEmail = document.querySelector('[data-contact="email"]');
    if (contactEmail) {
        contactEmail.innerHTML = `<a href="mailto:${EVENT_CONFIG.contactEmail}">${EVENT_CONFIG.contactEmail}</a>`;
    }

    const contactPhone = document.querySelector('[data-contact="phone"]');
    if (contactPhone) {
        contactPhone.innerHTML = `<a href="tel:${EVENT_CONFIG.contactPhone}">${EVENT_CONFIG.contactPhone}</a>`;
    }

    const contactName = document.querySelector('[data-contact="name"]');
    if (contactName) {
        contactName.textContent = EVENT_CONFIG.contactName;
    }
}

// ═══════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════
function initializeScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        // Immediately check if element is already in viewport
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        } else {
            observer.observe(element);
        }
    });

    // Add fade-in class to sections if not already present
    document.querySelectorAll('.section-card').forEach((card, index) => {
        if (!card.classList.contains('fade-in')) {
            card.classList.add('fade-in');
            card.style.transitionDelay = `${index * 0.1}s`;

            // Check if already visible
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('visible');
            } else {
                observer.observe(card);
            }
        }
    });
}

// ═══════════════════════════════════════
// RSVP FORM HANDLING
// ═══════════════════════════════════════
function initializeRSVPForm() {
    const form = document.getElementById('rsvpForm');
    if (!form) return;

    form.addEventListener('submit', handleRSVPSubmit);

    // Real-time validation
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);

    field.style.borderColor = '#e74c3c';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
    color: #e74c3c;
    font-size: 0.85rem;
    margin-top: 5px;
    animation: fadeIn 0.3s ease;
  `;

    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function handleRSVPSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Validate all fields
    let isValid = true;
    const requiredInputs = form.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    // Check if attendance is selected
    const attendance = formData.get('entry.726782799');
    if (!attendance) {
        isValid = false;
        const attendanceContainer = document.querySelector('.attendance-options');
        if (attendanceContainer) {
            attendanceContainer.style.outline = '2px solid #e74c3c';
            attendanceContainer.style.borderRadius = '12px';
            setTimeout(() => {
                attendanceContainer.style.outline = 'none';
            }, 3000);
        }
    }

    if (!isValid) {
        // Scroll to first error
        const firstError = form.querySelector('.field-error, [style*="border-color: rgb(231, 76, 60)"]');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading-spinner">✨</span> Sending...';
    submitBtn.disabled = true;

    // Collect RSVP data for Firebase
    const rsvpData = {
        name: formData.get('entry.1434795407') || '',
        email: formData.get('entry.1508246001') || '',
        phone: formData.get('entry.595884956') || '',
        guests: formData.get('entry.225049971') || '1',
        attendance: formData.get('entry.726782799') || '',
        dietary: formData.get('entry.1063341950') || '',
        message: formData.get('entry.1034171781') || ''
    };

    // Submit to Firebase
    submitRSVPToFirebase(rsvpData)
        .then(() => {
            // Hide form
            form.style.display = 'none';

            // Get the success message element
            const successMessage = document.getElementById('successMessage');

            // Customize message and animation based on attendance
            const attendance = rsvpData.attendance.toLowerCase();

            if (attendance.includes('yes')) {
                // They're coming! Celebration confetti blast! 🎉
                successMessage.querySelector('.success-icon').textContent = '🎉';
                successMessage.querySelector('h3').textContent = 'We Can\'t Wait to See You!';
                successMessage.querySelector('p').textContent = 'Thank you for confirming! Get ready to celebrate with us!';
                playCelebrationEffect('confetti');
            } else if (attendance.includes('maybe')) {
                // Maybe - hopeful hearts animation 💭
                successMessage.querySelector('.success-icon').textContent = '💭';
                successMessage.querySelector('h3').textContent = 'We Hope to See You!';
                successMessage.querySelector('p').textContent = 'We understand you\'re not sure yet. We hope you can make it!';
                playCelebrationEffect('hearts');
            } else {
                // Can't make it - gentle thank you sparkles ✨
                successMessage.querySelector('.success-icon').textContent = '💝';
                successMessage.querySelector('h3').textContent = 'Thank You for Letting Us Know';
                successMessage.querySelector('p').textContent = 'We\'ll miss you! Your warm wishes mean the world to us.';
                playCelebrationEffect('sparkles');
            }

            // Show the success message
            if (successMessage) {
                successMessage.classList.add('visible');
            }
        })
        .catch((error) => {
            console.error('Error submitting RSVP:', error);
            alert('Sorry, there was an error submitting your RSVP. Please try again.');
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
}

// ═══════════════════════════════════════
// CELEBRATION EFFECTS
// ═══════════════════════════════════════
function playCelebrationEffect(type) {
    const container = document.createElement('div');
    container.id = 'celebrationEffect';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    let emojis, colors, particleCount;

    if (type === 'confetti') {
        // Confetti blast for "Yes" responses 🎉
        emojis = ['🎉', '✨', '💐', '🌸', '🌺', '💫', '🌹', '🎊', '💝', '🌷', '🎊', '🥳'];
        colors = ['#D4AF37', '#FFD700', '#FF69B4', '#FF1493', '#9370DB', '#87CEEB', '#98FB98'];
        particleCount = 100;
    } else if (type === 'hearts') {
        // Hearts for "Maybe" responses 💭
        emojis = ['💭', '💫', '✨', '🤍', '💛', '🌟'];
        colors = ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFDAB9'];
        particleCount = 50;
    } else {
        // Gentle sparkles for "No" responses ✨
        emojis = ['✨', '💫', '🌟', '💝', '🤍'];
        colors = ['#D4AF37', '#C0C0C0', '#FFE4B5', '#FAFAD2'];
        particleCount = 40;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const isEmoji = Math.random() > 0.4;

        if (isEmoji) {
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.fontSize = (Math.random() * 25 + 15) + 'px';
        } else {
            const size = Math.random() * 12 + 6;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = Math.random() > 0.3 ? '50%' : '2px';
        }

        const startX = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 3 + Math.random() * 3;
        const drift = (Math.random() - 0.5) * 200;

        particle.style.cssText += `
            position: absolute;
            left: ${startX}%;
            top: -60px;
            opacity: 1;
            transform-origin: center;
            animation: celebrateFall${type} ${duration}s ease-out forwards;
            animation-delay: ${delay}s;
            --drift: ${drift}px;
        `;

        container.appendChild(particle);
    }

    // Add animation keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes celebrateFall${type} {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg) scale(1);
                opacity: 1;
            }
            25% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) translateX(var(--drift)) rotate(720deg) scale(0.3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // Remove after 6 seconds
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-out';
        container.style.opacity = '0';
        setTimeout(() => {
            container.remove();
            styleSheet.remove();
        }, 1000);
    }, 5000);
}

function saveRSVP(data) {
    // Get existing RSVPs from localStorage
    let rsvps = JSON.parse(localStorage.getItem('engagement_rsvps') || '[]');

    // Add new RSVP
    rsvps.push(data);

    // Save back to localStorage
    localStorage.setItem('engagement_rsvps', JSON.stringify(rsvps));

    console.log('RSVP saved:', data);
    console.log('All RSVPs:', rsvps);
}

function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.classList.add('show');

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ═══════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════
function getAllRSVPs() {
    return JSON.parse(localStorage.getItem('engagement_rsvps') || '[]');
}

function clearAllRSVPs() {
    localStorage.removeItem('engagement_rsvps');
    console.log('All RSVPs cleared');
}

// Expose utility functions globally for debugging
window.getAllRSVPs = getAllRSVPs;
window.clearAllRSVPs = clearAllRSVPs;

// ═══════════════════════════════════════
// ELEGANT GOLD DUST EFFECT (LIGHTWEIGHT)
// ═══════════════════════════════════════
function initializeParticleEffects() {
    // Skip on mobile for better performance
    if (window.matchMedia('(max-width: 768px)').matches) {
        return;
    }

    // Create minimal, elegant gold dust effect using pure CSS
    const dustContainer = document.createElement('div');
    dustContainer.className = 'gold-dust-container';
    dustContainer.innerHTML = `
        <div class="gold-dust dust-1"></div>
        <div class="gold-dust dust-2"></div>
        <div class="gold-dust dust-3"></div>
    `;
    document.body.appendChild(dustContainer);

    // Add elegant gold dust styles
    const dustStyles = document.createElement('style');
    dustStyles.textContent = `
        .gold-dust-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
            overflow: hidden;
        }
        
        .gold-dust {
            position: absolute;
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, transparent 70%);
            border-radius: 50%;
            opacity: 0;
        }
        
        .dust-1 {
            left: 15%;
            animation: floatDust 18s ease-in-out infinite;
        }
        .dust-2 {
            left: 50%;
            animation: floatDust 22s ease-in-out 6s infinite;
        }
        .dust-3 {
            left: 80%;
            animation: floatDust 20s ease-in-out 12s infinite;
        }
        
        @keyframes floatDust {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            15% {
                opacity: 0.5;
            }
            50% {
                opacity: 0.3;
            }
            85% {
                opacity: 0.15;
            }
            100% {
                transform: translateY(-10vh) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(dustStyles);
}

// ═══════════════════════════════════════
// PARALLAX SCROLLING EFFECTS (OPTIMIZED)
// ═══════════════════════════════════════
function initializeParallaxEffects() {
    const hero = document.querySelector('.hero-section');
    const invitationFrame = document.querySelector('.invitation-frame');

    // Skip parallax on mobile for better performance
    if (window.matchMedia('(max-width: 768px)').matches) {
        return;
    }

    // Add will-change hints for GPU acceleration
    if (hero) hero.style.willChange = 'transform';
    if (invitationFrame) invitationFrame.style.willChange = 'transform';

    let ticking = false;
    let lastScrollY = 0;

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Only apply effects when in viewport
                if (hero && lastScrollY < window.innerHeight) {
                    // Use translate3d for GPU acceleration
                    hero.style.transform = `translate3d(0, ${lastScrollY * 0.15}px, 0)`;
                    if (invitationFrame) {
                        const scale = Math.max(0.9, 1 - lastScrollY * 0.0002);
                        invitationFrame.style.transform = `translate3d(0, ${-lastScrollY * 0.05}px, 0) scale(${scale})`;
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ═══════════════════════════════════════
// CURSOR EFFECTS (DISABLED FOR PERFORMANCE)
// ═══════════════════════════════════════
function initializeMagicCursor() {
    // Cursor trail disabled for better performance and cleaner look
    // The elegant gold dust effect provides sufficient visual appeal
}

// ═══════════════════════════════════════
// TEXT ANIMATIONS (UNDERLINE & GLOW)
// ═══════════════════════════════════════
function initializeTextAnimations() {
    // Add animated underline effect to section titles
    const sectionTitles = document.querySelectorAll('.section-title h2');

    sectionTitles.forEach(title => {
        const wrapper = document.createElement('span');
        wrapper.className = 'animated-underline';
        wrapper.innerHTML = title.innerHTML;
        title.innerHTML = '';
        title.appendChild(wrapper);
    });

    // Add glow effect to venue name
    const venueName = document.querySelector('.venue-name');
    if (venueName) {
        venueName.classList.add('glow-text');
    }

    // Add text animation styles (lightweight version)
    const textStyleSheet = document.createElement('style');
    textStyleSheet.textContent = `
        .animated-underline {
            position: relative;
            display: inline-block;
        }
        
        .animated-underline::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            transition: width 0.5s ease, left 0.5s ease;
        }
        
        .fade-in.visible .animated-underline::after {
            width: 100%;
            left: 0;
        }
        
        .glow-text {
            transition: text-shadow 0.3s ease;
        }
        
        .glow-text:hover {
            text-shadow: 0 0 15px rgba(128, 0, 32, 0.3), 0 0 30px rgba(212, 175, 55, 0.15);
        }
        
        /* Subtle hover effect for attendance options */
        .attendance-option label:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.15);
        }
        
        /* Animated success icon */
        .success-icon {
            animation: successBounce 0.8s ease-out;
        }
        
        @keyframes successBounce {
            0% {
                transform: scale(0);
                opacity: 0;
            }
            60% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(textStyleSheet);

    // Add click ripple effect to buttons
    const buttons = document.querySelectorAll('.submit-btn, .map-link-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ═══════════════════════════════════════
// TOP NAVIGATION BAR & SCROLL INDICATOR
// ═══════════════════════════════════════
function initializeScrollIndicator() {
    const scrollHint = document.getElementById('scrollHint');
    const topNav = document.getElementById('topNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const progressBar = document.getElementById('scrollProgressBar');
    const sections = document.querySelectorAll('#hero, #venue, #rsvp, #contact');

    // Click scroll hint to go to venue section
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            const venueSection = document.querySelector('#venue');
            if (venueSection) {
                venueSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle nav link clicks for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const offset = 60; // Fixed offset for always-visible nav
                const targetPosition = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Track scroll position
    let ticking = false;
    const heroSection = document.querySelector('.hero-section');
    const showNavThreshold = heroSection ? heroSection.offsetHeight * 0.3 : 200;
    const hideHintThreshold = heroSection ? heroSection.offsetHeight * 0.5 : 400;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollY / docHeight) * 100;

                // Update progress bar
                if (progressBar) {
                    progressBar.style.width = scrollPercent + '%';
                }

                // Add scrolled class to top nav for background transition
                if (topNav) {
                    if (scrollY > 50) {
                        topNav.classList.add('scrolled');
                    } else {
                        topNav.classList.remove('scrolled');
                    }
                }

                // Hide scroll hint after scrolling past hero
                if (scrollHint) {
                    if (scrollY > hideHintThreshold) {
                        scrollHint.classList.add('hidden');
                    } else {
                        scrollHint.classList.remove('hidden');
                    }
                }

                // Update active nav link based on section in view
                let currentSection = 'hero';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 250;
                    const sectionHeight = section.offsetHeight;
                    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                        currentSection = section.id;
                    }
                });

                navLinks.forEach(link => {
                    if (link.getAttribute('data-section') === currentSection) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}
