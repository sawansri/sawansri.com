// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const href = this.getAttribute('href');

            // Only run the smooth-scroll logic for internal anchor links (e.g., "#resume")
            if (href.startsWith('#')) {
                // 1. Stop the browser from jumping instantly
                e.preventDefault();
                
                // 2. Find the target element on the page
                const targetElement = document.querySelector(href);
                
                // 3. Scroll smoothly to it
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For any other link (like "blog.html"), this script does nothing,
            // and the browser will follow the link as it normally would.
        });
    });

});

console.log("Personal Space site loaded!");
