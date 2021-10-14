// 버튼 클릭 -> data속성 읽어옴 . 가져옴 -> data속성이 ~~라면 store-item에 display-block

const btnWrap = document.querySelector('.sortBtn')
const itemWrap = document.querySelectorAll('.store-item')
const inputBox = document.querySelector('.form-control')

    //console.log(itemWrap)
    
    btnWrap.addEventListener('click', function (e) {
        e.preventDefault()
        const target = e.target
    
        if (!target.classList.contains('btn')) {
            return
        } else {
            const data = target.dataset.filter
            sortItems(data)
        }
    
        function sortItems(data) {
            itemWrap.forEach(function (card) {
                card.style.display = 'none'
                if (data == 'all') {
                    card.style.display = 'block'
                } else if (card.classList.contains(data)) {
                    card.style.display = 'block'
                }
            })
        }
    })
    
    const valueList = []
    inputBox.addEventListener('keyup', function(e) {
        const value = e.target.value.toLowerCase().trim()
        //for fun ㅎ
    //     if(value !== ""){
    //     valueList.push(value)
    //     }
    // console.log(valueList)

        //console.log(value)
        itemWrap.forEach((card) => {
            //console.log(card.textContent)
            if(card.textContent.includes(value)){
                card.style.display = 'block'
            } else{
                card.style.display = 'none'
            }   
        })
    })
