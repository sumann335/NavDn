document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector('.text-section h1');
    const illustration = document.querySelector('.illustration-container');
    
    // Add a simple fade-in effect on load
    text.style.opacity = "0";
    text.style.transform = "translateX(-50px)";
    text.style.transition = "all 1s ease-out";

    illustration.style.opacity = "0";
    illustration.style.transform = "scale(0.8)";
    illustration.style.transition = "all 1s ease-out 0.3s";

    setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "translateX(0)";
        
        illustration.style.opacity = "1";
        illustration.style.transform = "scale(1)";
    }, 100);
});





// Simple entry animation
        document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.info-item');
            items.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.6s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 150 * index);
            });
        });