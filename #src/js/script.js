
document.addEventListener('DOMContentLoaded', function(){ 
  const open = document.querySelector("#terms")
  const popupBg = document.querySelector('.popup')
  const close = document.querySelector('#close')
  const content =document.querySelector('.content')
  
  function closed(){
    popupBg.classList.remove("visible")
    content.classList.remove('overflow')
  }
  open.addEventListener('click', function(){
    popupBg.classList.add("visible")
    content.classList.add('overflow')
   
  })
  close.addEventListener('click', closed)
  popupBg.addEventListener('click', (e)=>{
    if(e.target===popupBg || e.keyCode === 27 ){
      closed()
    }
  
  })
  
  document.addEventListener('keydown',(e)=>{
    if(e.code ==="Escape"){
      closed()
    }
  })
  
})


