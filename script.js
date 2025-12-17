document.addEventListener('DOMContentLoaded', function() {
    
    /* --- 1. LOGIC RANGE SLIDER (Copy từ source gốc) --- */
    const slider = document.getElementById('meo-range-input');
    const amountDisplay = document.getElementById('meo-amount-display');

    if(slider && amountDisplay) {
        // Hàm format tiền Việt Nam
        const formatMoney = (num) => {
            return new Intl.NumberFormat('vi-VN').format(num);
        };

        const updateSlider = () => {
            const value = slider.value;
            const min = slider.min;
            const max = slider.max;
            
            // Tính % để tô màu gradient nền
            const percentage = ((value - min) / (max - min)) * 100;

            // Gradient: Vàng (trái) -> Xám (phải)
            slider.style.background = `linear-gradient(to right, #F4C542 0%, #F4C542 ${percentage}%, #F0F0F0 ${percentage}%, #F0F0F0 100%)`;
            
            // Cập nhật text số tiền
            amountDisplay.textContent = formatMoney(value);
        };

        slider.addEventListener('input', updateSlider);
        // Chạy lần đầu
        updateSlider();
    }

    /* --- 2. FAQ ACCORDION --- */
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            // Đóng các cái khác (nếu muốn)
            // document.querySelectorAll('.accordion-item').forEach(i => {
            //     if(i !== item) i.classList.remove('active');
            // });
            item.classList.toggle('active');
        });
    });

    /* --- 3. MOBILE MENU TOGGLE (Đơn giản) --- */
    const navTrigger = document.querySelector('.mobile-nav-trigger');
    // Ở đây mình chưa code menu xổ xuống, nhưng để tránh click vào link # bị nhảy
    if(navTrigger){
        navTrigger.addEventListener('click', function(e){
            e.preventDefault();
            alert("Đây là bản demo tĩnh. Menu mobile sẽ cần thêm code JS để hiển thị overlay.");
        });
    }
});
