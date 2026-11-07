# Sweetify - Interactive Web Music Player & Synchronized Lyrics Engine

Sweetify is a front-end web application inspired by modern mobile music streaming services (Spotify). Engineered with vanilla JavaScript, modern CSS3, and HTML5 Audio APIs, Sweetify delivers a responsive mobile-first audio streaming experience complete with timestamp-synchronized lyrics rendering, dynamic playback controls, and animated interface transitions.

## Overview

The application replicates the mobile streaming interface within a standalone web viewport. It includes an authentic loading splash screen, mobile status bar, playback scrubber, album artwork display, and a dedicated full-screen synchronized lyrics engine that highlights lines in real time corresponding to audio track timestamps.

## Features

- Real-Time Synchronized Lyrics: Dynamically tracks `audio.currentTime` and applies active styling and auto-scroll to matching lyric nodes based on millisecond timestamps.
- Audio Playback Engine: HTML5 Audio implementation with auto-preload, play/pause toggling, timeline scrubbing, volume controls, and track progress tracking.
- Mobile Application Shell: Framed mobile device UI complete with realistic status bar indicators (cellular signal, Wi-Fi, clock) and bottom navigation bar.
- Animated Transitions: Smooth CSS keyframe animations for splash screen entry, vinyl/artwork scale effects, and view transitions (Home, Now Playing, Lyrics Screen).
- Responsive Layout: Optimized for mobile viewports while remaining centered and properly scaled on desktop monitors.
- Zero Framework Overhead: Pure vanilla JavaScript (ES6+), semantic HTML5, and modular CSS without heavyweight external libraries.

## Project Structure

```
Sweetify/
├── assets/                  # Media assets (audio tracks, cover art, and brand icons)
│   ├── images/              # Album covers and interface iconography
│   └── swu.mp3              # Audio media file
├── app.js                   # Audio controller, synchronized lyrics engine, and DOM bindings
├── index.html               # Main application markup and screen views
├── styles.css               # Core styling, animations, mobile frame, and lyrics layouts
└── README.md                # Project documentation
```

## Technology Stack

- Markup: Semantic HTML5
- Styling: CSS3 (Flexbox, CSS Grid, Custom Properties, Transitions, Keyframes)
- Typography: Google Fonts (Inter)
- Iconography: Bootstrap Icons 1.11.3
- Logic & Media Engine: Vanilla JavaScript (HTML5 Audio API)

## Getting Started

### Prerequisites

A modern web browser with audio playback support (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ANTARTICA1/Sweetify.git
   cd Sweetify
   ```

2. Open `index.html` in your web browser, or serve it via a local static HTTP server:
   ```bash
   # Using Python 3
   python -m http.server 3000

   # Using npx
   npx serve .
   ```

3. Navigate to `http://localhost:3000` to interact with the player.

## Usage

- Tap the Play button on the Home screen or Now Playing screen to initiate playback.
- Tap the Lyrics card or button to toggle the full-screen synchronized lyrics view.
- Drag the progress bar slider to seek through specific sections of the song.

## Author

Anak Agung Ngurah Krisna Artha Wibawa ([ANTARTICA1](https://github.com/ANTARTICA1))

## License

This project is open-source and available under the MIT License.