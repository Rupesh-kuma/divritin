// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const sliderWrapper = document.getElementById('sliderWrapper');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    const progressFill = document.getElementById('progressFill');
    const totalSlides = 4; // Actual slides (excluding clone)
    
    let autoPlayInterval;
    let progressInterval;
    let isTransitioning = false;

    totalSlidesSpan.textContent = totalSlides;

// Update slider
function updateSlider(smooth = true) {
    if (smooth) {
        sliderWrapper.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
    } else {
        sliderWrapper.style.transition = 'none';
    }
    
    const offset = -currentSlide * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;

    // Update dots (for actual slides only)
    const actualSlide = currentSlide >= totalSlides ? 0 : currentSlide;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === actualSlide);
    });

    // Update counter
    currentSlideSpan.textContent = (actualSlide) + 1;

    // Reset progress
    if (smooth) {
        resetProgress();
    }
}

// Next slide - infinite loop with clone
function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    currentSlide++;
    updateSlider(true);
    
    // If we're at the clone slide (position 4), jump back to slide 0
    if (currentSlide >= totalSlides) {
        setTimeout(() => {
            currentSlide = 0;
            updateSlider(false); // Jump instantly without animation
            setTimeout(() => {
                isTransitioning = false;
            }, 50);
        }, 800); // Wait for transition to complete
    } else {
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
}

// Previous slide - infinite loop
function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    // If at first slide, jump to the last real slide
    if (currentSlide === 0) {
        currentSlide = totalSlides;
        updateSlider(false); // Jump instantly to clone position
        setTimeout(() => {
            currentSlide = totalSlides - 1;
            updateSlider(true); // Then animate to last slide
            setTimeout(() => {
                isTransitioning = false;
            }, 800);
        }, 50);
    } else {
        currentSlide--;
        updateSlider(true);
        setTimeout(() => {
            isTransitioning = false;
        }, 800);
    }
}

// Progress bar
function resetProgress() {
    progressFill.style.width = '0%';
    clearInterval(progressInterval);
    
    let progress = 0;
    progressInterval = setInterval(() => {
        progress += 0.5;
        progressFill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, 20);
}

// Auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    clearInterval(progressInterval);
}

function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
    resetProgress();
}

// Controls
nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoPlay();
});

// Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
        restartAutoPlay();
    });
});

// Hover pause
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', stopAutoPlay);
sliderContainer.addEventListener('mouseleave', () => {
    startAutoPlay();
    resetProgress();
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        restartAutoPlay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        restartAutoPlay();
    }
});

// Touch support
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
}, { passive: true });

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    restartAutoPlay();
}, { passive: true });

function handleSwipe() {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
}

// Initialize
startAutoPlay();
resetProgress();
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Vanilla JS se element select karo
//     const settingsSlider = document.querySelector('.settings');

//     // Check karo element exist karta hai ya nahi
//     if(settingsSlider) {
//         // Ab jQuery ke through Slick initialize karo
//         $(settingsSlider).slick({
//             dots: true,
//             infinite: true,
//             speed: 700,
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 4000,
//             arrows: true,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 2
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 1
//                     }
//                 }
//             ]
//         });
//     }
// });

