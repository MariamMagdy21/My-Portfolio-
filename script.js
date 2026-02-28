const textElement = document.getElementById('typing');
const professions = ["IT Student", "Network Engineer", "Web Developer", "Cybersecurity Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    let fullText = professions[i];
    if (isDeleting) {
        currentText = fullText.substring(0, j - 1);
        j--;
    } else {
        currentText = fullText.substring(0, j + 1);
        j++;
    }

    textElement.innerHTML = currentText;

    let typeSpeed = 150;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && j === fullText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % professions.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const icon = menuIcon.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});