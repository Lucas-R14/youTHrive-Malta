// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    once: true
});

// Load header and footer components
$(document).ready(function() {
    // Load header
    $("#header-placeholder").load("../components/header.html", function() {
        // Add active class to current page in navigation
        $("nav ul li a").each(function() {
            if ($(this).attr("href") === "news.html") {
                $(this).addClass("active");
            }
        });
    });
    
    // Load footer
    $("#footer-placeholder").load("../components/footer.html");
});
