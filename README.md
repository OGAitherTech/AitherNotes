# Aither Notes v5.2

A fast, private, local-first notes app for iPhone, iPad, desktop browsers, and desktop computers.

## v5.2 improvements

- Added note duplication from the editor
- Added live word and character counts while writing
- Added one-tap search clearing
- Added JSON backup importing with duplicate-safe note IDs
- Improved exported backup metadata
- Added Cmd/Ctrl+N to create a note from the keyboard
- Improved mobile editor action layout
- Updated the About section to v5.2
- Kept the native desktop app, iPhone layout, themes, offline support, and local storage
- No emoji-based interface controls

## Desktop app

The native desktop project is in `desktop/`.

Requirements:

- Node.js
- npm

Run it locally:

```bash
cd desktop
npm install
npm start
```

Build installers/packages:

```bash
cd desktop
npm install
npm run build
```

Build targets:

- Windows: NSIS installer and portable executable, x64 and ARM64
- macOS: DMG, x64 and ARM64
- Linux: AppImage and DEB, x64

The desktop app uses the same Aither Notes web interface and local browser storage. Your notes are not uploaded to a server by the desktop app.

## Features

- Create, edit, and delete notes
- Automatic local saving
- Duplicate notes
- Pin notes
- Favorite notes
- Instant search with clear control
- Personal, School, and Ideas folders
- Sort by updated date
- Live word and character count while editing
- Light, dark, or system appearance
- Custom accent color
- Adjustable editor text size
- Export notes as JSON backups
- Import JSON backups without duplicating existing note IDs
- Cmd/Ctrl+K search shortcut
- Cmd/Ctrl+N new-note shortcut
- Responsive phone, tablet, and desktop layouts
- Installable web app support
- Offline support
- Native desktop app
- No account or backend required

## iPhone

Open the GitHub Pages version in Safari, use Share, choose Add to Home Screen, and launch Aither Notes from the Home Screen. Aither Notes supports iOS safe areas and touch-friendly controls.

## Privacy

Notes and preferences are stored locally on the device. Aither Notes does not require an account or send notes to a server. Clearing browser or website data can remove local notes.

## Project files

- `index.html` — application structure and PWA metadata
- `style.css` — responsive interface and iOS-specific styling
- `app.js` — notes, search, folders, settings, backups, storage, and interactions
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — offline caching
- `desktop/main.js` — Electron desktop window
- `desktop/preload.js` — secure desktop preload
- `desktop/icon.svg` — desktop app icon
- `desktop/package.json` — desktop scripts and build configuration

## Version history

### v5.2 — September 1, 2026
- Added note duplication.
- Added live word and character counts.
- Added backup importing and improved export metadata.
- Added a clear-search control.
- Added Cmd/Ctrl+N for quick note creation.
- Polished mobile editor controls.

### v5.1 — September 1, 2026
- Polished the native desktop experience.
- Added desktop icon and better startup behavior.
- Added spellcheck and safe external-link handling.
- Improved reload behavior.
- Expanded Windows, macOS, and Linux architecture targets.
- Improved installer configuration.

### v5 — August 31, 2026
- Added the Aither Notes desktop application.
- Added Windows, macOS, and Linux packaging configuration.
- Added secure Electron context isolation and sandboxing.
- Updated project documentation with desktop build instructions.

### v4 — August 31, 2026
- Major polish pass for the Settings and preferences system.
- Improved theme behavior, including System appearance.
- Improved mobile and iPhone interactions.
- Improved persistent preferences.
- Improved export and storage controls.

### v3.1 — August 31, 2026
- Added Settings with appearance, accent, text size, deletion, and date preferences.
- Added JSON note export and delete-all controls.
- Added local note count in Settings.
- Added Settings navigation for desktop and iPhone.

### v3 — August 31, 2026
- Refreshed the complete visual interface.
- Improved iPhone and touch interaction.
- Removed emoji-based controls.
- Improved note editor controls.
- Added reduced-motion support.
- Improved PWA metadata.
- Added service-worker cache cleanup.

### v2.1
- Refined the interface and mobile experience.

### v2
- Added iPhone-focused layout, PWA support, swipe-to-close editing, and offline caching.

### v1
- Initial Aither Notes release.
