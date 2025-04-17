// script.js
document.getElementById("Omnisiah").addEventListener("dblclick", function () {
  // Toggle between "Praise the Emperor" and "Praise the Omnisiah"
  if (this.innerText === "Praise the Emperor.") {
      this.innerText = "⚙️ Praise the Omnisiah ⚙️";
      this.style.color = "#ffa500";
      this.style.textShadow = "0 0 10px orange";
      startTimer(); // Start the timer when clicked
  } else {
      this.innerText = "Praise the Emperor.";
      this.style.color = ""; // Reset color
      this.style.textShadow = ""; // Reset text shadow
      seconds = 0; // Reset the counter
      console.log("Button reset.");
  }
});

let seconds = 0; // Initialize the counter
let timerInterval; // Declare timerInterval globally so we can clear it later

function startTimer() {
  // Set an interval to increase seconds every 1000 milliseconds (1 second)
  timerInterval = setInterval(function () {
      seconds++; // Increase the second count by 1
      console.log(seconds + " seconds have passed.");

      // After 10 seconds, reset the button's content and style
      if (seconds >= 10) {
          resetButton();
          clearInterval(timerInterval); // Stop the timer
          console.log("Timer stopped.");
      }
  }, 1000); // Execute the function every 1 second (1000 milliseconds)
}

function resetButton() {
  const button = document.getElementById("Omnisiah");
  button.innerText = "Praise the Emperor."; // Reset text
  button.style.color = ""; // Reset color
  button.style.textShadow = ""; // Reset text shadow
  seconds = 0; // Reset the counter
  console.log("Button reset.");
}