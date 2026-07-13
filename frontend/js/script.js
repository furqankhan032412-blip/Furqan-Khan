// ======================================== */
// MOBILE MENU TOGGLE                      */
// ======================================== */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Update accessibility
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    hamburger.setAttribute('aria-expanded', expanded);
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ======================================== */
// THEME TOGGLE (Dark/Light Mode)          */
// ======================================== */

const themeToggle = document.getElementById('themeToggle');
let isDarkMode = false;

// Check saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    isDarkMode = true;
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark');
    
    if (isDarkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// ======================================== */
// FORM VALIDATION                         */
// ======================================== */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (name === '') {
        showError('name', 'Please enter your name');
        return;
    }
    
    if (email === '') {
        showError('email', 'Please enter your email');
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        return;
    }
    
    if (message === '') {
        showError('message', 'Please enter your message');
        return;
    }
    
    // Success
    showSuccess('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Helper functions
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = '#ef4444';
    
    // Remove existing error
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Add error message
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.cssText = 'color: #ef4444; font-size: 0.8rem; margin-top: 0.2rem;';
    error.textContent = message;
    field.parentElement.appendChild(error);
    
    // Remove error after 3 seconds
    setTimeout(() => {
        field.style.borderColor = '';
        if (error.parentElement) error.remove();
    }, 3000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showSuccess(message) {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        padding: 1rem 2rem;
        background: #22c55e;
        color: white;
        border-radius: 8px;
        text-align: center;
        margin-top: 1rem;
        animation: fadeInUp 0.5s ease;
    `;
    successDiv.textContent = '✅ ' + message;
    
    contactForm.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transition = 'opacity 0.5s';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

// ======================================== */
// SMOOTH SCROLLING                        */
// ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ======================================== */
// SKILL BAR ANIMATION                     */
// ======================================== */

const skillBars = document.querySelectorAll('.skill-progress');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('style').match(/width:\s*(\d+)%/);
            if (width) {
                const targetWidth = width[1];
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, 200);
            }
            observer.unobserve(bar);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    observer.observe(bar);
});

// ======================================== */
// ACTIVE NAV LINK HIGHLIGHTING            */
// ======================================== */

const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ======================================== */
// PAGE LOAD ANIMATION                     */
// ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio website loaded successfully!');
    console.log('👨‍💻 Created by Furqan Khan for DecodeLabs');
});

// ======================================== */
// BACK TO TOP BUTTON (Optional)           */
// ======================================== */

// Create back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
`;

backToTop.addEventListener('mouseenter', () => {
    backToTop.style.transform = 'translateY(-3px)';
    backToTop.style.boxShadow = '0 6px 25px rgba(79, 70, 229, 0.5)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.transform = 'translateY(0)';
    backToTop.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.4)';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(backToTop);

// Show/hide button based on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});