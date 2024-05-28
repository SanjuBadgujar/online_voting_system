document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Store email and password in local storage
      localStorage.setItem('registeredEmail', email);
      localStorage.setItem('registeredPassword', password);
  
      // Redirect to login page after signup
      window.location.href = 'login.html';
    });
  });
  