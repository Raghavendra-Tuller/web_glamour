const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === "" || email === "" || message.length < 10){
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields correctly.";
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        formMessage.style.color = "red";
        formMessage.innerText = "Please enter a valid email.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerText = "Message sent successfully!";
    form.reset();
});