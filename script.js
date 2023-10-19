document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  const journalForm = document.getElementById("journalForm");

  // Listen for form submission
  journalForm.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get user input values
    const thoughts = document.getElementById("thoughts").value;
    const mood = document.getElementById("mood").value;
    const activities = document.getElementById("activities").value;

    // Validate that thoughts are not empty
    if (thoughts.trim() === "") {
      alert("Please enter your thoughts.");
      return;
    }

    // Create a journal entry object
    const entry = {
      thoughts,
      mood,
      activities,
      timestamp: new Date().toLocaleString(),
    };

    // Store the entry in localStorage
    saveJournalEntry(entry);

    // Clear the form
    journalForm.reset();

    // Optionally, you can provide feedback to the user (e.g., show a success message)
    alert("Journal entry saved successfully!");
  });

  // Function to save a journal entry to localStorage
  function saveJournalEntry(entry) {
    // Check if there are existing entries in localStorage
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    // Add the new entry
    entries.push(entry);

    // Save the updated entries back to localStorage
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    // Update the insights list
    console.log("Updating insights...");
  }
});
