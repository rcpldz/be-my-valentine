// Function to reveal the message and play music
function openMessageAndPlayMusic() {
    document.querySelector('.heart').style.display = 'none'; // Hide the heart
    document.querySelector('.message').style.display = 'block'; // Show the message container

    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play().catch(function(error) {
            console.log('Playback error:', error);
        });
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
            spread: 100,
        });
    };

    alert("Yay! You made me the happiest person alive! ❤️");
}

// Function for the "Try Again" button
function tryAgain() {
    alert("Please try again! ❤️");
}
