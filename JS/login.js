document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Clear previous errors
    document.querySelector('#username-error').textContent = '';
    document.querySelector('#password-error').textContent = '';
  
    let isValid = true;
  
    // Validate username
    if (!username) {
      document.querySelector('#username-error').textContent = 'Username is required.';
      isValid = false;
    }
  
    // Validate password
    if (password.length < 6) {
      document.querySelector('#password-error').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    // If validation fails, stop form submission
    if (!isValid) {
      return;
    }
  
    // Proceed with login
    alert('Login successful!');
    // Redirect to dashboard or next page
    window.location.href = 'login.html';
  });
  