# FUTURE_UIUX_01 — NivaasCare Website Redesign

A responsive three-page local home-cleaning service website concept created for **Future Interns UI/UX Design — Task 1: Local Service Business Website Redesign**.

## Project deliverables
- **Homepage** — clear value proposition, service discovery, trust cues, three-step process and repeated estimate CTAs.
- **Services page** — deep cleaning, kitchen care and bathroom care with scope explanations and enquiry links.
- **Contact / lead page** — enquiry form with required contact and locality fields, optional message, and service preselection from service-page links.
- **UX rationale** — design decisions, information architecture, proposed conversion measures and prototype limitations in [docs/design-rationale.md](docs/design-rationale.md).

## Live preview
[Open the GitHub Pages website](https://abhisingh222.github.io/FUTURE_UIUX_01/)

## Figma design
[Open the editable NivaasCare Figma file](https://www.figma.com/design/pftUOxZ0eThvlpzZTweT97)

The Figma file contains desktop and mobile frames for the homepage, services and contact/lead flow, plus a UX rationale frame. Shared CTA components were normalized to a 48 px height during QA.

## Repository structure
- `index.html` — homepage.
- `services.html` — service details and FAQs.
- `contact.html` — lead form and contact information.
- `styles.css` — responsive visual system and layouts.
- `script.js` — mobile navigation, service preselection and demo form feedback.
- `docs/design-rationale.md` — UX and conversion rationale.

## Run locally
Open `index.html` in a browser. No build step or package installation is required.

## Important prototype note
NivaasCare is a fictional concept. Contact details, service area and operational claims are sample content, not verified business information. The enquiry form is front-end only: it validates the inputs and displays demo feedback but does not send or store personal data. Replace all sample business information and connect a secure form endpoint before any real-world launch.

## Accessibility and responsive behavior
The interface includes semantic page structure, labelled form controls, keyboard-visible focus states, a mobile navigation toggle, responsive layouts and reduced-motion support.
