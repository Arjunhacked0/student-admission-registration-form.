document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    // Simple validation
    if (name && email && age && course) {
        document.getElementById('message').innerText = 'Registration Successful!';
        this.reset(); // Clear the form after submission
    } else {
        document.getElementById('message').innerText = 'Please fill out all fields.';
    }
});
