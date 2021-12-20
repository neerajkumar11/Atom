var firstImg = document.querySelector(".firstimg");
window.addEventListener("load", function() {
  visibleImg();
  removeLoader();
});

function visibleImg(){
  document.querySelector(".firstimg").classList.remove("hideimg");
  document.querySelector(".secondimg").classList.remove("hideimg");
}

function removeLoader(){
    document.querySelector(".remove").classList.remove("overlay");
    document.querySelector(".remove").innerHTML = "  ";

}
