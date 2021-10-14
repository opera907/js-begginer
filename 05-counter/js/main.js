const btns = document.querySelectorAll('button');
const txt = document.querySelector('.txt');
//let total = 0 ; right place~~
btns.forEach(function(btn){
    //let total = 0; 
    // total이 여깄으면 total-- 랑 total++가 다른 변수를 참조하는 것처럼 반응함
    // lower btn 누르면 0부터 누른만큼 --되고, add도 같음
    //둘이 같은 변수를 참조해서 빼고 더하는 게 아니라, 각각의 변수가 존재해 lower끼리 계속 감소하고, add끼리 계속 증가함
    // so i need to study about closure
    let total = 0;
    btn.addEventListener('click', function() {
        // let total = 0; total이 여깄으면 click event 발생할때마다 total이 0으로 reset 됨 
        // --> 따라서 도출되는 값은 -1 , 0 , 1 뿐임

        if(btn.classList.contains('lower-btn')){
            total--
        } else{
            total++
        }
        changeColor(total)
        txt.innerHTML = total
    })
})

function changeColor(totalTxt){
    if(totalTxt > 0) {
        txt.style.color = "yellow"
    } 
    else if(totalTxt < 0) {
        txt.style.color = "red"
    } 
    else {
        txt.style.color = "#000"
    }
}