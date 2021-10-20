const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'] 
//가져와야하는 것들
const btn = document.querySelector('.btn')
const txt = document.querySelector('.txt')
const body = document.querySelector('body')

//btn에 clicl event 바인딩

btn.addEventListener('click', randomHex)

function randomHex() {
    let realHex = "#"

    //랜덤 정수 생성
    for(let i = 0 ; i < 6 ; i++){
        const randomeNum = Math.floor(Math.random() * hexValues.length)
        const randomeIndex = hexValues[randomeNum]
        realHex += randomeIndex
    }
    //결과값 input
   body.style.backgroundColor = realHex
   txt.innerHTML = realHex
}

//211020