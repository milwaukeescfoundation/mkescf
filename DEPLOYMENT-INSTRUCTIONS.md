# MKESCF deployment instructions — mkescf.org

## Deploy
Upload the contents of this ZIP to the GitHub Pages repository for https://mkescf.org/, **keeping any existing image assets not included in the ZIP**. Do not delete the missing PNG/JPG files from the live repository. The public pages include canonical URLs and index directives. `robots.txt` advertises `https://mkescf.org/sitemap.xml`; submit that sitemap in Google Search Console. Search engines decide when to index pages; this cannot guarantee indexing.

## QR flier page
Create the QR code pointing to **https://mkescf.org/cache-entry.html**. This page is not linked from the public navigation or sitemap and has a `noindex` meta directive. It is publicly accessible to anyone who knows the URL.

The winning serial **1041** is checked in the browser. Other numbers show a non-winning message. When 1041 is entered, a form appears requesting the winner's name and email. The form posts to **FormSubmit** (https://formsubmit.co/) to email **milwaukeescfoundation@gmail.com**, including the serial. This is a third-party service, not an email sent directly by GitHub Pages.

**One-time activation required:** Submit a test winner claim after deploying. FormSubmit sends an activation/confirmation email to milwaukeescfoundation@gmail.com; follow the link in that email to activate delivery. Then submit another test claim and verify the notification arrives (check spam). Without activation, notifications will not work. FormSubmit may display its own captcha/confirmation page. Names and emails are sent to FormSubmit; review its privacy terms before use.

Because the code is public and the form action can be forged, **do not treat receipt of an email as proof of flier ownership or a unique winning claim**. Check the original physical flier and manually approve the winner. Multiple submissions are possible.

## Date/event changes
The 5K Steps Challenge is November 9–13, 2026. The Autumn Cache Forage is November 23–27, 2026, described as a community field promotion/private drawing rather than a sweepstakes. The replacement SVG artwork is included.
