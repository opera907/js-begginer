//choose option만들기
//계산함수 하나 그리고 값 인풋해주는 함수
// 배열을 forEach로 나눳다? 그 3개의 값을 어떻게 만든 opt에 넣어주지? 

//계산함수 할일
//1 가격과 인원수 서비스 가격 담기  2 btn누르면 계산(2-1팁값 2-2총금액: 팁값 + 총액 3한명당 낼요금: 총금액 / 인원수) 
//3 로딩영상 -> 값 넣어주고 -> 결과보여주기(인풋함수 실행)
//값들을 배열로 전달한다? 일단 중요한게 총액 / 총인원수 / 할인률 이거를 받아서 (없으면 경고문자 넣어줘야함)-> 계산함수에 넘기고 결과값을 배열로 리턴하고 -> 리턴받은 배열을 input해준다

const optionArray = [
    {
        value: 0.2,
        txt: 'Great - 20%'
    },
    {
        value: 0.1,
        txt: 'Good - 10%'
    },
    {
        value: 0.02,
        txt: 'Bad - 2%'
    }
]
const inputBill = document.querySelector('#input-bill')
const inputUsers = document.querySelector('#input-users')
const inputService = document.querySelector('#input-service')
const form = document.querySelector('#tip-form')
console.log(inputBill)

// 1 팁 선택 옵션 동적생성
optionArray.forEach((elem) => {
    const opt = document.createElement('option')
    opt.value = elem.value
    opt.innerHTML = elem.txt
    inputService.appendChild(opt)
})

// 2 입력한 결과값 받기 


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const ValueBill = inputBill.value;
    const ValueUsers = inputUsers.value;
    const ValueService = inputService.value;

    ///33 없을때 피드백 생성
    const isValue = doFeedback(ValueBill, ValueUsers, ValueService)
    //44 있으면 계산 함수 실행
    // 계산 함수에서 계산된 리턴 값 받아와서
    // loader n초 실행, result 에 값 인풋
    if(!isValue){
        const calcVal = calcTip(Number(ValueBill), Number(ValueUsers), Number(ValueService))
        
        console.log(calcVal)
        const resultTip = document.querySelector('#tip-amount')
        const resultToatal = document.querySelector('#total-amount')
        const resultPerson = document.querySelector('#person-amount')
    
        resultTip.innerHTML = calcVal[0]
        resultToatal.innerHTML = calcVal[1]
        resultPerson.innerHTML = calcVal[2]
    }

})
    ///33 없을때 피드백 생성 (문제: 다중클릭땜에 p계속 생성 / 값이 있을경우에만 true를 넘겨 다음 동작 44계산함수 실행하는 방법)

const doFeedback = function(ValueBill, ValueUsers, ValueService) {
    const divFeedback = document.querySelector('.feedback')
    let isValue = false;
    divFeedback.innerHTML = "" //오잉 이거 넣으니까 다중클릭 해결됐네  ?? 다시 newfunc돌기전에 innerHTML 비워줘서 그런강? 

    newFunction()

    setTimeout(() => {
        divFeedback.style.display = 'none'
    }, 5000)

    return isValue

    function newFunction() {
        if (ValueBill === "" || ValueBill <= "0") {
            addToAlert('bill alert')
        }

        if (ValueUsers === "" || ValueUsers <= "0") {
            addToAlert('user alert')
        }

        if (ValueService === "0") {
            addToAlert('tip amout alert')
        }

        function addToAlert(txt){
            divFeedback.innerHTML += `<p>${txt}</p>`
            divFeedback.style.color = "red"
            divFeedback.style.display = "block"
            isValue = true
        }
    }
 
    
}

function calcTip(ValueBill, ValueUsers, ValueService){
    console.log(`ValueBill : ${ValueBill}, ValueUsers :${ValueUsers}, ValueService: ${ValueService}`)


    const tipAmount = ValueBill * ValueService
    const totalAmount = tipAmount + ValueBill
    const EachAmount =  totalAmount / ValueUsers

    return [tipAmount, totalAmount, EachAmount]

}

