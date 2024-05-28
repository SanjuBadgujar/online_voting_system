const addElectionLink = document.getElementById('addElectionLink');
const content = document.getElementById('content');

addElectionLink.addEventListener('click', (event) => {
  event.preventDefault();
  content.innerHTML = `
    <form id="addElectionForm">
      <h3>Add Election</h3>
      <label for="electionName">Election Name:</label><br>
      <input type="text" id="electionName" name="electionName" required><br>
      <label for="startDate">Start Date (dd/mm/yyyy): </label><br>
      <input type="text" id="startDate" name="startDate" required><br>
      <label for="endDate">End Date (dd/mm/yyyy):  </label><br>
      <input type="text" id="endDate" name="endDate" required><br>
      <label for="electionImage">Upload Election Image:</label><br>
      <input type="file" id="electionImage" name="electionImage" accept="image/*" required><br>
      <label for="votingInstructions">Voting Instructions:</label><br>
      <textarea id="votingInstructions" name="votingInstructions"></textarea><br>
      <span class="error">Please fill out this field.</span><br>
      <input type="submit" value="ADD ELECTION">  
    </form>
  `;

  // Initialize Flatpickr for start date and end date inputs
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  flatpickr(startDateInput, {
    dateFormat: 'd/m/Y', // Date format (dd/mm/yyyy)
    minDate: 'today', // Minimum selectable date is today
  });
  flatpickr(endDateInput, {
    dateFormat: 'd/m/Y', // Date format (dd/mm/yyyy)
    minDate: 'today', // Minimum selectable date is today
  });

  // Apply styles
  const addElectionForm = document.getElementById('addElectionForm');
  addElectionForm.style.minWidth = '650px';
  addElectionForm.style.margin = '20px auto 0';
  addElectionForm.style.padding = '10px';
  addElectionForm.style.paddingTop = '20px';
  addElectionForm.style.border = '1px solid #ccc';
  addElectionForm.style.borderRadius = '5px';
  addElectionForm.style.backgroundColor = '#f9f9f9';
  addElectionForm.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

  const inputFields = addElectionForm.querySelectorAll('input, textarea');
  inputFields.forEach((field) => {
    field.style.width = '100%';
    field.style.padding = '5px';
    field.style.border = '1px solid #ccc';
    field.style.borderRadius = '3px';
  });

  const errorMessages = addElectionForm.querySelectorAll('.error');
  errorMessages.forEach((error) => {
    error.style.color = 'red';
  });

  const submitButton = addElectionForm.querySelector('input[type="submit"]');
  submitButton.style.backgroundColor = '#007bff';
  submitButton.style.color = '#fff';
  submitButton.style.border = 'none';
  submitButton.style.padding = '10px 20px';
  submitButton.style.borderRadius = '3px';
  submitButton.style.cursor = 'pointer';
  submitButton.style.marginTop = '7px';
  addElectionForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const electionNameInput = document.getElementById('electionName');
    const electionName = electionNameInput.value.trim();

    if (electionName) {
      localStorage.setItem('currentElection', JSON.stringify({
        electionName,
      }));
      window.location.href = `user.html?electionName=${encodeURIComponent(electionName)}`;
    } else {
      alert('Please fill out all fields.');
    }
  });
});
