// navbar code
function show(){
    let div= document.getElementById("navbar");
    if(div.classList.contains("shownav")){
        div.classList.remove("shownav");
    }
    else{
        div.classList.add("shownav");

    }
}










var container = document.querySelector(".swiper-container");



var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
      },
     
    
  });