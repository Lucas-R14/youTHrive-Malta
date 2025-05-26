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
            once: true
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
});