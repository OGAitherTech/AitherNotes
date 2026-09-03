# Aither Notes v5.3

A fast, private, local-first notes app for iPhone, iPad, desktop browsers, GitHub Pages, and desktop computers.

## GitHub Pages

Aither Notes is a static web app and is designed to work from a GitHub Pages project URL such as `/AitherNotes/`. It uses relative web paths, requires no server or API key, and keeps notes in local browser storage.

For GitHub Pages, publish the repository's `main` branch from the repository root. After deployment, open the Pages URL in a modern browser. On iPhone, open it in Safari and use Share > Add to Home Screen for the app-like experience.

The service worker uses a versioned, network-first cache so deployed files can update without breaking offline support.

## v5.3 improvements

- Improved responsive accessibility and keyboard focus states
- Improved mobile editor action handling
- Improved note-card keyboard focus styling
- Hardened note IDs and local-storage loading against malformed saved data
- Improved theme initialization on startup
- Kept GitHub Pages compatibility
- Kept versioned service-worker caching and offline support
- Kept duplicate notes, JSON backup import/export, search clearing, and note statistics
- Kept the native desktop app
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

- Create, edit, duplicate, and delete notes
- Automatic local saving
- Pin notes
- Favorite notes
- Instant search with clear control
- Personal, School, and Ideas folders
- Sort by updated date
- Live word and character count
- Light, dark, or system appearance
- Custom accent color
- Adjustable editor text size
- Export notes as JSON
- Import JSON backups
- Cmd/Ctrl+K search shortcut
- Cmd/Ctrl+N new-note shortcut
- Responsive phone, tablet, and desktop layouts
- Keyboard focus support
- Installable web app support
- GitHub Pages compatibility
- Offline support
- Native desktop app
- No account or backend required

## Privacy

Notes and preferences are stored locally on the device. Aither Notes does not require an account or send notes to a server. Clearing browser or website data can remove local notes.

## Project files

- `index.html` — application structure and PWA metadata
- `style.css` — responsive interface, mobile layout, and accessibility styling
- `app.js` — notes, search, folders, settings, themes, storage, import/export, and interactions
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — GitHub Pages-safe offline caching
- `desktop/main.js` — Electron desktop window
- `desktop/preload.js` — secure desktop preload
- `desktop/icon.svg` — desktop app icon
- `desktop/package.json` — desktop scripts and build configuration

## Version history

### v5.3 — September 2, 2026
- Improved responsive accessibility and keyboard focus states.
- Improved mobile editor controls.
- Hardened local-storage and note-ID handling.
- Improved theme initialization.
- Kept GitHub Pages and offline compatibility.

### v5.2 — September 1, 2026
- Improved GitHub Pages compatibility.
- Fixed service-worker behavior for project-site paths.
- Added versioned network-first caching for safer updates.
- Improved PWA metadata.
- Added duplicate notes, backup import, search clearing, and note statistics.
- Added Cmd/Ctrl+N for creating notes.
- Updated documentation with GitHub Pages deployment instructions.

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
