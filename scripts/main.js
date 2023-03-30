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




 


// responsive code

let body=document.getElementsByTagName("body")[0];
body=body.offsetWidth


if(body >= 500){
  var mySwiper2 = new Swiper('.swiper-container2', {
        loop: true,
        slidesPerView: 2,
        autoplay: {
            delay: 3000,
          },
      });
}
if(body <500){
    var mySwiper2 = new Swiper('.swiper-container2', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
          },
      });
}