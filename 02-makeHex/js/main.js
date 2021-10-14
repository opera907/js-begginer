const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const txt = document.querySelector('.txt');

btn.addEventListener('click', makeHex);

function makeHex(){
    const hexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hex = '#';
    
    for(i=0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * hexCode.length)
        hex += hexCode[randomIndex]
    }
    showHex(hex)
}
function showHex(hex){
    body.style.backgroundColor = hex;
    txt.innerHTML = hex;
}