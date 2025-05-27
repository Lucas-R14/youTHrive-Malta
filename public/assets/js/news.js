// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-in-out'
});

// Load header and footer components
$(document).ready(function() {
    // Load header
    $("#header-placeholder").load("../../src/components/header.html", function() {
        // Add active class to current page in navigation
        $("nav ul li a").each(function() {
            if ($(this).attr("href") === "news.html") {
                $(this).addClass("active");
            }
        });
    });
    
    // Load footer
    $("#footer-placeholder").load("../../src/components/footer.html");

    // News grid animations
    const grid = document.querySelector('.quick-links-grid');
    if (grid) {
        setTimeout(() => {
            grid.classList.add('visible');
            
            // Add 'visible' class to each card with a staggered delay
            const cards = document.querySelectorAll('.quick-link-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // 200ms delay between each card
            });
        }, 300); // Initial delay before starting animations
    }
});
