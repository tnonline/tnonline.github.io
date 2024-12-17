document.querySelector('.submit-btn').addEventListener('click', function () {
    const emailInput = document.querySelector('input').value.trim();
    const errorMessage = document.getElementById('error');

    // Email validation regex (corrected)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email input
    if (emailInput === "") {
        errorMessage.innerHTML = "Email cannot be empty!";
    } else if (!emailPattern.test(emailInput)) {
        errorMessage.innerHTML = "Please provide a valid email!";
    } else {
        errorMessage.innerHTML = " "; // Clear error message
        alert("Email submitted successfully!");
    }
});

