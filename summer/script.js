document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // هدف تب کلیک شده رو پیدا کن
            const targetId = button.getAttribute('data-tab-target');
            const targetContent = document.querySelector(targetId);

            // ابتدا کلاس active رو از همه تب‌ها و محتواها بردار
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // بعد کلاس active رو به تب و محتوای مورد نظر اضافه کن
            button.classList.add('active');
            targetContent.classList.add('active');
        });
    });
});