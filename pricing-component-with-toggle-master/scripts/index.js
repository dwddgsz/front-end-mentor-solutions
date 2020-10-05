document.addEventListener('DOMContentLoaded', () => {

    // GET DOM ELEMENTS
    const togglerLabel = document.getElementById('toggler-label');
    const togglerCheckbox = document.getElementById('toggler-checkbox');
    const cardPriceFirst = document.getElementById('card-price-first');
    const cardPriceSecond = document.getElementById('card-price-second');
    const cardPriceThird = document.getElementById('card-price-third');

    // FUNCTIONS THAT MAKE PRICE CHANGE IN HTML
    const changeToMonthly = function () {
        cardPriceFirst.innerText = '199.99';
        cardPriceSecond.innerText = '249.99';
        cardPriceThird.innerText = '399.99';
    }
    const changeToAnnually = function () {
        cardPriceFirst.innerText = '19.99';
        cardPriceSecond.innerText = '24.99';
        cardPriceThird.innerText = '39.99';
    }
    // FUNCTION THAT CHECKS WHAT MODE SHOULD BE SHOWN TO USER
    changeCardsValue = () => {
        if (togglerCheckbox.checked === false) {
            changeToMonthly()
        } else {
            changeToAnnually()
        }
    }
    
    // LISTENERS 

    // LISTENER FOR CLICK 
    togglerLabel.addEventListener('click', changeCardsValue);
    // LISTENER FOR KEYBOARD
    window.addEventListener('keydown', function (e) {
        if ((e.key === 'ArrowRight') && (togglerCheckbox.checked === false)) {
            changeToMonthly()
            togglerCheckbox.checked = true;
        } else if ((e.key === 'ArrowLeft') && (togglerCheckbox.checked === true)) {
            changeToAnnually();
            togglerCheckbox.checked = false;
        }
    })


})