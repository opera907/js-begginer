const input = document.querySelector('.input-box')
const btn = document.querySelector('.submit-btn')
const outT = document.querySelector('.output-txt')
const warnT = document.querySelector('.warning-txt')


//1. btn 클릭 시 입력한 (1)문자가 outT에 출력된다 / (2)메세지 전달됐다는 txt 나옴
//2. 아무것도 클릭하지 (1) 경고 메세지 뜸

warnT.style.display = "none"

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const val = input.value

    if (val == "") {
        warnT.style.display = "block"
        setTimeout(() => warnT.style.display = "none", 2000)
    } else {
        outT.innerHTML = val
        input.value = ""
        // input.value 는 되고 왜 val은 안되지?
        console.log()
    }
    //setTimeout() 은 n초동안 지속시켜주는 게 아니라 n초후에 콜백함수를 실행하는 것


    console.log(input.dir)
})
//21-10-22