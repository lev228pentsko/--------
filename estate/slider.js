const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".b");
const bottom = document.getElementById("bottom");

let currentsSlideIndex = 0;

const switchStroke = [];



function createSwitchStroke () {
    const div = document.createElement("div")
    div.className = "switch__stroke";
    bottom.appendChild(div);
    switchStroke.push(div);
}

function addSwitch () {
    slides.forEach(createSwitchStroke);
    switchStroke[0].classList.add("active");
    switchStroke.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index))
    })
}

function addActiveSwitch () {
    switchStroke[currentsSlideIndex].classList.add("active");
}

function removeActiveSwitch () {
    switchStroke[currentsSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentsSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentsSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveSwitch();
    currentsSlideIndex = slideIndex;
    addActiveSwitch();
    showSlide();
}

function nextSlide() {
    let newSlidesIndex = currentsSlideIndex + 1;
    if(newSlidesIndex > slides.length - 1) {
        newSlidesIndex = 0;
    }

    changeSlide(newSlidesIndex);
}

function previousSlide(){
    let newSlidesIndex = currentsSlideIndex - 1;

    if(newSlidesIndex < 0){
        newSlidesIndex = slides.length - 1;
    }

    changeSlide(newSlidesIndex);
}
addSwitch();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);