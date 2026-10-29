# MKESCF Website

A plain HTML, CSS, and JavaScript website for the Milwaukee Sylvestral Conservation Foundation. It is designed for GitHub Pages and does not require a build step or framework.

## Files

- `index.html` — homepage
- `about.html` — about the foundation
- `events.html` — events page (no unconfirmed events invented)
- `gallery.html` — gallery layout with clearly identified illustration placeholders
- `get-involved.html` — volunteering and participation
- `contact.html` — contact page and email-preparation form
- `styles.css` — responsive site-wide design
- `script.js` — mobile menu, copyright year, and contact form
- `assets/` — original SVG logo and illustrations

## Publish to GitHub Pages

1. Download and unzip this folder.
2. Open the `HewCutter/mkescf` repository on GitHub.
3. Choose **Add file → Upload files**.
4. Upload the contents of this folder, not the outer `mkescf-website` folder. `index.html` should be at the repository root.
5. Commit the changes to `main`.
6. Wait for GitHub Pages to redeploy, then refresh `https://mkescf.org`.

This replaces the starter `index.html` and adds the other pages. It does not require changes to DNS.

## Before sharing the website widely

1. Open `script.js` and replace `REPLACE_WITH_ORGANIZATION_EMAIL` with the foundation's real public email address.
2. Update the email description on `contact.html` if needed.
3. Replace the temporary gallery illustrations with real photos the foundation has permission to publish.
4. Add only confirmed event dates, times, locations, accessibility details, and signup instructions to `events.html`.
5. Review the organization description and values on `about.html` so they accurately reflect the foundation.
6. Add official social media links if desired.

## Contact form limitation

GitHub Pages is static hosting and does not process form submissions on its own. Once the public email is set in `script.js`, this form prepares a message in the visitor's email app. For a form that submits directly on the website, connect a form service or backend later.


## Replace the homepage banner image

1. Prepare a wide photo (about 1600 × 600 pixels works well).
2. In the `assets` folder, replace `hero-banner.jpg` with your image, keeping the exact filename `hero-banner.jpg`.
3. In `index.html`, update the hero image's `alt` text so it accurately describes your photo.
4. Upload the updated files to GitHub and commit the changes.

The homepage's visible main heading (`h1`) and browser/search title both use **Milwaukee Sylvestral Conservation Foundation**. Search engines decide how and when to display pages, so this improves clarity but does not guarantee a particular ranking or instant indexing.
