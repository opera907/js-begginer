## 케이스 주제

input 에서 값을 받아와 출력하기

## 기능 요구사항

1. 버튼을 누를 시, 쓴 문자가 출력된다
2. 아무것도 적지 않았을 때 경고메세지가 떴다가 사라진다


## 기능 작동 완성

https://opera907.github.io/js-beginner/04-messageOutput/

## 문제

q1. submit 하고 input을 비울때, 

const input = document.querySelector('.input-box')

 1. const val = input.value
    val = ""
    
 2. input.value = ""


   [문제] 1은 안되고 2는 됨. 똑같은 거 아닌가??
   [sol] val에는 사용자가 입력한 string의 값이 들어 있을뿐이고, 1은 그냥 그 입력한 값이 들어있는 변수를 초기화하는 것 뿐.
   우리가 초기화해야할 건,  input 엘리멘트의 value속성이다
   
## 주요 학습 키워드

1. input에서 value받아와서 출력하기
   

## 개선할 점

