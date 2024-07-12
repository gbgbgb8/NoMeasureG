# NO on Measure G: Napa's Never-Ending Tax Hike

## Project Overview

This project is a single-page website designed to inform Napa citizens about the negative implications of Measure G, a proposed 1% sales tax increase in Napa, California. The site provides arguments against the measure, key points of contention, and instructions for voters to submit their own arguments against Measure G.

## Purpose

The main purposes of this website are:

1. To educate Napa voters about the potential drawbacks of Measure G
2. To encourage citizens to vote NO on the measure
3. To provide a downloadable, editable argument that citizens can use to submit their own opposition to the measure
4. To offer a platform for sharing information about Measure G

## Features

- Responsive design for various screen sizes
- Audio narration of the main argument (with play/pause functionality)
- Downloadable RTF file of the argument for easy editing and submission
- Printable version of the argument
- Countdown timer to the voting deadline
- FAQ section for quick information
- Share functionality for easy distribution of the page
- Analytics tracking using Vercel Analytics

## File Structure

- `index.html`: The main HTML file containing the structure of the web page
- `style.css`: CSS file for styling the web page
- `script.js`: JavaScript file handling interactive elements and dynamic content
- `nomeasureg.mp3`: Audio file for narration (not included in the repository)

## Technical Details

### HTML (`index.html`)

The HTML file is structured with semantic tags and includes:
- A header with the main title and subtitle
- A key points section
- The main argument against Measure G
- Download and print buttons
- An FAQ section
- Links to official resources
- Instructions for submitting arguments

### CSS (`style.css`)

The CSS file provides styles for:
- Overall layout and responsiveness
- Color scheme and typography
- Interactive elements (buttons, links)
- Print-specific styles for the printable version

### JavaScript (`script.js`)

The JavaScript file handles:
- Share functionality
- Audio playback control
- RTF file generation and download
- Print functionality
- Countdown timer logic

## Setup and Deployment

This project is designed to be deployed on Vercel, taking advantage of their analytics capabilities. To set up:

1. Clone the repository
2. Ensure you have a `nomeasureg.mp3` file in the root directory for audio narration
3. Deploy to Vercel using their standard deployment process

## Analytics

The project uses Vercel Analytics for tracking page views and user interactions. The necessary scripts are included in the `index.html` file.

## License

MIT, do whatever you want with it.