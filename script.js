document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');

    
    
{
    if ( email && password && confirmPassword) { // Check if all fields are filled
        if (password === confirmPassword) { // Check if passwords match
            // Registration successful, redirect to home page
            window.location.href = 'Homepage.html'; // Change this to your home page path
        } else {
            message.textContent = 'Passwords do not match!';
            message.style.color = 'red';
        }
    } else {
        message.textContent = 'Please fill out all fields!';
        message.style.color = 'red';
}

}
    
    // Here you can add code to handle the registration process,
    // such as sending the data to your server.
});

function goToHomePage() {
    window.location.href = 'Homepage.html';
}
