// Array of random movie quotes
const quotes = [
    "Do, or do not. There is no try. – Yoda",
    "I am Iron Man. – Tony Stark",
    "May the Force be with you. – Various Characters",
    "You're a wizard, Harry. – Hagrid"
];

// Function to generate a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("random-quote").innerText = quotes[randomIndex];
}

// Trivia Quiz
const correctAnswer = 'A'; // Change to the correct answer for your quiz

function checkAnswer(selectedOption) {
    if (selectedOption === correctAnswer) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Wrong! Try again.";
    }
}
