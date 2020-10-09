document.addEventListener('DOMContentLoaded', () => {
    const questionContainers = document.querySelectorAll('.question-container');
    const questions = document.querySelectorAll('.question');

    const clearContainers = () => {
        questionContainers.forEach(container => {
            container.classList.remove('active');
        })
    }
    questions.forEach(element => {
        element.addEventListener('click', (event) => {
            const targetClassList = event.target.closest('.question-container').classList;
            let wasActive = (targetClassList.contains('active'));
            clearContainers();
            if (wasActive === true) {
                return;
            } else {
                targetClassList.add('active');
            }
        })
    })
})