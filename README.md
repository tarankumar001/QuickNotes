# Quick Notes

A simple and lightweight Chrome extension for saving and managing quick notes directly from your browser.

## Features

- **Quick Note Saving** - Save notes with a single click
- **Local Storage** - All notes are saved locally using Chrome Storage API
- **Timestamp Recording** - Each note automatically records the date and time it was created
- **Easy Deletion** - Delete individual notes with a single click
- **Clean Interface** - Simple and intuitive user interface

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the QuickNotes folder
5. The extension will appear in your Chrome toolbar

## Usage

1. Click the Quick Notes icon in your Chrome toolbar
2. Type your note in the text area
3. Click "Save note" to add it to your notes list
4. Your notes appear below with timestamps
5. Click the "×" button to delete any note

## Project Structure

- `index.html` - Extension popup interface
- `index.js` - Main application logic
- `index.css` - Styling and layout
- `manifest.json` - Chrome extension configuration

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Chrome Storage API
- Chrome Extensions Manifest V3

## Requirements

- Google Chrome browser
- No external dependencies

## Notes

- Data is stored locally in your browser and never sent to external servers
- Each note has a unique ID and timestamp
- To uninstall, go to `chrome://extensions/` and click the remove button

## License

Feel free to use and modify this project as needed.
