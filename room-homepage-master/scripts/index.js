document.addEventListener('DOMContentLoaded', () => {
    // GET DOM ELEMENTS
    const menu = document.getElementById('menu');
    const blockContent = document.getElementById('block-content');
    const burger = document.getElementById('burger');
    const close = document.getElementById('close');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const hero = document.getElementById('hero');
    const buttonPrev = document.getElementById('button-prev');
    const buttonNext = document.getElementById('button-next');
    // VARIABLES

    let currentSlide = 0;
    let currentDevice = '';

    const titles = [
        `Discover innovative ways to decorate`,
        `We are available all across the globe`,
        `Manufactured with the best materials`,
    ];
    const descriptions = [
        `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
        `With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`,
        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
        to ensure that every product is made as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their home and office.`,
    ];

    // FUNCTIONS

    const checkForDevice = () => {
        const isDesktop = window.matchMedia('(min-width:450px)').matches;
        currentDevice = isDesktop === true ? 'desktop' : 'mobile';
    }

    changeContent = () => {
        checkForDevice();
        description.innerText = descriptions[currentSlide];
        title.innerText = titles[currentSlide];
        hero.style.backgroundImage = `url('./images/${currentDevice}-image-hero-${currentSlide}.jpg')`;
    }

    // LISTENERS

    // CLOSE / OPEN MENU AT MOBILE DEVICES
    burger.addEventListener('click', () => {
        blockContent.style.display = 'block';
        menu.classList.add('show');
    })

    close.addEventListener('click', () => {
        blockContent.style.display = 'none';
        menu.classList.remove('show');
    })

    // SLIDER 
    buttonNext.addEventListener('click', () => {
        if (currentSlide === 2) {
            currentSlide = -1;
        }
        currentSlide++;
        changeContent();
    })
    buttonPrev.addEventListener('click', () => {
        if (currentSlide === 0) {
            currentSlide = 3;
        }
        currentSlide--;
        changeContent();
    })

})