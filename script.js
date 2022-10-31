let slideIndex = 0;
let slides = document.getElementsByClassName("hero-image");
let dots = document.getElementsByClassName("dot-btn");
autoSlide();

function nextSlide(n) {
    manualSlide(slideIndex += n);
}

function dotSlide(n) {
    manualSlide(slideIndex = n);
}

function manualSlide(n) {
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function autoSlide() {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlide, 6000);
}