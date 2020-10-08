document.addEventListener('DOMContentLoaded', () => {
    const toggleBox = document.getElementById('toggle-box');
    const toggleInside = document.getElementById('toggle-inside');
    const bgColors = ['hsl(230, 17%, 14%)', ' hsl(0, 0%, 100%)'];
    const bgPatterColors = ['hsl(232, 19%, 15%)', 'hsl(225, 100%, 98%)'];
    const cardBgColors = ['hsl(228, 28%, 20%)', 'hsl(227, 47%, 96%)'];
    const textColors = ['hsl(228, 34%, 66%)', 'hsl(228, 12%, 44%)'];
    const numbersColors = ['hsl(0, 0%, 100%)', 'hsl(230, 17%, 14%)'];
    const toggleStartColors = ['hsl(210, 78%, 56%)', 'hsl(230, 22%, 74%)'];
    const toggleEndColors = ['hsl(146, 68%, 55%)', 'hsl(230, 22%, 74%)'];
    let currentThemeNumber = 0;

    toggleBox.addEventListener('click', () => {
        currentThemeNumber = currentThemeNumber === 0 ? 1 : 0;
        toggleInside.classList.toggle('toggle-right');
        document.documentElement.style.setProperty('--bg', bgColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--bg-pattern', bgPatterColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--card-bg', cardBgColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--text', textColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--numbers', numbersColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--toggle-start', toggleStartColors[currentThemeNumber]);
        document.documentElement.style.setProperty('--toggle-end', toggleEndColors[currentThemeNumber]);
    })

})