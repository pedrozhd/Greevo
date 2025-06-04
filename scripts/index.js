// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Animate stats counters on scroll
const animateCounters = () => {
    const counters = document.querySelectorAll('.stats-counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.querySelector('.text-4xl').innerText.replace(/\D/g, '');
        const count = +counter.querySelector('.text-4xl').innerText.replace(/\D/g, '');
        const increment = target / speed;
        
        if (count < target) {
            counter.querySelector('.text-4xl').innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.querySelector('.text-4xl').innerText = target;
        }
    });
};

// Intersection Observer to trigger animations when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-counter')) {
                animateCounters();
            }
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.stats-counter, .disaster-card').forEach(el => {
    observer.observe(el);
});