// ==================== Navigation Active Link ==================== 
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Set initial active link
document.querySelector('.nav-link[href="#home"]').classList.add('active');

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Hamburger Menu ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ==================== Smooth Scroll ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==================== Form Submission ==================== 
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message
        const originalHTML = contactForm.innerHTML;
        contactForm.innerHTML = '<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #48bb7815, #48bb7830); border-radius: 10px; color: #48bb78;"><h3>Thanks for your message! 🎉</h3><p>I\'ll get back to you soon.</p></div>';
        
        // Reset after 3 seconds
        setTimeout(() => {
            contactForm.innerHTML = originalHTML;
            contactForm.reset();
            
            // Re-attach form submission listener
            document.querySelector('.contact-form').addEventListener('submit', arguments.callee);
        }, 3000);
    });
}

// ==================== Intersection Observer for Animations ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== Navbar Background on Scroll ==================== 
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== Cursor Effect ==================== 
document.addEventListener('mousemove', (e) => {
    // Optional: Add custom cursor effects or animations here
});

// ==================== Scroll Progress Indicator ==================== 
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    // Can be used to update a progress bar if needed
});

// ==================== Parallax Effect ==================== 
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.floating-card');
    parallaxElements.forEach((el, index) => {
        const scrollPosition = window.scrollY;
        el.style.transform = `translateY(${scrollPosition * (0.5 + index * 0.1)}px)`;
    });
});

// ==================== Page Load Animation ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== Prevent FOUC (Flash of Unstyled Content) ==================== 
document.body.style.opacity = '0';
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
});

// ==================== Mobile Touch Support ==================== 
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
}, false);

// ==================== Lazy Loading Simulation ==================== 
const images = document.querySelectorAll('img');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ==================== Console Message ==================== 
console.log('%c👋 Welcome to My Portfolio!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cFeel free to explore my work. Happy browsing! 🚀', 'font-size: 14px; color: #764ba2;');
