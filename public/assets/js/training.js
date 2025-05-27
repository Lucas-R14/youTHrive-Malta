// Training page specific JavaScript

// Initialize AOS with custom settings
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        mirror: true
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Load header and footer
    const headerPath = '../../../src/components/header.html';
    console.log('Loading header from:', headerPath);
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                console.error('Failed to load header:', response.statusText);
                return '';
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                document.getElementById('header-placeholder').innerHTML = data;
                // Add active class to current page in navigation
                const currentPage = window.location.pathname.split('/').pop();
                const navLinks = document.querySelectorAll('.nav-menu a');
                navLinks.forEach(link => {
                    const linkPage = link.getAttribute('href').split('/').pop();
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    const footerPath = '../../../src/components/footer.html';
    console.log('Loading footer from:', footerPath);
    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                console.error('Failed to load footer:', response.statusText);
                return '';
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                document.getElementById('footer-placeholder').innerHTML = data;
            }
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
