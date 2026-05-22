// Contact Form Alert
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Message Sent Successfully!');

    form.reset();
});