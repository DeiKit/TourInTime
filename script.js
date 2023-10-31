document.addEventListener("DOMContentLoaded", function() {
    // Отримайте елемент заголовка
    var header = document.querySelector("header h1");

    // Створіть масив із різними шрифтами
    var fonts = ["'Comic Sans MS', cursive", "Arial, sans-serif", "Impact, fantasy", "cursive"];

    // Ініціалізуйте лічильник для вибору шрифта
    var fontIndex = 0;

    // Додайте обробник події для кліку на заголовок
    header.addEventListener("click", function() {
        // Змініть шрифт заголовка
        header.style.fontFamily = fonts[fontIndex];

        // Збільшіть лічильник індексу шрифту, якщо він не виходить за межі масиву
        fontIndex = (fontIndex + 1) % fonts.length;
    });

    // Задайте початковий шрифт заголовка
    header.style.fontFamily = fonts[fontIndex];
});
