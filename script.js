document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('share-button').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Argument Against Measure G',
                    text: 'Read why you should vote NO on Measure G.',
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