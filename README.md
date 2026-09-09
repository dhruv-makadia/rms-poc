# RMS — Modern UI Migration POC

Static HTML / CSS / JS proof-of-concept showing how the legacy **Rosco Mining
Solutions (RMS)** application would look after migrating to a modern UI.
No build step, no framework, no backend — open `index.html` in any browser.

The feature set deliberately mirrors the legacy app: nothing was added that
does not already exist in RMS today.

## Screens

| File | Screen |
|---|---|
| `index.html` | Login — User Name, Password (show/hide), Remember me, Forgot Password, Request Access |
| `forgot-password.html` | Forgot password — send reset link, with a "check your inbox" confirmation |
| `request-access.html` | Request access — First/Last Name, Email, Mine Name, Mobile Number, Title (matching legacy) with a submitted confirmation |
| `mines.html` | Mine list — search, **Filter panel**, add (+), page length, pagination |
| `mine-add.html` | **Add Mine** form (also serves as Edit Mine via `?id=`) |
| `mine-details.html?id=533` | Mine details — **Details**, **Fleets**, **Machines** tabs + **Notes** panel |

Sidebar contains **Mines** only. Header contains the hamburger, the logo and the
profile menu — no global search, no notifications, no export, matching legacy.

## Structure

```
rms-poc/
├── index.html              login
├── mines.html              mine list + filter drawer
├── mine-add.html           add / edit mine
├── mine-details.html       details / fleets / machines
└── assets/
    ├── css/style.css       design tokens + all components
    └── js/
        ├── data.js         demo dataset, image URLs, lookup lists
        └── app.js          icons, logo helper, shell behaviour
```

## Images — real application URLs

`assets/js/data.js` points at the live RMS assets:

```js
const RMS_LOGO      = "https://rms.roscomining.com/Stage/images/RoscoLogo.png";
const MINE_IMG_BASE = "https://rms.roscomining.com/stage/images/mines/";

const MINE_IMAGES = {
  533: "11102018081731.png"      // Suncor/Steepbank & Millenium
};
```

Add the remaining `mineId: "fileName.png"` entries and the real logos appear on
the mine cards and the details page. If an image cannot load, the card falls
back to a coloured monogram tile and the logo falls back to a text wordmark, so
the POC never shows a broken image.

## Colour palette — taken 1:1 from the current app

| Token | Value | Where it comes from |
|---|---|---|
| `--navy` | `#21265D` | sidebar gradient start |
| `--brick` | `#C94B4B` | sidebar gradient end |
| `--primary` | `#5C60C6` | active tab / links |
| `--success` | `#3BAD4B` | "ACTIVE" status pill |
| `--bg` | `#F2F4F8` | page background |
| `--muted` | `#6E7377` | body text |
| `--heading` | `#333333` | headings |
| `--border` | `#D8DCE6` | input borders |
| Font | **Nunito** | same as legacy |

Active nav item keeps the legacy `rgba(18,21,66,.6)` overlay; the sidebar keeps
the navy → brick gradient with its texture overlay.

## Tab contents (as in legacy)

- **Details** — mine image, company name and address, phone, website, social
  links, the full spec list (Mine Locations, Type, Mineral(s), Ownership,
  County, Postal, Fax, Region, Key Contact Name/Title, Equipment Type) and the
  Contact Persons list with photo, phone, email, Last Contact, Equipment Type(s)
  and per-contact actions (LinkedIn, CRM, Notes, Edit) plus an add button.
  Notes opens the notes panel scoped to that contact; LinkedIn, CRM and Edit
  show a demo toast.
- **Fleets** — a bar chart of the equipment-type totals, then one fixed-height,
  scrollable card per equipment type listing every model with its count.
  Selecting a bar or a card header lists all of that type's machines in a side
  panel; selecting a model lists just that model's machines.
- **Machines** — add (+), sortable table (Model, Manufacturer, Equipment Type,
  Serial No, Quantity, Size, Status, Action), page length and pagination.

## Filter panel

Slide-in panel on the mine list. Every group is an accordion, one open at a
time: **Sort By** (name, machines, contacts, city — ascending or descending)
followed by Status, Region, Type, Mineral(s) and Ownership. Each group shows a
count of its selected values, and the panel has Apply / Clear All with an
active-filter count on the Filter button.

## Notes

The details page has a **Notes** button in the page header (and a matching icon
next to the company name) that opens a side panel listing the mine's notes with
author, timestamp and text, plus a compose box that adds a new note to the top
of the list.

## Images

Every mine and every contact person has an image:

- **Mines** — the real RMS asset is tried first (`MINE_IMAGES` map). Where the
  file name isn't known yet, a local illustration keyed on the mine's mineral
  (`assets/img/mines/*.svg`) is used, then a coloured monogram as a last resort.
  Images are sized to the space with `object-fit` — cropped in the card
  thumbnail and the details hero, contained when the asset is a company logo.
- **Sidebar mark** — the Rosco flame mark (`assets/img/logo-icon.png`, supplied
  by the client and saved with a transparent background) is shown when the
  sidebar collapses to the icon rail, in the phone header, and as the mark in
  the wordmark fallback. One constant controls it: `RMS_LOGO_ICON`.
- **Contacts** — one shared photo (`CONTACT_AVATAR` → `assets/img/avatar.svg`)
  repeated for every contact in every mine, as requested. Point that constant at
  the real RMS avatar URL to swap it everywhere at once.

## Pagination

`renderPager()` in `app.js` drives both the mine list and the machines table.
It always shows the first two and last two pages plus the current page with a
neighbour either side, inserting an ellipsis wherever a gap is skipped —
`‹ 1 2 … 29 30 31 … 58 59 ›`.

## Responsive

Tested at 1440 / 820 / 390 px. Sidebar becomes a slide-in drawer on phones,
cards stack, the form collapses to one column and the machines table scrolls
inside its own container.

## Notes

- All data in `assets/js/data.js` mirrors current Stage records — swap for API calls.
- Actions that would hit the server show a toast instead; no API calls are made.
