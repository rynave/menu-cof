document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const seasonButtons = document.querySelectorAll('.season-btn');
    // const mainMenuBtn = document.getElementById('main-menu-btn'); // این خط حذف شد

    // مقدار یکی از گزینه‌های زیر باشه: 'spring', 'summer', 'autumn', 'winter'
    const CURRENT_SEASON = 'winter, autumn'; // <=== اینجا رو تغییر بده


    function applySeasonalTheme(season) {
        body.className = ''; // پاک کردن کلاس‌های قبلی
        body.classList.add(`theme-${season}`);

        // فعال کردن دکمه فصل جاری و غیرفعال کردن بقیه
        seasonButtons.forEach(button => {
            const buttonSeason = button.dataset.season;
            if (buttonSeason === season) {
                button.classList.add('active');
                button.classList.remove('disabled');
            } else {
                button.classList.remove('active');
                button.classList.add('disabled');
            }
        });
    }

    // --- رویدادها (Event Listeners) ---

    // جلوگیری از کلیک روی دکمه‌های غیرفعال (برای اطمینان)
    seasonButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (button.classList.contains('disabled')) {
                event.preventDefault(); // جلوگیری از رفتن به لینک
            }
        });
    });

    // کلیک روی دکمه منوی اصلی حذف شد


    // --- اجرای اولیه ---
    // تم بر اساس متغیری که در بالا تعیین کردی اعمال میشه
    applySeasonalTheme(CURRENT_SEASON);
});