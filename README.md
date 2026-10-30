# Milwaukee Sylvestral Conservation Foundation website

Static HTML, CSS, and JavaScript for GitHub Pages. No build tools are required.

## Main files
- `index.html` — homepage and banner
- `about.html` — organization background and mission
- `events.html` — featured and recurring events
- `gallery.html` — photo gallery
- `get-involved.html` — volunteer information
- `contact.html` — public email and Instagram
- `styles.css` — site styling
- `script.js` — navigation and contact form behavior

## Images: where to replace them

All website images are stored in `assets/`. Keep these filenames unless you also update the matching HTML reference.

### Logo
- `assets/mkescf-logo.png` — logo shown in the top navigation and page footer
- `assets/mkescf-favicon.png` — small logo shown in the browser tab

To change the logo, replace both PNG files with your new versions, keeping the exact filenames. Use a transparent-background PNG if possible.

### Homepage banner
- `assets/homepage-banner.jpg` — wide photograph behind the homepage headline

Replace this file with your preferred banner photo, keeping the exact filename. A wide image works best; recommended dimensions are about 1600 × 900 pixels or larger.

### Homepage and gallery illustrations
- `assets/woodland-plants-illustration.svg`
- `assets/woodland-landscape-illustration.svg`

These are decorative illustrations used in the homepage feature and gallery. Their references are valid and the files are included in this ZIP.

### Event images
Each featured event has its own image in `assets/events/`:
- `november-steps-challenge.svg`
- `november-sweepstakes.svg`
- `community-sledding-day.svg`
- `groundhog-day-gala.svg`

These are included illustrations so the event cards are never empty. To use a photograph instead, upload it into `assets/events/` and change the corresponding image `src` in `events.html`. For example, replace `assets/events/november-steps-challenge.svg` with `assets/events/november-steps-challenge.jpg`. Update the alt text to describe the actual photo. Recommended image size: 1200 × 600 pixels or larger.

### Gallery photographs
Put gallery photos in `assets/gallery/`. To add a photo:
1. Upload the image into `assets/gallery/`.
2. Open `gallery.html`.
3. Copy an existing `<figure class="gallery-item">...</figure>` block.
4. Change its image filename, alt text, category, and caption.

Use descriptive filenames such as `native-plants-in-autumn.jpg` or `friday-park-cleanup.jpg`. Only use photos that accurately represent the foundation's activities; do not imply an event took place if it has not.

## Contact details
- Email: milwaukeescfoundation@gmail.com
- Instagram: https://www.instagram.com/mkescf/

The contact form opens the visitor's email app and prepares a message. GitHub Pages does not process form submissions itself.

## Events
The events page separates featured seasonal events from recurring weekly activities. Dates are set for the 2026–2027 season. Add times, park locations, registration links, and sweepstakes rules when confirmed.

## Publish
1. Extract this ZIP.
2. Upload the contents of the extracted folder to the root of the GitHub repository, so `index.html` is at the repository root.
3. Commit to `main` and wait for GitHub Pages to deploy.
4. Keep the existing Cloudflare DNS records if the custom domain is already connected.
