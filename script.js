function openMessage() {
    document.querySelector('.heart').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

function confettiBurst() {
    const confettiScript = document.createElement('script');
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
    document.body.appendChild(confettiScript);

    confettiScript.onload = function () {
        confetti();
    };

    alert("Yay! You made me the happiest person alive! ❤️");
}


function tryAgain() {
    alert("Please try again! ❤️");
}
