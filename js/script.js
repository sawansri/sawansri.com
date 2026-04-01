document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const href = this.getAttribute('href');

            // Only run smooth-scroll for internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For any other link (like "/blog/"), this script does nothing,
            // and the browser will follow the link as it normally would.
        });
    });

});

console.log("Personal Space site loaded!");
