//변수 import 어떻게해?!!
/// 1 이미지 리스트를 만든다
// 2 클릭된 이미지의 src 를 받아서 넣어준다
// 3 클릭된이미지의 src 의 이미지 리스트의 인덱스를 찾아준다
// 4 버튼 클릭시 해당 인덱스를 -- or ++ 해준다

//const items = document.querySelectorAll('.store-item')
const cardItemWrap = document.querySelector('#store-items')
const cardImgWrap = document.querySelectorAll('.store-img')
const modalWrap = document.querySelector('.lightbox-container')
const modalItem = document.querySelector('.lightbox-item')
const modalBtnsPrev = document.querySelector('.btnLeft')
const modalBtnsnext = document.querySelector('.btnRight')
const modalWrapClose = document.querySelector('.lightbox-close')
const cardImgSrcs = []
let counterIndex = 0

cardImgWrap.forEach((cardImg) => {
    let imgSrc = cardImg.src

    cardImgSrcs.push(imgSrc)
})
console.log(cardImgSrcs)

cardItemWrap.addEventListener('click', (e) => {
    const targetSrc = e.target.src;
    //console.dir(e.target)
    if(!e.target.classList.contains('store-img')){
        return
    } else{
        modalWrap.classList.add('show')
        modalItem.style.backgroundImage = `url(${targetSrc})`
    
        counterIndex = cardImgSrcs.indexOf(targetSrc)
       // console.log(`currentIndex: ${counterIndex}, src: ${targetSrc}`)
    }

})

modalBtnsPrev.addEventListener('click', prev)
modalBtnsnext.addEventListener('click', next)

function prev() {
    counterIndex--
    //const lowerCard = cardImgSrcs[counterIndex]
    //console.log(counterIndex)
    console.log(`prev: ${cardImgSrcs[counterIndex]}`)
    if(counterIndex == -1){
        counterIndex = cardImgSrcs.length - 1
    }
    modalItem.style.backgroundImage = `url(${cardImgSrcs[counterIndex]})`
}
function next(){
    counterIndex++
    if(counterIndex == cardImgSrcs.length){
        counterIndex = 0;
    }
    modalItem.style.backgroundImage = `url(${cardImgSrcs[counterIndex]})`

}

modalWrapClose.addEventListener('click', () => {
    modalWrap.classList.remove('show')
})


//tempt 1
// items.forEach((item) => {
//     item.addEventListener('click', function (e) {
//         //카드 클릭 -> 모달랩 block -> 모달이미지 해당 url
//         // 닫기버튼 -> 모달랩 display none
//         const target = e.target
//         const src = target.src


//         modalWrap.classList.add('show')
//         if (target.classList.contains('store-img')) {
//             modalImg.style.backgroundImage = `url(${src})`
//         }

//     })
//     slideClick(item)

// })
// function slideClick(item) {
//     const nextItem = item.nextElementSibling
//     const prevItem = item.previousElementSibling
//     //console.dir(prevItem)
//     modalWrapBtns.forEach((btn) => {
//         if(btn.classList.contains('btnLeft')){
//             //modalImg.style.backgroundImage = `url(${prevItem.src})`
//             console.log('next')
//         } else{
//            //modalImg.style.backgroundImage = `url(${nextItem.src})`
//            console.log('prev')
//         }
//     })
// }

//  modalWrapClose.addEventListener('click', () => {
//      modalWrap.classList.remove('show')
//  })
