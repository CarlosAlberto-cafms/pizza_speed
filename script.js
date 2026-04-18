const carrosel = document.querySelector(".carrosel");
const slide = document.querySelector(".slide");
const menuBar = document.querySelector(".menu-bar");
const shadow = document.querySelector(".shadow");
const hamburguer = document.querySelector(".hamburguer");
let pos = 1;
function slideShow() {
  let color = [
    "#8cd289ff",
    "#c75858ff",
    "#5a6eb7ff"
    ];
  let src = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png"
    ];
  
  slide.style.transform = `scale(0) rotate(360deg)`;
  carrosel.style.background = `${color[pos]}`;
  slide.src = src[pos];
  setTimeout(() => {
    slide.style.transform = `scale(1) rotate(0deg)`;
  }, 1200);
  pos++;
  if(pos > 2) {
    pos = 0;
  }
}
setInterval(() => {
  slideShow()
}, 5000);

hamburguer.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  shadow.classList.toggle("active");
});