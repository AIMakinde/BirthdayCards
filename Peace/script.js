const card = document.querySelector('.card');
const confettiCanvas = document.getElementById('confetti-canvas');

function flipCard() {
  card.classList.toggle('flipped');
  launchConfetti();
}

function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 9999
  });
}
