const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('.cont-page');

let menuOpen = false;

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open2');
            menuPage.classList.add('open2');
            menuOpen = true;
        }else{
            menuBtn.classList.remove('open2');
            menuPage.classList.remove('open2');
            menuOpen = false;
        }
    });
}

function closeCard() {
    const header = document.querySelector('.subscribeCard');
    
    // Update background image
    header.style.display = "none";
}

// Array of images
const images = [
    './assets/decor.webp',
    './assets/decor2.webp',
    './assets/decor3.webp'
];

let nextImage = 0;

function doSlideshow() {            
    const header = document.querySelector('.home');

    // Update background image
    header.style.backgroundImage = `url('${images[nextImage]}')`;
    header.style.opacity = 1;
    header.style.backgroundSize = "cover";

    nextImage = (nextImage + 1) % images.length;

    // Fade out after delay
    setTimeout(() => {
        header.style.opacity = 0;
        setTimeout(doSlideshow, 500); // Short delay for smooth transition
    }, 3000); // Time image stays visible
}

// Start the slideshow
doSlideshow();