# Milwaukee Sylvestral Conservation Foundation website

## Uploading to GitHub Pages

Upload **every file in this folder directly into the repository root** (the same level as `index.html`). Do not upload this folder as a nested folder. This package deliberately keeps every image file beside the HTML files so image paths do not depend on nested folders.

Your repository root should contain `index.html`, `styles.css`, `script.js`, `mkescf-logo.png`, `mkescf-favicon.png`, `homepage-banner.jpg`, and the event/illustration image files.

## Replacing images

All images are in the repository root and have descriptive filenames:

- `mkescf-logo.png` — logo used in the header and footer
- `mkescf-favicon.png` — browser tab icon (replace if you change the logo)
- `homepage-banner.jpg` — homepage hero/banner photo
- `event-november-steps-challenge.svg` — November 5K Steps Challenge
- `event-november-sweepstakes.svg` — November Sweepstakes
- `event-community-sledding-day.svg` — Community Sledding Day
- `event-groundhog-day-gala.svg` — Groundhog Day Gala
- `woodland-plants-illustration.svg` — woodland plants illustration
- `woodland-landscape-illustration.svg` — woodland landscape illustration

To use a different event photo, upload it to the repository root and change that event's `src` in `events.html`. Each event has its own image element inside its own event card.

## Gallery

To add a gallery image, upload the image to the repository root, then copy an existing `<figure class="gallery-item">` block in `gallery.html`. Set the image `src` to the exact filename and update the alt text and caption.

## Publish

Commit changes to the branch configured in GitHub Pages (usually `main`). After deployment, hard-refresh the website with Ctrl+Shift+R.


Latest image update: `feature-fieldgrass.jpg` is used in the homepage section titled “Healthy places take all of us.” The original `homepage-banner.jpg` remains in the homepage hero. The gallery includes a temporary `Snail on Walnut` placeholder (`placeholder-snail-on-walnut.svg`) until the actual photograph is supplied. Upload all files together into the repository root.

Gallery placeholders added for: Mushroom on Log, Squirrel Trail, Acorn, Pinecone Lens Flare, Leaf Veins, Forest Trail, Wooded Trail, and Mushroom in Grass. Each placeholder is a separate root-level SVG file named `placeholder-*.svg`; replace the matching SVG reference in `gallery.html` with the final photograph when available.


Gallery JPG placeholders: the gallery now references these exact filenames: `Snail on Walnut.jpg`, `Mushroom on Log.jpg`, `Squirrel Trail.jpg`, `Acorn.jpg`, `Pinecone Lens Flare.jpg`, `Leaf Veins.jpg`, `Forest Trail.jpg`, `Wooded Trail.jpg`, `Mushroom in Grass.jpg`. Each JPG is currently a copy of the supplied Morning Dew photograph so the image slot works immediately. Replace each file in GitHub with the real photograph using the same filename; no HTML edits are needed.
