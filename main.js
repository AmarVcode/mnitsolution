function menu(){
    let nav = document.getElementById("navbar");
    let logo=document.getElementById("logo")
    
    if(nav.classList.contains("shownav")){
      nav.classList.remove("shownav")
      logo.classList.add("logo")
    }
    else{
        nav.classList.add("shownav")
        logo.classList.remove("logo")

    }
  }




