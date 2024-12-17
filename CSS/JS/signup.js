document.getElementById('signup-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    const formElements = {
      name: document.getElementById('name'),
      email: document.getElementById('email'),
      password: document.getElementById('password'),
      confirmPassword: document.getElementById('confirm-password')
    };

    // Error message containers
    const errorMessages = {
      name: document.getElementById('name-error'),
      email: document.getElementById('email-error'),
      password: document.getElementById('password-error'),
      confirmPassword: document.getElementById('confirm-password-error')
    };

    let isValid = true;

    // Name validation
    if (formElements.name.value.trim() === "") {
      errorMessages.name.textContent = "Name is required.";
      isValid = false;
    } else {
      errorMessages.name.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formElements.email.value.trim())) {
      errorMessages.email.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      errorMessages.email.textContent = "";
    }

    // Password validation
    if (formElements.password.value.trim().length < 6) {
      errorMessages.password.textContent = "Password must be at least 6 characters.";
      isValid = false;
    } else {
      errorMessages.password.textContent = "";
    }

    // Confirm password validation
    if (formElements.password.value.trim() !== formElements.confirmPassword.value.trim()) {
      errorMessages.confirmPassword.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      errorMessages.confirmPassword.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      return; // Form will not be submitted
    }

    // If everything is valid, reset the form and show success message (or submit data)
    alert('Signed up successfully! Redirecting to login page...');
    window.location.href = 'login.html'; // Redirect to login page
  });