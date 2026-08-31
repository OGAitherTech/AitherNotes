# Aither Notes v2

Aither Notes is a fast, private, mobile-friendly notes app designed to work especially well on iPhone.

## ✨ v2 features

- 📝 Create, edit, and delete notes
- 💾 Automatic local saving with `localStorage`
- 📌 Pin notes
- ⭐ Favorite notes
- 🔎 Instant note search
- 📁 Personal, School, and Ideas folders
- 🌙 Light and dark mode
- 📱 iPhone-first responsive layout
- 👆 Touch-friendly controls
- ↩️ Swipe right to close the note editor on mobile
- ⌘K / Ctrl+K search shortcut
- 📲 PWA support for adding Aither Notes to an iPhone Home Screen
- 📴 Offline caching with a service worker
- 🔒 Notes stay on the device; there is no server or account required
- 🧭 Mobile bottom navigation
- 🛡️ iOS safe-area support for modern iPhones

## 📱 Using it on iPhone

Open the GitHub Pages version in Safari, tap **Share → Add to Home Screen**, then launch **Aither Notes** from your Home Screen for an app-like experience.

## 💾 Privacy

Aither Notes stores notes locally in the browser on the device. Clearing the site's browser data can remove locally stored notes, so keep backups if the notes are important.

## 🚀 GitHub Pages

This repository is a static web app and can be hosted with GitHub Pages. No build step or backend is required.

## 📁 Files

- `index.html` — app interface
- `style.css` — responsive/iPhone styling
- `app.js` — notes, search, folders, favorites, themes, and storage
- `manifest.webmanifest` — installable web-app metadata
- `sw.js` — offline cache

## 🆕 Version history

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
