function openMessage() {
    document.querySelector('.heart').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

function confettiBurst() {
    // Add confetti effect here
    alert("Yay! You made me the happiest person alive! ❤️");
    // You can use a confetti library like https://www.kirilv.com/canvas-confetti/
}

function tryAgain() {
    alert("Please try again! ❤️");
}