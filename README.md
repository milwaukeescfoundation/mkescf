# Milwaukee Sylvestral Conservation Foundation website

Static HTML, CSS, and JavaScript site for GitHub Pages. No build tools are required.

## Main files
- `index.html` — homepage and homepage banner
- `about.html` — organization background and mission
- `events.html` — seasonal and recurring events
- `gallery.html` — photo gallery
- `get-involved.html` — volunteer information
- `contact.html` — public email and Instagram
- `styles.css` — site styling
- `script.js` — navigation and contact form behavior

## Clearly named image files
All images are in `assets/`:
- `homepage-banner.jpg` — wide homepage hero photograph; replace this to change the homepage banner
- `foundation-logo.svg` — header logo and favicon
- `foundation-logo-light.svg` — logo used on dark backgrounds
- `woodland-landscape-illustration.svg` — woodland landscape illustration
- `woodland-plants-illustration.svg` — woodland plant illustration

Gallery photographs belong in `assets/gallery/`. The gallery starts with the foundation’s supplied illustrations, not documentary photographs. Add photos using these suggested filenames:
- `woodland-trail.jpg`
- `native-plants.jpg`
- `park-stewardship.jpg`
- `wildlife-observation.jpg`
- `seasonal-landscape.jpg`

To add gallery photos, place your image in `assets/gallery/`, then edit `gallery.html`. Copy an existing `<figure class="gallery-item">...</figure>` block and change the image filename, accurate alt text, category, and caption. You can add as many blocks as needed. Use JPG, PNG, or WebP images and optimize large files before uploading. The five slots are image locations, not supplied photographs; add your actual photos using these filenames.

## Contact details
- Email: milwaukeescfoundation@gmail.com
- Instagram: https://www.instagram.com/mkescf/

The contact form opens the visitor's email app and prepares a message; GitHub Pages does not process form submissions itself.

## Events
The events page separates featured seasonal events from recurring weekly activities. Dates are shown for the upcoming 2026–2027 season. No event times, park locations, registration links, or sweepstakes rules have been invented; add those details when confirmed.

## Publish
1. Extract this ZIP.
2. Upload the contents of the extracted folder to the root of the new GitHub repository (so `index.html` is at the repository root).
3. Commit to `main` and wait for GitHub Pages to deploy.
4. Keep the existing Cloudflare DNS records if the custom domain is already connected.
