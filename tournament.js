// Array of 16 choices (you can modify this to suit your needs)
let choices = [
    'Sharpie', 'Crayon', 'Ice Cream', 'Salt Water Taffy',
    'Cool Ranch Doritos', 'New Years Eve', 'Thanksgiving', 'Being Employed',
    'Pen', 'Pencil', 'Brownies', 'Fudge',
    'Nacho Cheese Doritos', 'Your Brirthday', 'Christmas', 'Being Retired'
];

// Round data
let currentRound = [];
let roundNumber = 1;

// Result storage
let winners = [];

// Get HTML elements
const choice1Btn = document.getElementById('choice1');
const choice2Btn = document.getElementById('choice2');
const resultDiv = document.getElementById('result');

// Start the game
function startGame() {
    // Shuffle choices at the start of the game
    choices = shuffle(choices);
    // Start first round
    currentRound = choices;
    showNextPair();
}

// Shuffle the choices (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Display the next pair of choices
function showNextPair() {
    if (currentRound.length > 1) {
        choice1Btn.textContent = currentRound[0];
        choice2Btn.textContent = currentRound[1];
    } else if (winners.length > 1) {
        // Move to next round if there are winners
        currentRound = winners;
        winners = [];
        roundNumber++;
        showNextPair();
    } else {
        // Game finished, show final winner
        resultDiv.textContent = `Your favorite is: ${winners[0]}`;
        document.getElementById('game').style.display = 'none';
    }
}

// Handle the user's choice
function handleChoice(choice) {
    // Add winner to the list
    winners.push(currentRound[choice]);
    // Remove the current pair
    currentRound.splice(0, 2);
    // Show the next pair
    showNextPair();
}

// Event listeners for the buttons
choice1Btn.addEventListener('click', () => handleChoice(0));
choice2Btn.addEventListener('click', () => handleChoice(1));

// Start the game
startGame();
