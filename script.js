// Function to handle the heart click
function openMessage() {
    const heart = document.querySelector('.heart'); // The clickable heart
    const message = document.querySelector('.message'); // The message container

    if (heart && message) {
        heart.style.display = 'none'; // Hide the heart
        message.style.display = 'block'; // Show the message
    } else {
        console.error("Heart or message element is missing!");
    }
}

// Function for the confetti effect
function confettiBurst() {
    const confettiScript = document.createElement('script');
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.body.appendChild(confettiScript);

    confettiScript.onload = function () {
        confetti({
            particleCount: 200,
            spread: 100
        });
    };

    alert("Yay! You made me the happiest person alive! ❤️");
}

// Function for the "Try Again" button
function tryAgain() {
    alert("Please try again! ❤️");
}
