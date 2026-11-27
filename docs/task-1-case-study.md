# NivaasCare — Task 1 Case Study

## Project overview
**Brief:** Redesign a local service business website with a strong focus on lead generation and conversion optimization.

**Concept:** NivaasCare is a fictional home-cleaning service concept for Delhi NCR. The proposed website helps visitors understand available cleaning services and request an estimate.

**Scope:** Homepage, service detail page, contact / lead-capture page, responsive desktop and mobile layouts, and UX rationale.

**Design file:** [NivaasCare — Figma](https://www.figma.com/design/pftUOxZ0eThvlpzZTweT97)

**Prototype / repository:** [FUTURE_UIUX_01 on GitHub](https://github.com/abhisingh222/FUTURE_UIUX_01)

## Problem statement
People looking for home-cleaning help need to quickly understand what services are offered, what each service covers, whether the provider serves their locality, and how to request a quote. Vague service descriptions and unclear next steps create friction and can cause visitors to leave before enquiring.

## UX goals
1. Communicate the service and its value immediately.
2. Make the three core service categories easy to compare and explore.
3. Place a clear estimate-request action at key decision points.
4. Collect only the details needed to follow up on an enquiry.
5. Keep the experience readable and usable on smaller screens.

## Primary audience and needs
- Busy households comparing local home-cleaning options.
- People preparing for a seasonal refresh or move-in.
- Visitors who know the room or area they need cleaned but are unsure which service to choose.

These are design assumptions for the concept, not findings from user research.

## Information architecture and flow
1. **Home:** value proposition → service overview → process explanation → estimate CTA.
2. **Services:** service scope and use cases → service-specific enquiry link.
3. **Contact:** selected service (when arriving from a service link) → contact and locality details → enquiry confirmation state.

## Conversion decisions
- **Single primary action:** “Get a free estimate” is repeated in the navigation, hero and closing CTA.
- **Progressive detail:** the homepage gives a short overview; the service page provides more context before the visitor commits.
- **Contextual enquiry:** service links pass the selected service into the contact page, reducing repeated decisions.
- **Low-friction form:** name, phone, email, service and locality are required; the message field is optional.
- **Trust through clarity:** the interface explains scope confirmation and next steps rather than fabricating reviews, ratings or certifications.

## Visual and responsive system
- Forest-green and warm-neutral palette communicates calm, care and reliability.
- Manrope headings and DM Sans body text establish a clear hierarchy.
- Repeated spacing, card and CTA treatments make the three pages feel like one system.
- Desktop layouts use wider two-column compositions; mobile layouts stack content and collapse navigation.
- Interactive controls include visible keyboard focus and reduced-motion support.

## Accessibility considerations
- Semantic landmarks and headings support navigation.
- Form controls have visible labels and native validation.
- Focus-visible styling supports keyboard users.
- Mobile navigation exposes its expanded state.
- Reduced-motion preferences are respected.

## Success metrics to validate
These are proposed measures, not observed results:
- Homepage hero CTA click-through rate.
- Service-card to contact-page click-through rate.
- Form start-to-completion rate.
- Field-level abandonment and validation error rate.
- Mobile vs desktop enquiry completion.

## Prototype limitations and launch requirements
- NivaasCare, its email, phone number, service area and operational statements are sample concept content and must be replaced with verified business information.
- The enquiry form is front-end only. It validates fields and displays an explanatory demo state; it does not transmit or store enquiries.
- Before production, connect a secure form endpoint, publish a privacy notice, verify service coverage and scope, and test the booking process with real users.

## Validation checklist
- [x] Homepage, service page and contact / lead page exist.
- [x] Service-specific links lead to the contact form with the selected service prefilled.
- [x] Required fields and native form validation are present.
- [x] Mobile navigation and responsive layouts are implemented.
- [x] UX rationale and project documentation are included.
- [ ] Visual inspection of every Figma frame and prototype interaction (temporarily blocked by Figma MCP monthly/plan call limit).
- [ ] Verify the deployed GitHub Pages URL in a browser after the latest commits.
- [ ] Replace sample business data if this concept is ever used by a real business.

## Official internship submission reminder
The selection email requests a public GitHub repository named FUTURE_UIUX_01 and submission through the official portal. The attached internship handbook separately gives the UI/UX naming format FUTURE_UX_TaskNumber (example FUTURE_UX_02). Keep the existing email-requested repository intact for now; verify the exact Task 1 repository naming requirement in the official portal before any rename. The handbook says the official portal is the required submission channel.
