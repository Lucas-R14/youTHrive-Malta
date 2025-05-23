// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Include header and footer
function includeHTML() {
    // Include header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('../components/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            });
    }
    
    // Include footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('../components/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);
