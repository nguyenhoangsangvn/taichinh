document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. LOGIC RANGE SLIDER (Quan trọng để giống 100%) ---
    const slider = document.getElementById('range-input');
    const amountDisplay = document.getElementById('amount-display');

    if(slider && amountDisplay) {
        // Hàm định dạng tiền tệ Việt Nam (thêm dấu chấm)
        const formatMoney = (num) => {
            return new Intl.NumberFormat('vi-VN').format(num);
        };

        const updateSlider = () => {
            const value = slider.value;
            const min = slider.min;
            const max = slider.max;
            
            // Tính phần trăm để tô màu background
            const percentage = ((value - min) / (max - min)) * 100;

            // Gradient: Màu vàng bên trái, màu xám bên phải thumb
            slider.style.background = `linear-gradient(to right, #F4C542 0%, #F4C542 ${percentage}%, #f0f0f0 ${percentage}%, #f0f0f0 100%)`;
            
            // Cập nhật số tiền text
            amountDisplay.textContent = formatMoney(value);
        };

        // Lắng nghe sự kiện kéo
        slider.addEventListener('input', updateSlider);
        
        // Chạy lần đầu khi load trang
        updateSlider();
    }

    // --- 2. LOGIC FAQ ACCORDION ---
    const accHeaders = document.querySelectorAll('.acc-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            // Toggle class active
            item.classList.toggle('active');
        });
    });

    // --- 3. SCROLL HEADER EFFECT ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
