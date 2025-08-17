// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
    initSmoothScrolling();
    
    // Intersection Observer for animations
    initScrollAnimations();
    
    // Counter animations for achievement cards
    initCounterAnimations();
    
    // Progress bars for skills
    initProgressBars();
    
    // Parallax effect for hero section
    initParallaxEffect();
    
    // Timeline animations
    initTimelineAnimations();
    
    // Contact item click handlers
    initContactHandlers();
});

// Smooth scrolling functionality
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation if it's an achievement card
                if (entry.target.classList.contains('achievement-card')) {
                    animateCounter(entry.target);
                }
                
                // Trigger timeline item animation
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.achievement-card, .expertise-category, .timeline-item, .education-item');
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Counter animations for achievement numbers
function initCounterAnimations() {
    window.counterAnimated = new Set(); // Track which counters have been animated
}

function animateCounter(card) {
    const numberElement = card.querySelector('.achievement-number');
    if (!numberElement || window.counterAnimated.has(numberElement)) return;
    
    window.counterAnimated.add(numberElement);
    const finalValue = numberElement.textContent;
    
    // Extract number from text
    const numberMatch = finalValue.match(/[\d.]+/);
    if (!numberMatch) return;
    
    const targetNumber = parseFloat(numberMatch[0]);
    const prefix = finalValue.substring(0, finalValue.indexOf(numberMatch[0]));
    const suffix = finalValue.substring(finalValue.indexOf(numberMatch[0]) + numberMatch[0].length);
    
    let currentNumber = 0;
    const increment = targetNumber / 50; // 50 steps
    const duration = 2000; // 2 seconds
    const stepTime = duration / 50;
    
    numberElement.textContent = prefix + '0' + suffix;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        
        // Format the number properly
        let displayNumber = currentNumber;
        if (targetNumber >= 1000) {
            displayNumber = Math.round(displayNumber);
        } else {
            displayNumber = Math.round(displayNumber * 10) / 10;
        }
        
        numberElement.textContent = prefix + displayNumber + suffix;
    }, stepTime);
}

// Progress bars for skills (if we want to add them later)
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const percentage = bar.dataset.percentage;
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 500);
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Timeline animations
function initTimelineAnimations() {
    // Add staggered animation delay to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
}

function animateTimelineItem(item) {
    const marker = item.querySelector('.timeline-marker');
    const content = item.querySelector('.timeline-content');
    
    if (marker) {
        setTimeout(() => {
            marker.style.transform = 'scale(1.2)';
            marker.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                marker.style.transform = 'scale(1)';
            }, 300);
        }, 200);
    }
    
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateX(-30px)';
        content.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateX(0)';
        }, 300);
    }
}

// Contact handlers
function initContactHandlers() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const text = item.querySelector('span').textContent;
        
        item.addEventListener('click', function() {
            if (text.includes('@')) {
                // Email
                window.location.href = `mailto:${text}`;
            } else if (text.includes('linkedin')) {
                // LinkedIn
                window.open(`https://${text}`, '_blank');
            } else if (text.match(/\d{3}-\d{3}-\d{4}/)) {
                // Phone
                window.location.href = `tel:${text.replace(/[^\d]/g, '')}`;
            }
        });
        
        // Add hover effect
        item.style.cursor = 'pointer';
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Utility function to check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add typing effect to the title
function initTypingEffect() {
    const titleElement = document.querySelector('.title');
    if (!titleElement) return;
    
    const originalText = titleElement.textContent;
    titleElement.textContent = '';
    
    let index = 0;
    const typingSpeed = 100;
    
    function typeChar() {
        if (index < originalText.length) {
            titleElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeChar, typingSpeed);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeChar, 1000);
}

// Add floating animation to achievement cards
function initFloatingAnimation() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach((card, index) => {
        // Add floating animation with different delays
        card.style.animation = `float 3s ease-in-out ${index * 0.5}s infinite`;
    });
}

// Add CSS for floating animation
const floatingKeyframes = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
`;

// Inject the keyframes
const style = document.createElement('style');
style.textContent = floatingKeyframes;
document.head.appendChild(style);

// Initialize additional effects when page loads
window.addEventListener('load', function() {
    initTypingEffect();
    initFloatingAnimation();
});

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-based animations
window.addEventListener('scroll', throttle(function() {
    // Update parallax effect here if needed
}, 16)); // ~60fps
