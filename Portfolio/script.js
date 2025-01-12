const texts = ["Web Developer", "Creative Designer"]; // لیست متون برای تایپ
const typingContainer = document.getElementById('typing-container');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    const displayText = currentText.slice(0, charIndex);

    typingContainer.textContent = displayText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // سرعت تایپ
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100); // سرعت پاک شدن
    } else {
        isDeleting = !isDeleting;

        if (!isDeleting) {
            textIndex = (textIndex + 1) % texts.length; // رفتن به متن بعدی
        }

        setTimeout(typeEffect, 1000); // وقفه بین تایپ یا پاک کردن
    }
}

typeEffect();