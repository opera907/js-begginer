const btns = document.querySelectorAll('.btn')
const customerImg = document.querySelector('#customer-img')
const customerName = document.querySelector('#customer-name')
const customerTxt = document.querySelector('#customer-text')
const customerList =[];
let index = 0;


btns.forEach(function(btn){
    //let index = 0; 여기에 놓으니까 또 if문끼리 각자 참조하네 
    btn.addEventListener('click', function(){
        if(btn.classList.contains('prevBtn')){
            if(index == 0){
                index = customerList.length
            }
            index--
            inputTxt(index)
        }
        if(btn.classList.contains('nextBtn')){
            if(index == customerList.length - 1){
                index = -1
            }
            index++
            inputTxt(index)
        }
    })
})

function setCustomer(img, name, txt){
    this.img = img;
    this.name = name;
    this.txt = txt;
}
function createCustomer(img, name, txt){
    let imgSrc = `img/customer-${img}.jpg`
    let custom = new setCustomer(imgSrc, name, txt)
    customerList.push(custom)
}
createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
//console.log(customerList[0].img)

function inputTxt(i){
    customerImg.src = customerList[i].img;
    customerName.innerHTML = customerList[i].name;
    customerTxt.innerHTML = customerList[i].txt;
} 
inputTxt(0)