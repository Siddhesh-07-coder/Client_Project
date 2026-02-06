// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});

// Form validation and submission
const form = document.getElementById('appointment-form');
const successMessage = document.getElementById('success-message');

// Validation functions
function validateName() {
    const name = document.getElementById('name').value.trim();
    const error = document.getElementById('name-error');
    if (name === '') {
        error.textContent = 'Name is required.';
        return false;
    } else if (name.length < 2) {
        error.textContent = 'Name must be at least 2 characters.';
        return false;
    }
    error.textContent = '';
    return true;
}

function validatePhone() {
    const phone = document.getElementById('phone').value.trim();
    const error = document.getElementById('phone-error');
    const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number pattern (starts with 6-9, 10 digits)
    if (phone === '') {
        error.textContent = 'Phone number is required.';
        return false;
    } else if (!phoneRegex.test(phone)) {
        error.textContent = 'Please enter a valid 10-digit Indian phone number.';
        return false;
    }
    error.textContent = '';
    return true;
}

function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        error.textContent = 'Email is required.';
        return false;
    } else if (!emailRegex.test(email)) {
        error.textContent = 'Please enter a valid email address.';
        return false;
    }
    error.textContent = '';
    return true;
}

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    
    if (isNameValid && isPhoneValid && isEmailValid) {
        // Simulate successful submission (no backend)
        successMessage.classList.remove('hidden');
        form.reset(); // Clear the form
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }

});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});
