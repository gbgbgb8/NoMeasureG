document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const listenButton = document.getElementById('listen-button');
    const narration = document.getElementById('narration');

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'NO on Measure G',
                        text: 'Vote NO on Measure G, the Napa tax increase with no end.',
                        url: window.location.href
                    });
                    console.log('Thanks for sharing!');
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                alert('Web Share API not supported in your browser.');
            }
        });
    }

    if (listenButton && narration) {
        listenButton.addEventListener('click', () => {
            if (narration.paused) {
                narration.play();
                listenButton.textContent = 'Pause';
            } else {
                narration.pause();
                listenButton.textContent = 'Listen';
            }
        });

        narration.addEventListener('ended', () => {
            listenButton.textContent = 'Listen';
        });
    }
});