import { nextImage, showSlide } from "./carousel";
import "./styles.css";

const cat = "cat";

for (let index = 0; index < 10; index++) {
  console.log(cat);
}

let i = 0;
showSlide(0);

const right = document.querySelector(".right");
right.addEventListener("click", () => {
  i = nextImage(i);
});
