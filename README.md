# Aither Notes v5.2

A fast, private, local-first notes app for iPhone, iPad, desktop browsers, GitHub Pages, and desktop computers.

## GitHub Pages

Aither Notes is designed to run as a static site on GitHub Pages. It does not require Node.js, a server, a database, an API key, or a backend for the web app.

The web app uses relative paths so it works correctly from a GitHub Pages project URL such as `/AitherNotes/` instead of assuming it is hosted at the domain root.

For GitHub Pages, publish the repository's `main` branch and use the repository root as the source. After GitHub Pages finishes deploying, open the generated Pages URL in Safari or another modern browser.

The app also supports installation as a PWA on supported browsers. On iPhone, open the Pages site in Safari, use Share, then choose Add to Home Screen.

## v5.2 improvements

- Improved GitHub Pages compatibility
- Fixed service-worker caching behavior for GitHub Pages project URLs
- Service worker now uses a versioned cache for safer updates
- Service worker only handles same-origin GET requests
- Network-first loading keeps deployed Pages files fresh while preserving offline support
- Improved PWA manifest metadata
- Added duplicate-note support
- Added note word and character counts
- Added JSON backup import
- Added duplicate-ID protection when importing backups
- Added search clearing
- Added Cmd/Ctrl+N for a new note
- Kept the mobile-first iPhone experience
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
- Light, dark, or system appearance
- Custom accent color
- Adjustable editor text size
- Word and character count
- Export notes as JSON
- Import JSON backups
- Responsive phone, tablet, and desktop layouts
- Installable web app support
- Offline support
- GitHub Pages compatible
- Native desktop app
- No account or backend required

## Privacy

Notes and preferences are stored locally on the device. Aither Notes does not require an account or send notes to a server. Clearing browser or website data can remove local notes.

## Project files

- `index.html` — application structure and PWA metadata
- `style.css` — responsive interface and iOS-specific styling
- `app.js` — notes, search, folders, settings, themes, storage, import/export, and interactions
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — GitHub Pages-safe offline caching
- `desktop/main.js` — Electron desktop window
- `desktop/preload.js` — secure desktop preload
- `desktop/icon.svg` — desktop app icon
- `desktop/package.json` — desktop scripts and build configuration

## Version history

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
