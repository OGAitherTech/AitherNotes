# Aither Notes v2.1

Aither Notes is a fast, private, clean notes app designed for iPhone, iPad, and desktop browsers.

## v2.1 improvements

- Refined, cleaner interface with no emoji-based controls
- Improved typography and spacing
- Better note cards and hover states on desktop
- Larger touch targets for iPhone
- Improved mobile navigation
- Cleaner note editor controls
- Better dark-mode button and state handling
- Improved accessibility labels
- Respects reduced-motion preferences
- iOS safe-area support for modern iPhones
- Swipe right to close the editor on mobile
- PWA support for adding Aither Notes to an iPhone Home Screen
- Offline caching with a service worker
- Automatic local saving
- Existing v1 notes are imported into v2 storage when available

## Features

- Create, edit, and delete notes
- Pin notes
- Favorite notes
- Instant search
- Personal, School, and Ideas folders
- Light and dark mode
- Sort notes by updated date
- Keyboard shortcut: Command+K on Mac/iPhone keyboards or Ctrl+K on Windows
- Responsive layout for phones, tablets, and computers
- Local-first storage with no account or server required

## Using Aither Notes on iPhone

Open the GitHub Pages version in Safari. Use the Share menu and choose Add to Home Screen. Launch Aither Notes from the Home Screen for an app-like experience.

## Privacy

Notes are stored locally in the browser on the device. Aither Notes does not require an account or send notes to a server. Clearing browser or website data can remove locally stored notes, so important notes should be backed up.

## GitHub Pages

Aither Notes is a static web app. It requires no build step and can be hosted directly with GitHub Pages.

## Files

- `index.html` — application structure and iPhone/PWA metadata
- `style.css` — responsive interface and iOS-specific layout behavior
- `app.js` — notes, search, folders, favorites, themes, storage, and interactions
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — offline cache

## Version history

### v2.1 — August 31, 2026
- Removed emoji-based interface controls.
- Refined the overall visual design.
- Improved iPhone touch targets and mobile navigation.
- Improved editor controls and dark-mode behavior.
- Added reduced-motion support.
- Improved accessibility and responsive behavior.

### v2 — August 31, 2026
- Reworked the interface for iPhone and touch screens.
- Added mobile bottom navigation.
- Added iOS safe-area handling.
- Added swipe-to-close note editing.
- Added PWA manifest support.
- Added offline service-worker caching.
- Improved mobile editor and controls.
- Upgraded storage key to `aither-notes-v2` while importing existing v1 notes when available.

### v1
- Initial Aither Notes release.
