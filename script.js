// Copy to clipboard functionality
function copyToClipboard(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('code');
    const text = code.textContent;

    // Use the modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyFeedback(button);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            fallbackCopyTextToClipboard(text, button);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text, button);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyFeedback(button);
        } else {
            console.error('Fallback: Copying text command was unsuccessful');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

// Show visual feedback when text is copied
function showCopyFeedback(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#6366f1';
    }, 2000);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header (if it exists)
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });

        // Add transition to header
        header.style.transition = 'transform 0.3s ease-in-out';
    }

    // Terminal typing animation
    animateTerminal();
});

// Terminal typing animation
function animateTerminal() {
    const terminalLine = document.querySelector('.terminal-line');
    const command = terminalLine.querySelector('.command');
    const output = document.querySelector('.terminal-output');
    
    if (!command || !output) return;

    const originalCommand = command.textContent;
    const outputLines = Array.from(output.children);
    
    // Hide output initially
    output.style.opacity = '0';
    command.textContent = '';
    
    // Type the command
    let i = 0;
    const typeCommand = () => {
        if (i < originalCommand.length) {
            command.textContent += originalCommand.charAt(i);
            i++;
            setTimeout(typeCommand, 50);
        } else {
            // Show output after command is typed
            setTimeout(() => {
                output.style.opacity = '1';
                output.style.transition = 'opacity 0.5s ease-in-out';
            }, 500);
        }
    };

    // Start typing animation when terminal comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeCommand, 1000);
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(terminalLine);
}

// Add loading animation for feature cards
function animateFeatures() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    animateFeatures();
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close any open modals or overlays
    if (e.key === 'Escape') {
        // Future: close modals if any
    }
    
    // Ctrl/Cmd + K for quick navigation (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Future: open command palette
    }
});

// Add theme detection and respect user preferences
function detectTheme() {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Future: add dark mode support
        console.log('User prefers dark mode');
    }
}

// Listen for theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectTheme);
}

// Initialize theme detection
document.addEventListener('DOMContentLoaded', detectTheme);

// Performance optimization: lazy load images if any are added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add error handling for failed network requests
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});

// Add analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // Future: integrate with analytics service
    console.log('Event tracked:', eventName, properties);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        const buttonText = e.target.textContent.trim();
        const buttonHref = e.target.href;
        
        trackEvent('button_click', {
            text: buttonText,
            href: buttonHref
        });
    }
});

// Service Worker registration for future PWA features
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Future: register service worker for offline support
        console.log('Service Worker support detected');
    });
} 