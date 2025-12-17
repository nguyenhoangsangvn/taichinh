document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Xử lý thanh kéo chọn tiền (Loan Slider)
    const slider = document.getElementById('range-input');
    const amountDisplay = document.getElementById('amount-display');

    if(slider && amountDisplay) {
        const formatMoney = (num) => {
            return new Intl.NumberFormat('vi-VN').format(num);
        };

        const updateSlider = () => {
            const value = slider.value;
            const min = slider.min;
            const max = slider.max;
            const percentage = ((value - min) / (max - min)) * 100;

            // Đổi màu nền thanh trượt
            slider.style.background = `linear-gradient(to right, #F4C542 0%, #F4C542 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
            
            // Cập nhật số tiền hiển thị
            amountDisplay.textContent = formatMoney(value);
        };

        slider.addEventListener('input', updateSlider);
        // Chạy lần đầu
        updateSlider();
    }

    // 2. Xử lý FAQ Accordion
    const accButtons = document.querySelectorAll('.accordion-btn');

    accButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Đóng các tab khác (nếu muốn chỉ mở 1 cái)
            // document.querySelectorAll('.accordion-item').forEach(i => {
            //     if(i !== item) i.classList.remove('active');
            // });

            // Toggle tab hiện tại
            item.classList.toggle('active');
        });
    });

    // 3. Mobile Menu (Đơn giản)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
            if(navMenu.style.display === 'block') {
                navMenu.style.position = 'absolute';
                navMenu.style.top = '90px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = '#fff';
                navMenu.style.padding = '20px';
                navMenu.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
            }
        });
    }
});
