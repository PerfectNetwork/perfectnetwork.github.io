    // تحميل النصوص المتحركة
    document.addEventListener('DOMContentLoaded', function () {
        new Typed('#typedtext', {
            strings: [
                "حيث يتجسد الإبداع والتميز",
                "رحلة لا تُنسى من الاستمتاع والسعادة",
                "بوابتك لعالم افتراضي مليء بالمتعة والاثاره"
            ],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    });

    // العد التصاعدي للأرقام
    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                let count = +counter.innerText;
                const increment = target / 200;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment); // زيادة العد تدريجيا
                    setTimeout(updateCount, 10); // التحديث بعد 10 ميلي ثانية
                } else {
                    counter.innerText = target; // عند الوصول للهدف، عرض الرقم النهائي
                }
            };
            updateCount();
        });
    });
