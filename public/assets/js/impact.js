// Simple function to include HTML content
function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the HTML file:', error);
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
            once: false,
            disable: '.cta-section, .cta-content'
        });
        
        // Garantir que a seção CTA esteja sempre visível
        const ctaSection = document.querySelector('.cta-section');
        const ctaContent = document.querySelector('.cta-content');
        
        if (ctaSection) ctaSection.style.opacity = '1';
        if (ctaContent) ctaContent.style.opacity = '1';
    }
    
    // Refresh AOS when returning to the page
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && typeof AOS !== 'undefined') {
            setTimeout(function() {
                AOS.refresh();
            }, 200);
        }
    });
    
    // Add event listener for navigation links to home
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && 
            (e.target.href && e.target.href.includes('home.html') || 
             e.target.parentElement && e.target.parentElement.href && 
             e.target.parentElement.href.includes('home.html'))) {
            
            if (typeof AOS !== 'undefined') {
                setTimeout(function() {
                    AOS.refresh();
                }, 200);
            }
        }
    });
}); 