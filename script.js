let techPriestessMode = true;

document.getElementById("Omnisiah").addEventListener("click", function () {
  if (techPriestessMode) {
     // Swap to Tech-Priest mode
     this.innerText = "⚙️ Praise the Omnisiah ⚙️";
     this.style.color = "#0f0f0f";
     this.style.textShadow = "0 0 10px orange";
     document.body.style.backgroundColor = "#960e29"; // Mechanicus vibe
  } else {
   // Swap to Iron Hands mode
   this.innerText = "Praise the Emperor.";
   this.style.color = "silver";
   this.style.textShadow = "0 0 8px black";
   document.body.style.backgroundColor = "#1a1a1a"; // Iron Hands vibe
 // Flip the mode toggle at the end
  }
  techPriestessMode = !techPriestessMode;
});

let clickCounter = 0;
let timer;
let elapsedTime = 0; // Variable to track elapsed time
let actualTime = 0; //Debug Real Time
let clicked = false; // Variable to track if button has been clicked


document.getElementById("uselessButton").addEventListener("click", function () {
  let button = this;

  // Toggle 'clicked' state
  if (!clicked && elapsedTime <= 10) {
    clicked = true;
  } else {
    clicked = false;
  }

  clickCounter += 1;

  // Start or restart timer
  if (clickCounter === 1 || clicked === true) {
    startTimer(); 
  }

  // Handle button messages based on click count
  if (clickCounter === 1) {
    button.innerText = "What did you think would happen?";
  } else if (clickCounter === 5) {
    button.innerText = "You're still clicking?";
  } else if (clickCounter === 10) {
    button.innerText = "Okay, now you're just being stubborn.";
  } else if (clickCounter === 15) {
    button.innerText = "Seriously. There's nothing here.";
  } else if (clickCounter === 20) {
    button.innerText = "Fine. You win.";
  } else if (clickCounter === 25) {
    button.innerText = "Or do you?";
  } else if (clickCounter >= 30 && clickCounter < 100) {
    button.innerText = `Clicks: ${clickCounter}`;
  } else if (clickCounter === 100 && clickCounter < 150) {
    button.innerText = "Seriously?!";
  } else if (clickCounter === 200) {
    button.innerText = "Have you tried praising the Omnisiah yet?";
  } else if (clickCounter === 150) {
    button.innerText = "...";
  }
  else if (clickCounter === 250) {
    buttton.innerText = "[you:did]>[you:can]=[creator:site:respect]";
  }
});

function startTimer() {
  // Clear any existing timer
  if (timer) clearInterval(timer);

  elapsedTime = 0;

  timer = setInterval(() => {
    elapsedTime += 1;
    actualTime += 1;
    console.log(`Elapsed: ${elapsedTime}, Actual: ${actualTime}`);

    if (elapsedTime >= 10 || !clicked) {
      clickCounter = 0;
      document.getElementById("uselessButton").innerText = "Click Me.";
      clearInterval(timer);
      clicked = false;
    }
  }, 1000);
}
