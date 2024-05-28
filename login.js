// document.addEventListener('DOMContentLoaded', function () {
//     const loginPopup = document.getElementById('login-popup');
//     const voterLoginButton = document.getElementById('voter-login'); 
//     // const adminLoginButton = document.getElementById('admin-login'); 
//     const signupbutton = this.documentElementById('voter-signup-button');
  
//     if (voterLoginButton) {
//       voterLoginButton.addEventListener('click', (event) => {
//         event.preventDefault(); // Prevent form submission for now
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
// const aadharCard = document.getElementById('aadharCard').value;
// const votingCard = document.getElementById('votingCard').value;

  
// //         // Retrieve registered email and password from local storage
//         const registeredEmail = localStorage.getItem('registeredEmail');
//         const registeredPassword = localStorage.getItem('registeredPassword');
// const registeredAadharCard = localStorage.getItem('registeredAadharCard');
// const registeredVotingCard = localStorage.getItem('registeredVotingCard');

  
//         // Perform client-side validation if needed
//         if (email && password && aadharCard && votingCard) {
//           // Check if entered credentials match registered credentials
//         if (
//           email === registeredEmail &&
//           password === registeredPassword &&
//           aadharCard === registeredAadharCard &&
//           votingCard === registeredVotingCard)
//           {
//             window.location.href = 'userpage.html'; // Redirect to voter dashboard
//           } else {
//             console.error('Invalid credentials'); // Handle invalid credentials
//           }
//         } else {
//           console.error('Email and password are required');   // Handle empty fields
//         }
//       });
//     }
  
//     // if (adminLoginButton) {
//     //   adminLoginButton.addEventListener('click', () => { // Changed from 'login' to 'admin-login'
//     //     window.location.href = 'index.html'; // Redirect to the admin dashboard
//     //   });
//     // }
  
//     if (loginPopup) {
//       loginPopup.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         // const otp = document.querySelector('input[name="otp"]').value;
        
//         // if (email === 'admin@example.com' && password === 'admin123') {
//         //   window.location.href = 'index.html'; // Redirect to admin dashboard
//         // } else {
//         //   window.location.href = 'userpage.html'; // Redirect to voter dashboard
//         // }
  
//         // Example: Perform AJAX request for login
//         fetch('login_endpoint', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         })
//         .then(response => {
//           if (response.ok) {
//             // Redirect or show success message
//             window.location.href = 'index.html'; // Redirect to the dashboard after successful login
//           } else {
//             // Handle login error, show error message, etc.
//             console.error('Login failed');
//           }
//         })
//         .catch(error => {
//           console.error('Error during login:', error);
//         });
//       });
//     }
//   });
  

document.addEventListener('DOMContentLoaded', function () {
  const loginPopup = document.getElementById('login-popup');
  const voterLoginButton = document.getElementById('voter-login-button');
  const signupButton = document.getElementById('voter-signup-button');

  if (voterLoginButton) {
    voterLoginButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission for now
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const aadharCard = document.getElementById('aadharCard').value;
      const votingCard = document.getElementById('electionImage').value;

      // Check if user is registered
      const isRegistered = checkRegistration(email, password, aadharCard, votingCard);

      if (isRegistered) {
        // Retrieve existing emails from localStorage or initialize an empty array
        const loggedInVoters = JSON.parse(localStorage.getItem('loggedInVoters')) || [];

        // Add the new email to the array
        loggedInVoters.push(email);

        // Store the updated array back in localStorage
        localStorage.setItem('loggedInVoters', JSON.stringify(loggedInVoters));

        // Redirect to userhome.html
        window.location.href = 'userhome.html';
      } else {
        // User is not registered, show registration form
        alert('User not registered, redirecting to registration page...');
        window.location.href = 'signup.html';
      }
    });
  }

  if (signupButton) {
    signupButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission for now
      window.location.href = 'signup.html'; // Redirect to registration page
    });
  }

  function checkRegistration(email, password, aadharCard, votingCard) {
    // Perform registration check logic here, you can use localStorage or an API call
    // For demo purposes, assuming registration check logic
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');
    // const registeredAadharCard = localStorage.getItem('registeredAadharCard');
    // const registeredVotingCard = localStorage.getItem('registeredVotingCard');

    if (
      email === registeredEmail &&
      password === registeredPassword 
     
    ) {
      return true;
    } else {
      return false;
    }
  }
});
