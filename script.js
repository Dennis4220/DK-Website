document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        document.getElementById('response').innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
    } else {
        document.getElementById('response').innerHTML = `<p>Please fill out all fields before submitting.</p>`;
    }
});
