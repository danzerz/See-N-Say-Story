// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// subject array
const subjects = [
  "The cat",
  "A dog",
  "My neighbor",
  "The teacher",
  "An astronaut",
];
// verbs array
const verbs = ["jumps", "runs", "eats", "sleeps", "laughs"];
const adjectives = ["quickly", "loudly", "happily", "sadly", "angrily"];
const objects = [
  "a ball",
  "the cake",
  "the computer",
  "a spaceship",
  "the book",
];
// places array
const places = [
  "in the park",
  "at school",
  "on the moon",
  "under the bed",
  "in the car",
];

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Varaible to store generated text
let subject = "";
let verb = "";
let adjective = "";
let object = "";
let place = "";
let textToSpeak = "";

// Get the buttons
const speakButton = document.getElementById("speakButton");
const subjectButton = document.getElementById("subjectButton");
const verbButton = document.getElementById("verbButton");
const adjectiveButton = document.getElementById("adjectiveButton");
const objectButton = document.getElementById("objectButton");
const placeButton = document.getElementById("placeButton");
const stringOutput = document.getElementById("stringOutput");

/* Functions
-------------------------------------------------- */
function speak(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function updateString() {
  // Updates the texttospeak varialbe
  textToSpeak = `${subject} ${verb} ${adjective} with ${object} ${place}.`;
  // Display the story on the webpage
  stringOutput.textContent = textToSpeak;
}

/* Event Listeners
-------------------------------------------------- */

// Event listeners for each button when pressed and randomize the strings in array
subjectButton.addEventListener("click", () => {
  subject = subjects[Math.floor(Math.random() * subjects.length)];
  // updates the new subject string
  updateString();
});
verbButton.addEventListener("click", () => {
  verb = verbs[Math.floor(Math.random() * verbs.length)];
  // Update the story with a new verb string
  updateString();
});

adjectiveButton.addEventListener("click", () => {
  adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  // / Update the story with a new adjective string
  updateString();
  e;
});

objectButton.addEventListener("click", () => {
  object = objects[Math.floor(Math.random() * objects.length)];
  // Update the story with a new object string
  updateString();
});

placeButton.addEventListener("click", () => {
  place = places[Math.floor(Math.random() * places.length)];
  // Update the story after new place string
  updateString();
});
//using onclick eventhandler to call the speak function
speakButton.onclick = function () {
  speak(textToSpeak); // Speak the generated sentence
};

// call the resetbutton using id and storing it in a variable
const resetButton = document.getElementById("resetButton");

/* Event Listeners
-------------------------------------------------- */

// Eventlistener for the reset button
resetButton.addEventListener("click", resetString);

// Function to reset the story
function resetString() {
  // Reset all the parts of the story
  subject = "";
  verb = "";
  adjective = "";
  object = "";
  place = "";
  textToSpeak = "";

  // Clear the displayed story
  stringOutput.textContent = "Story has been reset.";

  // Optionally, stop any ongoing speech synthesis
  if (synth.speaking) {
    synth.cancel();
  }
}
