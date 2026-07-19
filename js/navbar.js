// This makes the hamburger menu work on mobile
// When you click the 3 lines — the menu opens and closes

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});
