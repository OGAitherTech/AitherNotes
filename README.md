# Aither Notes v5

A fast, private, local-first notes app for iPhone, iPad, desktop browsers, and desktop computers.

## v5 improvements

- Added a native desktop app powered by Electron
- Desktop window supports Windows, macOS, and Linux builds
- Added portable Windows build support
- Added macOS DMG build support
- Added Linux AppImage and DEB build support
- Desktop app uses the same Aither Notes interface and local note storage
- Kept the mobile-first iPhone experience
- Kept Settings, themes, accent colors, backups, and Force Update
- Kept existing notes and preferences during web-app upgrades
- No emoji-based interface controls

## Desktop app

The desktop project is in `desktop/`.

Requirements:

- Node.js
- npm

Run the desktop app locally:

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

Electron Builder is configured for:

- Windows: NSIS installer and portable executable
- macOS: DMG
- Linux: AppImage and DEB

## Features

- Create, edit, and delete notes
- Automatic local saving
- Pin notes
- Favorite notes
- Instant search
- Personal, School, and Ideas folders
- Sort by updated date
- Light, dark, or system appearance
- Custom accent color
- Adjustable editor text size
- Export notes as JSON
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
- `app.js` — notes, search, folders, settings, themes, storage, and interactions
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — offline caching
- `desktop/main.js` — Electron desktop window
- `desktop/preload.js` — secure desktop preload
- `desktop/package.json` — desktop scripts and build configuration

## Version history

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
