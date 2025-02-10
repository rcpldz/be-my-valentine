// Function to handle the big heart click
function openMessage() {
    document.querySelector('.big-heart').style.display = 'none'; // Hide the big heart
    document.querySelector('.container').style.display = 'block'; // Show the message container
}

// Function for the confetti effect
function confettiBurst() {
    const confettiScript = document.createElement('script');
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.body.appendChild(confettiScript);

    confettiScript.onload = function () {
        confetti();
    };

    alert("Yay! You made me the happiest person alive! ❤️");
}

// Function for the "Try Again" button
function tryAgain() {
    alert("Please try again! ❤️");
}
