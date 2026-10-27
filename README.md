# REMPAH – Landing Page

Static site: HTML5 + CSS3 + vanilla JS + Bootstrap 5.3 (CDN) + Bootstrap Icons (CDN) + Poppins (Google Fonts).
No build step.

## Run
Open `index.html` in a browser (internet needed for the Bootstrap / font CDNs), or serve the folder:

    python3 -m http.server 8000   # then visit http://localhost:8000

## Configure ordering / contact links
All destinations live in the `CONFIG` object at the top of `js/script.js`:

| Key | Used by | Current value |
|---|---|---|
| `whatsappNumber` | every "Order Now" / "Order via WhatsApp" link | `6282245922263` (from the footer phone number – **confirm** it is the ordering line) |
| `whatsappMessage` | pre-filled WhatsApp text | Indonesian greeting |
| `email` | "TELLS US NOW!" button + footer email | `officialrempahid@gmail.com` |
| `instagramHandle`, `instagramUrl`, `tiktokHandle`, `tiktokUrl` | social rows (text + link) | **empty – add your own** |

The HTML carries the same defaults, so links also work if JavaScript is disabled.

## Layout notes
* Desktop (≥ 992px) positions elements in "design pixels" of the 1440px reference, scaled with container-query units (`--u = 1/1440` of the section width), so 1280px–1440px+ keep the same composition.
* Below 992px the sections stack in normal flow (mobile/tablet were not in the reference – smallest reasonable adaptation).
* Asset files were renamed from the original spaced filenames:
  `logo-small`, `logo-large`, `bottle`, `turmeric-pile`, `ginger`, `ginger-turmeric`, `person` (all `.png`, originals unmodified).
* Blurred spice decorations reuse `ginger.png` / `ginger-turmeric.png` with a CSS blur and rotation; the reference appears to do the same.
