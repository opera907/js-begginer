const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

const btns = document.querySelectorAll('.btn')
const slider = document.querySelector('.img-container')
let i = 0;
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if(btn.classList.contains('btn-left')){
      if(i == 0){
        i = pictures.length
      }
      i--
      
      slider.style.backgroundImage = `url("img/${pictures[i]}.jpeg")`
    } 
    else if (btn.classList.contains('btn-right')){
      if(i == pictures.length - 1){
        i = -1
      }
      i++
      
      slider.style.backgroundImage = `url("img/${pictures[i]}.jpeg")`
    }
  })
})