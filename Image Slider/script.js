let slides = document.querySelectorAll(".container .img");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.style.border ="2px solid black";
left.style.width ="25px";
left.style.padding ="0.2rem";
right.style.border ="2px solid black";
right.style.width ="25px";
right.style.padding ="0.2rem";

left.style.display ="inline";
right.style.display ="inline";


left.style.cursor ="pointer";
right.style.cursor ="pointer";

let index=0;
// let interValid = null;

function reload() {
    if(slides.length > 0) {
        slides[index].classList.remove("hide");
    }
}
setInterval(next, 5000);


window.addEventListener("load", () => {
    reload();
  });

  function showslide(i) {

    index = i; // Update index
    if (index >= slides.length) {
        index = 0; // Reset index if it exceeds the length
    } else if (index < 0) {
        index = slides.length - 1; // Set index to last slide if it's less than 0
    }

    slides.forEach(slide => {
        slide.classList.add("hide");
    });
    slides[index].classList.remove("hide");
}

function prev() {// Clear interval
    index--;
    showslide(index);
}

function next() {// Clear interval
    index++;
    showslide(index);
}
