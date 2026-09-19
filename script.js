// Hero Carousel
function setupHeroCarousel() {
    const slides = document.querySelectorAll('.hero-carousel .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

// Product Carousel
function setupProductCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.product-card');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    // Calculate the width of one card including margin
    const cardWidth = cards[0].offsetWidth + 20; // 20px for margins

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
            updateCarousel();
        }
    });
}

// Card Hover Effects
function setupCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const image = card.querySelector('.card-image img');
        
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
}

// Smooth Scrolling for Navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Sticky Header
function setupStickyHeader() {
    const header = document.querySelector('.main-header');
    const headerContact = document.querySelector('.header-contact');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.position = 'absolute';
            header.style.top = '50px';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
    `;

    // Add mobile menu button to header
    document.querySelector('.nav-container').appendChild(mobileMenuBtn);

    // Media query for mobile devices
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMobileView(e) {
        if (e.matches) {
            mobileMenuBtn.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    }

    mediaQuery.addEventListener('change', handleMobileView);
    handleMobileView(mediaQuery);

    // Toggle menu on button click
    mobileMenuBtn.addEventListener('click', () => {
        if (navLinks.style.display === 'none') {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navLinks.style.padding = '20px';
        } else {
            navLinks.style.display = 'none';
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupHeroCarousel();
    setupProductCarousel();
    setupCardEffects();
    setupSmoothScrolling();
    setupStickyHeader();
    setupMobileMenu();
});