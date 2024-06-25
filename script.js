document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('share-button').addEventListener('click', async () => {
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
});