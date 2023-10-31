document.addEventListener("DOMContentLoaded", function() {
    // Отримую елемент заголовка
    var header = document.querySelector("header h1");

    // Створюю масив із різними шрифтами
    var fonts = ["'Comic Sans MS', cursive", "Arial, sans-serif", "Impact, fantasy", "cursive"];

    // Ініціалізую лічильник для вибору шрифта
    var fontIndex = 0;

    // Додаю обробник події для кліку на заголовок
    header.addEventListener("click", function() {
        // Змінюю шрифт заголовка
        header.style.fontFamily = fonts[fontIndex];

        // Збільшую лічильник індексу шрифту, якщо він не виходить за межі масиву
        fontIndex = (fontIndex + 1) % fonts.length;
    });

    // Задаю початковий шрифт заголовка
    header.style.fontFamily = fonts[fontIndex];
});
