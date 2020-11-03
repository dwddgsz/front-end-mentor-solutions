document.addEventListener('DOMContentLoaded',()=>{
    const solutions = [
        {
            name:'rock paper scissors',
            img:'./img/rock-paper-scissors.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/rock-paper-scissors-master',
            live:'https://competent-lamport-8fe01d.netlify.app',
        },
        {
            name:'room homepage',
            img:'./img/room.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/room-homepage-master',
            live:'https://hopeful-kilby-48f772.netlify.app',
        },
        {
            name:'insure landing page',
            img:'./img/insure-lp.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/insure-landing-page-master',
            live:'https://peaceful-babbage-989cf1.netlify.app',
        },
        {
            name:'huddle landing page',
            img:'./img/huddle-lp.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/huddle-landing-page-with-curved-sections-master',
            live:'https://goofy-yalow-ddf5bf.netlify.app',
        },
        {
            name:'clipboard landing page',
            img:'./img/clipboard-lp.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/clipboard-landing-page-master',
            live:'https://hardcore-wright-210ca8.netlify.app',
        },
        {
            name:'social media dashboard',
            img:'./img/theme-change.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/social-media-dashboard-with-theme-switcher-master',
            live:'https://condescending-minsky-17c982.netlify.app',
        },
        {
            name:'pricing component',
            img:'./img/pricing.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/pricing-component-with-toggle-master',
            live:'https://flamboyant-mclean-0ef275.netlify.app',
        },
        {
            name:'base apparel coming soon',
            img:'./img/cooming-soon.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/base-apparel-coming-soon-master',
            live:'https://objective-hopper-134a11.netlify.app',
        },
        {
            name:'faq accordion card',
            img:'./img/faq.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/faq-accordion-card-main',
            live:'https://fervent-banach-d9e08a.netlify.app',
        },
        {
            name:'social proof section',
            img:'./img/review.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/social-proof-section-master',
            live:'https://zealous-volhard-5a5918.netlify.app',
        },
        {
            name:'coding bootcamp slider',
            img:'./img/coding-bootcamp.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/coding-bootcamp-testimonials-slider-master',
            live:'https://eager-saha-3876fb.netlify.app',
        },
        {
            name:'four card seciton',
            img:'./img/offer-cards.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/four-card-feature-section-master',
            live:'https://pedantic-pare-0899cb.netlify.app',
        },
        {
            name:'article preview',
            img:'./img/article-preview.jpg',
            git:'https://github.com/dwddgsz/front-end-mentor-projects/tree/master/article-preview-component-master',
            live:'https://optimistic-lovelace-e9577d.netlify.app',
        },
    ];

    const cardsList = document.getElementById('cards-list');
    solutions.forEach((solution)=>{
        const listItem = document.createElement('li');
        listItem.classList.add('card');
        listItem.innerHTML = `
                <div class="card-img-container">
                    <img class="card-img" src=${solution.img} alt="${solution.name} project">
                </div>
                <h2 class="card-title">${solution.name}</h2>
                <div class="card-button-container">
                    <a href=${solution.live} class="card-button"><span class="fas fa-eye"></span></a>
                    <a href=${solution.git} class="card-button"><span class="fab fa-github"></span></a>
                </div>
        `
        cardsList.appendChild(listItem); 
    })


})