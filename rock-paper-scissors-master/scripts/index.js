// INVOKES FUNCTION ONLY AFTER HTML IS READY
document.addEventListener('DOMContentLoaded', () => {

    // VARIABLES
    // VARIABLES
    // VARIABLES

    // NODE LIST THAT CONTAINS OPTION ELEMENTS FROM DOM

    const options = document.querySelectorAll('.option-to-choose')

    // MAIN CONTAINERS 

    const optionsContainer = document.getElementById('options-container');
    const resultsContainer = document.getElementById('results-container');

    // SCORE

    const score = document.getElementById('score');

    // RESULTS

    const myOption = document.getElementById('my-option');
    const enemyOption = document.getElementById('enemy-option');
    const myOptionPhoto = document.getElementById('my-option-photo');
    const enemyOptionPhoto = document.getElementById('enemy-option-photo');


    const resultExplanation = document.getElementById('result-explanation');
    const nextRoundButton = document.getElementById('play-again');

    // RULES

    const rulesButton = document.getElementById('rules-button');
    const rulesPopup = document.getElementById('rules-popup');
    const closePopup = document.getElementById('close-rules-popup');

    // ARRAY THAT CONTAINS POSSIBLE CHOICES (USED FOR ENEMY CHOICE)
    const items = ['paper', 'scissors', 'rock'];

    // IT WILL CONTAIN RANDOM ELEMENT FROM items ARRAY
    let enemyItem;

    // OVERALL POINTS 
    let points = 0;


    // FUNCTIONS
    // FUNCTIONS
    // FUNCTIONS

    // INVOKED AFTER USERS CHOICE
    const showResults = () => {
        optionsContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    }

    // START NEW ROUND
    const nextRound = () => {
        myOption.classList.remove('paper');
        myOption.classList.remove('scissors');
        myOption.classList.remove('rock');
        myOption.classList.remove('win-gradient');
        enemyOption.classList.remove('paper');
        enemyOption.classList.remove('scissors');
        enemyOption.classList.remove('rock');
        enemyOption.classList.remove('win-gradient');
        resultsContainer.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
    }

    // SHOW USERS CHOICE

    const showUserChoice = (e) => {
        const parent = e.target.closest('div').parentElement;
        if (parent.classList.contains('paper')) {
            myOption.classList.add('paper');
            myOptionPhoto.setAttribute('src', './images/icon-paper.svg')
        } else if (parent.classList.contains('scissors')) {
            myOption.classList.add('scissors');
            myOptionPhoto.setAttribute('src', './images/icon-scissors.svg')
        } else {
            myOption.classList.add('rock');
            myOptionPhoto.setAttribute('src', './images/icon-rock.svg')
        }
    }

    // GET RANDOM ITEM FOR ENEMY
    const getEnemyItem = () => {
        enemyItem = items[Math.floor(Math.random() * 3)];
        enemyOption.classList.add(`${enemyItem}`);
        enemyOptionPhoto.setAttribute('src', `./images/icon-${enemyItem}.svg`)
    }

    // POSSIBLE RESULTS
    const win = () => {
        myOption.classList.add('win-gradient');
        points++;
        resultExplanation.innerText = 'you win';
        score.innerText = points;
    }
    const lose = () => {
        enemyOption.classList.add('win-gradient');
        points--;
        resultExplanation.innerText = 'you lost';
        score.innerText = points;
    }
    const draw = () => {
        resultExplanation.innerText = 'draw';
    }

    // CHECK FOR RESULT
    const checkForResult = () => {
        if (myOption.classList.contains('paper')) {
            if (enemyOption.classList.contains('paper')) {
                draw();
            } else if (enemyOption.classList.contains('scissors')) {
                lose();
            } else {
                win();
            }
        } else if (myOption.classList.contains('scissors')) {
            if (enemyOption.classList.contains('paper')) {
                win();
            } else if (enemyOption.classList.contains('scissors')) {
                draw();
            } else {
                lose();
            }
        } else {
            if (enemyOption.classList.contains('paper')) {
                lose();
            } else if (enemyOption.classList.contains('scissors')) {
                win();
            } else {
                draw();
            }
        }
    }

    // ADD LISTENERS 
    // ADD LISTENERS 
    // ADD LISTENERS 



    // TO USERS OPTIONS

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            showUserChoice(e);
            getEnemyItem();
            checkForResult();
            showResults();
        })
    })

    // TO NEXT ROUND BUTTON 

    nextRoundButton.addEventListener('click', nextRound);

    // OPEN / CLOSE RULES POPUP

    rulesButton.addEventListener('click', () => {
        rulesPopup.classList.toggle('show-popup');
    })
    closePopup.addEventListener('click', () => {
        rulesPopup.classList.remove('show-popup');
    })

})