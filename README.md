# Aither Notes v5.4

A fast, private, local-first notes app for iPhone, iPad, desktop browsers, GitHub Pages, and desktop computers.

## Shared Aither Account

Aither Notes now connects to the same AitherBackend account service used by the other Aither apps. Create or sign in with the same email and password to use one Aither account across the ecosystem.

- Registration: `/api/auth/register`
- Sign in: `/api/auth/login`
- Session restore: `/api/auth/session`
- Sign out: `/api/auth/logout`
- Secure credentialed requests with the Aither session cookie
- Default backend: `https://aither-backend.onrender.com`
- The account service is shared; notes themselves remain local to this app unless a future sync feature explicitly uploads them.

## GitHub Pages

Aither Notes is a static web app and is designed to work from a GitHub Pages project URL such as `/AitherNotes/`. It uses relative web paths, requires no server or API key for notes, and keeps notes in local browser storage.

For GitHub Pages, publish the repository's `main` branch from the repository root. After deployment, open the Pages URL in a modern browser. On iPhone, open it in Safari and use Share > Add to Home Screen for the app-like experience.

The service worker uses a versioned, network-first cache so deployed files can update without breaking offline support.

## v5.4 improvements

- Added shared AitherBackend account creation and sign-in
- Added shared Aither session restore and sign-out
- Kept notes local-first and private
- Improved ecosystem account compatibility
- Kept GitHub Pages compatibility and offline support

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
- Shared Aither account
- No account required for local notes

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

## Privacy

Notes and preferences are stored locally on the device. Account credentials and sessions are handled by AitherBackend. Notes are not uploaded merely because you sign in.

## Project files

- `index.html` — application structure and PWA metadata
- `style.css` — responsive interface, mobile layout, and accessibility styling
- `app.js` — notes, search, folders, settings, themes, storage, import/export, and interactions
- `aither-account.js` — shared AitherBackend account client
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — GitHub Pages-safe offline caching
- `desktop/main.js` — Electron desktop window
- `desktop/preload.js` — secure desktop preload
- `desktop/package.json` — desktop scripts and build configuration

## Version history

### v5.4 — September 5, 2026
- Added the shared Aither account service.
- Added registration, sign-in, session restore, and sign-out.
- Connected account authentication to the common AitherBackend service.
- Kept note data local-first.

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
