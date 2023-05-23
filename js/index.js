document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get the navbar links
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link, dropdown-item');

    // Loop through the navbar links and check if the URL matches
    navbarLinks.forEach(function (link) {
        if (link.href === currentPageUrl) {
            link.classList.add('active');
        }
    });
});