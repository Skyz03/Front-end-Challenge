var iosBtn = document.querySelector(".ios-btn");

iosBtn.addEventListener("click", animateBtn);

function animateBtn (){
    iosBtn.classList.toggle("animation");
}

var macBtn = document.querySelector(".mac-btn");

macBtn.addEventListener("click", animatedBtn2);

function animatedBtn2 (){
    macBtn.classList.toggle("animation");
 }