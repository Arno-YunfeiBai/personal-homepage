# Personal Homepage MVP

A stylish, dark personal homepage landing page with a futuristic visual direction, subtle motion, and all editable content centralized in one file. The homepage now supports both English and Chinese with a top-level language toggle.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

## Build for preview

```bash
npm run build
npm run preview
```

`npm run build` creates a static `dist/` folder.

## Edit content

All visible homepage copy lives in:

`src/content/site.js`

The file is organized by language:

- `siteContent.en` contains the English copy.
- `siteContent.zh` contains the Chinese copy.
- `languages` controls which toggle options appear in the top bar.
- `defaultLanguage` sets the fallback locale if no saved preference exists.

To update bilingual content, edit the matching key in both locales. Keep the structure aligned between `en` and `zh` so every section can render in either language.

Common areas to edit:

- `meta`: page title and description
- `navigation`: top bar CTA and language label
- `hero`: hero headline, CTAs, and snapshot copy
- `identity`: name, title, availability, and location
- `stats`: system snapshot metrics
- `about`, `services`, `projects`, `contact`: section headings and body copy
- `skills`: skill pills
- `links`: contact link labels and URLs

## Notes

- The site is intentionally scoped as a strong single-page MVP.
- Styling and animation live in `src/styles.css`.
- Language choice is persisted in `localStorage` under `personal-homepage-language`.
