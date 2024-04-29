// Toggle dark mode
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Light Mode';
    } else {
        darkModeBtn.textContent = 'Dark Mode';
    }
});

// Toggle menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

