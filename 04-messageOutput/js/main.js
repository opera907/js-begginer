const form = document.querySelector('form')
const warnTxt = document.querySelector('.warning-txt')

warnTxt.style.display = 'none';
form.addEventListener('submit', function(e){
    e.preventDefault()

    const input = document.querySelector('.input-box')
    const messageBox = document.querySelector('.output-txt')
    let inputValue = input.value
    
    if(inputValue === "") {
        warnTxt.style.display = 'block';
        setTimeout(() => {
            warnTxt.style.display = 'none';
        }, 2000);
    } else {
        messageBox.innerHTML = inputValue;
        input.value = ""
    }


})