document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('share-button');
    const listenButton = document.getElementById('listen-button');
    const narration = document.getElementById('narration');
    const downloadButton = document.getElementById('download-button');
    const printButton = document.getElementById('print-button');
    const darkmode = new Darkmode({
        bottom: '32px', // default: '32px'
        right: 'unset', // default: '32px'
        left: '32px', // default: 'unset'
        time: '0.5s', // default: '0.3s'
        mixColor: '#fff', // default: '#fff'
        backgroundColor: '#fff',  // default: '#fff'
        buttonColorDark: '#100f2c',  // default: '#100f2c'
        buttonColorLight: '#fff', // default: '#fff'
        saveInCookies: true, // default: true
        label: '🌓', // default: ''
        autoMatchOsTheme: true // default: true
    });

    // Hide the default darkmode toggle
    darkmode.showWidget();
    const darkmodeToggle = document.querySelector('.darkmode-toggle');
    if (darkmodeToggle) {
        darkmodeToggle.style.display = 'none';
    }

    // Use our custom toggle button
    const customDarkmodeToggle = document.getElementById('darkmode-toggle');
    if (customDarkmodeToggle) {
        customDarkmodeToggle.addEventListener('click', () => {
            darkmode.toggle();
        });
    }


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

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const rtfContent = `{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0\\froman\\fprq2\\fcharset0 Times New Roman;}}
{\\colortbl;\\red0\\green0\\blue0;}
\\viewkind4\\uc1\\pard\\cf1\\f0\\fs24
Measure G proposes to increase Napa's sales tax from 7.75% to 8.75%, deceptively framed as funding for "Public Safety, City Services, and Critical Infrastructure." However, this measure is fraught with issues that make it detrimental to our community.\\par
\\par
Firstly, Measure G lacks a sunset clause, meaning this tax increase can continue indefinitely. This sets a dangerous precedent for future tax measures to become permanent burdens on Napa's taxpayers.\\par
\\par
Secondly, the voter guide for Measure G misleads the public by suggesting that the funds will be earmarked for specific needs. In reality, the measure directs the revenue into the City's General Fund, which means the money can be spent on anything, including wasteful projects and administrative bloat. Additionally, budgets are often shuffled creatively to deplete allocations from their intended purposes. For instance, a building maintenance project might be reclassified as Public Safety to free up funds for retired annuitants, part-time help, or other duplicative positions and projects. This lack of transparency and accountability means there are no guarantees the funds will address the critical needs highlighted in the measure's promotional materials.\\par
\\par
Moreover, Napa citizens are already overtaxed, and the government's spending is rife with inefficiencies. Increasing the sales tax by an additional 1% only serves to exacerbate the financial strain on households without ensuring that the funds will be used effectively. There is a significant risk that these additional revenues will simply fuel further bureaucratic expansion and mismanagement.\\par
\\par
In summary, Measure G imposes an indefinite tax increase, misleads voters about fund allocation, facilitates budget manipulation, and contributes to government waste. I am voting NO on Measure G to protect Napa's taxpayers and ensure responsible government spending.\\par
\\par
Printed Name: ________________________________________\\par
\\par
Signature: ___________________________________________\\par
}`;

            const blob = new Blob([rtfContent], { type: 'application/rtf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'argument_against_measure_g.rtf';
            link.click();
            URL.revokeObjectURL(link.href);
        });
    }

    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

    function updateCountdown() {
        const deadline = new Date("2024-11-05T20:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m until voting ends`;

        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "Voting has ended";
        }
    }

    const countdownTimer = setInterval(updateCountdown, 60000);
    updateCountdown(); // Initial call
});