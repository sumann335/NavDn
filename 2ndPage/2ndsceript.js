document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.resource-list li');

    listItems.forEach(item => {
        // লিস্টের কোনো আইটেমে ক্লিক করলে রেসপন্স করবে
        item.addEventListener('click', function() {
            const resourceName = this.innerText;
            console.log("Navigating to: " + resourceName);
            
            // আপনি চাইলে এখানে লিঙ্ক ওপেন করার কোড দিতে পারেন
            // window.location.href = "#"; 
        });

        // হোভার করলে সামান্য ইফেক্ট (CSS এর পাশাপাশি JS দিয়েও কন্ট্রোল করা যায়)
        item.addEventListener('mouseenter', () => {
            item.style.fontWeight = "600";
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.fontWeight = "400";
        });
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.resource-list li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // লিস্টের যেকোনো আইটেমে ক্লিক করলে এনিমেশন বা অন্য কাজ করা যাবে
            const content = this.innerText;
            console.log("Clicked on: " + content);
            
            // ক্লিক করলে হালকা একটা ব্লিংক ইফেক্ট
            this.style.opacity = "0.5";
            setTimeout(() => {
                this.style.opacity = "1";
            }, 150);
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    // রিসোর্স লিস্টের আইটেমে ক্লিক করলে ইন্টারঅ্যাকশন
    const listItems = document.querySelectorAll('.resource-links li');

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const resourceName = this.innerText;
            console.log(`Opening Resource: ${resourceName}`);
            
            // ক্লিক ইফেক্ট
            this.style.transition = '0.1s';
            this.style.opacity = '0.5';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
});