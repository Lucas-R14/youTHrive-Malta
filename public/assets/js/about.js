// Simple function to include HTML content
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
            
            // If this is the header, add active class to current page link
            if (elementId === 'header-placeholder') {
                highlightCurrentPage();
            }
        })
        .catch(error => {
            console.error('Error loading the HTML file:', error);
        });
}

// Function to highlight the current page in navigation
function highlightCurrentPage() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Get current page path
    const currentPath = window.location.pathname;
    
    // Loop through links and add active class if it matches current path
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes('about.html') && linkPath.includes('about.html')) {
            link.classList.add('active');
        }
    });
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Include header and footer
    includeHTML('../components/header.html', 'header-placeholder');
    includeHTML('../components/footer.html', 'footer-placeholder');
    
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Refresh AOS when returning to the page
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && typeof AOS !== 'undefined') {
            setTimeout(function() {
                AOS.refresh();
            }, 200);
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add scroll animation to show more content on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add a class to body when scrolled down
        if (scrollTop > 50) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
});