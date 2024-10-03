function unwrapGift() {
    const joke = document.getElementById('joke');
    const confetti = document.getElementById('confetti');
    joke.classList.add('visible-message');
    joke.classList.remove('hidden-message');
    confetti.classList.remove('hidden');

    // Create confetti effect
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.appendChild(confettiPiece);
    }
}
