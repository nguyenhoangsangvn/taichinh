document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Xử lý thanh Slider (Kéo tiền)
    const slider = document.getElementById('meo-range-input');
    const amountDisplay = document.getElementById('meo-amount-display');

    if (slider && amountDisplay) {
        // Hàm định dạng tiền (thêm dấu chấm)
        const formatMoney = (num) => {
            return new Intl.NumberFormat('vi-VN').format(num);
        };

        const updateSlider = () => {
            const value = slider.value;
            const min = slider.min;
            const max = slider.max;
            const percentage = ((value - min) / (max - min)) * 100;

            // Hiệu ứng màu vàng chạy theo nút kéo
            slider.style.background = `linear-gradient(to right, #F4C542 0%, #F4C542 ${percentage}%, #F0F0F0 ${percentage}%, #F0F0F0 100%)`;
            amountDisplay.textContent = formatMoney(value);
        };

        slider.addEventListener('input', updateSlider);
        updateSlider(); // Chạy lần đầu
    }

    // 2. Xử lý FAQ Accordion (Click mở nội dung)
    const accTitles = document.querySelectorAll('.accordion-title');

    accTitles.forEach(title => {
        title.addEventListener('click', function(e) {
            e.preventDefault();
            const content = this.nextElementSibling;
            
            // Toggle hiển thị
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
