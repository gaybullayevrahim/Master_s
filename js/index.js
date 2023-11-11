const sliderImg = document.getElementsByClassName("slider_img");
const active = document.querySelector("#product");
for (let img of sliderImg) {
  img.addEventListener("click", () => {
    for (let elem of sliderImg) {
      elem.classList.remove("active-slide-child");
    }
     active.setAttribute("src", `img/image-product-${img.id}.jpg`);
      img.classList.add("active-slide-child");
  });
}
