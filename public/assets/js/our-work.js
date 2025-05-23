// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 100
        });
    }
    
    // Load header
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;
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
        });

    // Load footer
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        });
});
