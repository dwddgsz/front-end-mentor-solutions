document.addEventListener('DOMContentLoaded', ()=> {
    const button = document.getElementById('button')
    const input = document.getElementById('email-input')
    const label = document.getElementById('email-label');
    const errorMessage = document.getElementById('error-message');
    const errorIcon = document.getElementById('error-icon')
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        if(input.value === '' || !input.value.includes('@')){
            errorMessage.innerText='Please provide a valid email';
            errorMessage.classList.remove('hide');
            errorMessage.classList.remove('succes');
            errorIcon.classList.remove('hide');
            return;
        }
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('succes');
        errorMessage.innerText='Thank You!';
    })

    input.addEventListener('focus',()=>{
        label.classList.add('focus')
    })
    input.addEventListener('focusout',()=>{
        errorMessage.classList.add('hide');
        errorIcon.classList.add('hide');
    })
})