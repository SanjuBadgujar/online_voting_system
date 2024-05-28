document.addEventListener('DOMContentLoaded', () => {
    const addElectionForm = document.getElementById('addElectionForm');
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

    addElectionForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const electionNameInput = document.getElementById('electionName');
        const electionName = electionNameInput.value.trim();

        if (electionName) {
            // Get existing elections from localStorage or initialize an empty array
            let existingElections = JSON.parse(localStorage.getItem('allElections')) || [];
            
            // Check if the election name already exists
            const isDuplicate = existingElections.some(election => election.electionName === electionName);
            
            if (!isDuplicate) {
                // Add the new election to the existing elections array
                existingElections.push({ electionName });
                
                // Save all elections back to localStorage
                localStorage.setItem('allElections', JSON.stringify(existingElections));

                // Show success message or update UI as needed
                alert('Election added successfully!');
                // Optionally, you can update the UI here to show the newly added election in the list without redirecting.
            } else {
                alert('Election name already exists. Please choose a different name.');
            }
        } else {
            alert('Please fill out all fields.');
        }
    });
});
