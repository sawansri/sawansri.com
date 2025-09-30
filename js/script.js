// Your JavaScript code goes here.
// You can add event listeners, animations, or any other interactive features.

console.log("Personal Space site loaded!");

// Example: You could add a smooth scroll effect for the navigation links.
document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

