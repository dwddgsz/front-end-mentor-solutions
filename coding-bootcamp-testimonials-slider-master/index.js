document.addEventListener('DOMContentLoaded', () => {
    // ARRAYS WITH DATA
    const imagesPath = [
        './images/image-tanya.jpg',
        './images/image-john.jpg',
    ]
    const names = [
        'Tanya Sinclair',
        'John Tarkpor'
    ]
    const specialities = [
        'UX Engineer',
        'Junior Front - end Developer'
    ]
    const reviews = [
        `“I’ ve been interested in coding for a while but never taken the jump, until now. I couldn’ t recommend this course enough. I’ m now in the job of my dreams and so excited about the future.”`,
        `“If you want to lay the best foundation possible I’ d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”`
    ]

    // VARIABLES

    const slider = document.getElementById('slider');
    const photoContainer = document.getElementById('photo');
    const nameContainer = document.getElementById('name');
    const specialityContainer = document.getElementById('speciality');
    const reviewContainer = document.getElementById('review');
    let currentSlideNumber = 0;

    // FUNCTION THAT REFRESHES DATA
    const refreshData = () => {
        photoContainer.setAttribute('src', imagesPath[currentSlideNumber])
        nameContainer.innerText = names[currentSlideNumber];
        specialityContainer.innerText = specialities[currentSlideNumber];
        reviewContainer.innerText = reviews[currentSlideNumber];
        if (currentSlideNumber) {
            currentSlideNumber = 0;
        } else {
            currentSlideNumber = 1;
        }
    }

    // INITAIL
    refreshData();
    // EVENT LISTENER
    slider.addEventListener('click', refreshData);
});