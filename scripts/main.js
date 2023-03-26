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













var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
      },
  });

  var mySwiper2 = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
      },
  });