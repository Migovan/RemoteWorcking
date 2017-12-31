const star = Array.from(document.getElementsByClassName("block__star"));

star.forEach(function (item, i, arr){
item.onclick = function () {
  console.log(item.classList)
  if (Array.from(item.classList).indexOf("block__star_color") === -1) {
      item.classList.add("block__star_color");
  } else {
    item.classList.remove("block__star_color");
  }
}
});


const checkbox = Array.from(document.getElementsByClassName("block__img-checkbox"));

checkbox.forEach(function (item, i, arr){
item.onclick = function () {
  console.log(item.classList)
  if (Array.from(item.classList).indexOf("block__check-mark") === -1) {
      item.classList.add("block__check-mark");
  } else {
    item.classList.remove("block__check-mark");
  }
}
});




// arr.addEventListener("click", function(e) {
//  const colorStar = document.getElementsByClassName("block__star");
//  colorStar[0].className = "block__star_color";
// });





// window.addEventListener("click", function(e) {
//   const colorStar = document.getElementsByClassName("block__star");
//   colorStar[0].className = "block__star_color";
//   colorStar[0,1,2,3].classList.add("color");
// });




// (function() {
//   let colorStar = document.getElementsByClassName("star");
//   style = colorStar[0].style;
//   colorStar[0].className = "color";
// })();
//
// window.addEventListener("keydown", function(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add("playing");
// });
