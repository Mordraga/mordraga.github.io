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
function growImage() {
  const image = document.getElementById("CollageImages");
  image.style.transition = "transform 0.3s ease";
  image.style.transform = "scale(1.5)";
}
// Make only one image expand at a time
document.querySelectorAll(".CollageImages img").forEach(function(img) {
  img.addEventListener("click", function () {
    const expanded = document.querySelector(".CollageImages img.expanded");

    // If there's an already expanded image and it's not the one clicked, shrink it
    if (expanded && expanded !== this) {
      expanded.classList.remove("expanded");
    }

    // Toggle the clicked image
    this.classList.toggle("expanded");
  });
});
