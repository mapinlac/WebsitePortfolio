const texts = ["Matthew Aaron Pinlac"];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';

        (function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            document.getElementById('typing').textContent = letter;
            if (letter.length === currentText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000); // Pause before starting the next text
            } else {
                setTimeout(type, 100);
            }
        }());

document.querySelectorAll('.items').forEach((carousel, index) => {
    const slides = carousel.querySelectorAll('.item');
    const buttons = carousel.querySelectorAll('.button');
    let current = 0;
    let prev = slides.length - 1;
    let next = 1;

    buttons[0].addEventListener('click', () => gotoPrev());
    buttons[1].addEventListener('click', () => gotoNext());

    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
    const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current = number;
        prev = current - 1;
        next = current + 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active', 'prev', 'next');
        }

        if (next === slides.length) {
            next = 0;
        }

        if (prev === -1) {
            prev = slides.length - 1;
        }

        slides[current].classList.add('active');
        slides[prev].classList.add('prev');
        slides[next].classList.add('next');
    };
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    
    if (email === '') {
        alert('Please enter your email.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    if (message === '') {
        alert('Please enter your message.');
        return;
    }
    
    alert('Form submitted successfully!');
    // You can add code here to send the form data to your server
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Scroll handling
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.section');

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Scrolling up
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
});


