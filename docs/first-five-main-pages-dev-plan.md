# BotPlus First 5 Main Pages Dev Plan

Last updated: 2026-07-08

## Source Inputs

This plan uses:

- `splan.md`
- `D:\BotPlus\dentdesk\docs\conversion-page-flow-guidelines.md`
- Existing static BotPlus site files in `D:\BotPlus\botplus`

## Scope Assumption

The "first 5/8 main pages" are interpreted as the first five priority pages from the `botplus.ae Phase 1 Page Plan`, built on the current static HTML site before any framework rebuild.

Build now:

1. `/` -> `index.html`
2. `/interactive-kiosk-solutions-uae/` -> `interactive-kiosk-solutions-uae.html`
3. `/self-service-kiosk-uae/` -> `self-service-kiosk-uae.html`
4. `/ai-kiosk-uae/` -> `ai-kiosk-uae.html`
5. `/queue-management-kiosk-dubai/` -> `queue-management-kiosk-dubai.html`

Defer to the next page batch:

1. `visitor-management-kiosk-dubai.html`
2. `wayfinding-kiosk-dubai.html`
3. `hotel-self-check-in-kiosk-uae.html`

Pages also needed soon, but outside this 5/8 scope:

- `security-governance.html`
- `ai-avatar-kiosk-uae.html`
- `event-registration-kiosk-uae.html`

## Non-Negotiables

- Position BotPlus as an AI kiosk and interactive service journey product.
- Keep kiosk as the SEO root and avatar as a differentiator.
- Do not use unqualified human-like, staff replacement, emotion-reading, no-queue, full-autonomy, or guaranteed-savings claims.
- Every page must explain approved content, scoped data capture, routing, staff handoff, fallback, and analytics.
- The homepage must not compete with the interactive kiosk gateway for the head term.
- AI kiosk must not compete with the interactive kiosk gateway.
- Queue kiosk must not drift into contact-center queue automation.
- Use current static `.html` URLs now; clean URLs can be introduced during a later rebuild with redirects.

## Implementation Strategy

### 1. Foundation Cleanup

Files:

- `index.html`
- `products.html`
- `solutions.html`
- `workflow.html`
- `contact.html`
- `book-demo.html`
- `sitemap.xml`
- `assets/css/main.css`

Tasks:

- Replace current public positioning from "digital brand ambassador", "human-like AI", and call-center replacement language with governed kiosk/service journey language.
- Update shared navigation to route users to:
  - Home
  - Interactive Kiosk
  - Self-Service Kiosk
  - AI Kiosk
  - Queue Kiosk
  - Contact
- Update footer language to:
  - describe BotPlus as an AI kiosk and interactive service experience product
  - link to the first five pages
  - keep ResolveDesk/Entellex references only where product boundaries are useful
- Standardize CTAs:
  - primary: "Book an AI kiosk journey review"
  - secondary: "Request a service-center pilot"
  - tertiary where relevant: "Map a visitor journey"
- Keep the contact form but add hidden/source fields or query parameters later so page-level leads can be attributed.
- Add page-level Open Graph tags, canonical tags, and JSON-LD where appropriate.
- Update `sitemap.xml` with the four new static pages and refreshed `lastmod` values.

Acceptance criteria:

- No old unsafe claims remain in visible copy on the first five pages.
- Navigation and footer are internally consistent across the first five pages.
- Each page has one H1, canonical, meta description, OG title/description, and internal links.

### 2. Reusable Static Page Pattern

Because this site is static Bootstrap HTML, create a copyable page pattern instead of a component abstraction.

Recommended page structure:

1. Shared head block with analytics, favicon, CSS, canonical, OG, schema.
2. Shared header/nav.
3. Hero section.
4. Proof or fit strip.
5. Problem/recognition section.
6. Mechanism/workflow section.
7. Full-bleed statement section.
8. Use-case or buyer-job section.
9. Objection/control section.
10. Mid-page CTA.
11. Deeper detail/FAQ.
12. Bottom CTA/contact bridge.
13. Shared footer.
14. Shared JS.

CSS approach:

- Prefer page-local utility classes appended to `assets/css/main.css` under a clear comment such as `/* BotPlus kiosk page patterns */`.
- Do not make broad global resets.
- Reuse existing Bootstrap grid, `section`, `light-background`, `call-to-action`, `features`, `services`, `contact-form-card`, and icon patterns where they fit.
- Add only the layout primitives missing for these pages:
  - eyebrow/label text
  - proof strip
  - two-column workflow rows
  - comparison rows
  - full-bleed statement band
  - CTA panel
  - FAQ accordion or simple FAQ list

Visual rules from the page guidelines:

- Use micro-sections, not walls of text.
- Vary layout; avoid repeated three-card grids.
- Alternate intense full-width bands with lighter explanation sections.
- No visible strategy language.
- No text gradients or background gradients.
- No cards inside cards.
- Keep mobile stacks readable and varied.

## Page 1: Homepage Refresh

File:

- `index.html`

Page job:

- Brand/direct landing page.
- Explain BotPlus as the governed AI kiosk and service journey product.
- Route visitors to the correct commercial page.

SEO ownership:

- Owns: BotPlus brand, AI kiosk/service experience overview, GCC deployment context.
- Must not own: interactive kiosk software head term.

Primary CTA:

- Book an AI kiosk journey review.

Secondary CTA:

- Explore interactive kiosk solutions.

Recommended flow:

1. Hero: "AI kiosk and service journeys for high-touch locations."
2. Fast proof/fit strip: service centers, hotels, venues, events, showrooms.
3. Problem: static kiosks, front desks, and information desks break down during peak moments.
4. Mechanism: approved content, kiosk/avatar/web/WhatsApp, routing, staff handoff, analytics.
5. Use-case routing: self-service, AI kiosk, queue kiosk, visitor/wayfinding/hotel deferred teaser links.
6. Full-bleed statement: "The value is not that an avatar looks human. The value is that visitors finish the next step with control."
7. Governance/trust: content approval, data boundaries, handoff, fallback.
8. CTA: journey review.
9. FAQ/product boundaries: BotPlus vs chatbot, signage, hardware vendor, ResolveDesk, Entellex.

Technical tasks:

- Rewrite title and meta:
  - Title: `AI Kiosk and Interactive Service Journeys UAE | BotPlus`
  - Meta: summarize governed self-service, routing, staff handoff, and GCC deployment.
- Add SoftwareApplication or Organization schema.
- Replace old hero/video copy that centers digital brand ambassador positioning.
- Add prominent links to the four new pages.
- Keep existing video/media only if it supports kiosk/service journey framing; otherwise demote or replace in later asset pass.

Acceptance criteria:

- User understands BotPlus within the first viewport.
- Homepage routes to the gateway and pillars instead of trying to rank for every kiosk keyword.
- No call-center replacement or human replacement positioning appears.

## Page 2: Interactive Kiosk Gateway

File:

- `interactive-kiosk-solutions-uae.html`

Page job:

- Main commercial SEO gateway.
- Define the category and explain why BotPlus is more than kiosk hardware or signage.

SEO ownership:

- Owns: interactive kiosk UAE, kiosk software UAE, digital kiosk UAE.
- Must not own: AI avatar kiosk, queue management deep intent.

Primary CTA:

- Book an AI kiosk journey review.

Secondary CTA:

- Request a service-center pilot.

Recommended flow:

1. Hero: category phrase plus BotPlus angle.
2. Category clarity: what an interactive kiosk solution should do in a service location.
3. Problem: static signage and basic kiosks do not handle follow-up questions or staff handoff.
4. Architecture: kiosk interface, AI guidance, approved content, workflow routing, handoff, analytics.
5. Buyer-job routing: service center, queue, visitor intake, wayfinding, hotel, event, showroom.
6. AI/avatar differentiator: premium interface where it improves guidance, not the core claim.
7. Integration/deployment: queue systems, visitor systems, CRM, PMS, directories, digital signage where approved.
8. Objections: hardware, data capture, language, staff control, rollout scope.
9. CTA: journey review or pilot.
10. FAQ and links to self-service, AI kiosk, queue, and future security page.

Technical tasks:

- Create from the static page pattern.
- Add SoftwareApplication + FAQPage schema.
- Use the page as the primary internal hub for all other first-batch pages.
- Add canonical `https://www.botplus.ae/interactive-kiosk-solutions-uae.html`.
- Add internal links back to homepage and out to self-service, AI kiosk, queue kiosk.

Acceptance criteria:

- Page can convert without sending users back to homepage.
- Page clearly differentiates BotPlus from signage, hardware-only vendors, chatbots, and human information desks.
- Copy stays broad but does not steal deep queue/self-service page jobs.

## Page 3: Self-Service Kiosk UAE

File:

- `self-service-kiosk-uae.html`

Page job:

- Service-center and branch self-service pillar.

SEO ownership:

- Owns: self-service kiosk UAE, customer self-service kiosk.
- Must not own: broad interactive kiosk software.

Primary CTA:

- Request a service-center kiosk pilot.

Secondary CTA:

- Map a visitor journey.

Buyer:

- Service Center / Branch Operations Director.
- Service Excellence Manager.
- Customer Operations Director.
- Citizen Service Center Director.

Recommended flow:

1. Hero: self-service kiosk for approved visitor questions, routing, and staff handoff.
2. Recognition: repetitive questions, document confusion, queue pressure, multilingual guidance.
3. Before/after workflow: visitor arrives, chooses need, gets checklist/routing, hands off to staff if needed.
4. Controlled journey: approved answers, minimum data capture, service routing, handoff notes.
5. Required inputs: top 10-20 questions, service paths, queue/desk map, handoff rules.
6. Pilot scope: 30-60 days, one location, one kiosk/screen, 2-3 workflows, weekly usage report.
7. Full-bleed urgency: "Your team should not have to explain the same first step hundreds of times a week."
8. CTA: service-center pilot.
9. FAQ: integrations, language, regulated decisions, staff override, hardware.

Technical tasks:

- Add SoftwareApplication + FAQPage schema.
- Link to interactive kiosk gateway, AI kiosk, queue kiosk, and contact.
- Use a workflow/timeline layout instead of only cards.
- Include pilot metrics: interactions, answered questions, routing completions, handoffs, unsupported intents, staff feedback.

Acceptance criteria:

- The page feels specific to service centers and branch operations.
- It does not promise autonomous decision-making or no staff load.
- The first conversion point appears after workflow and control are clear.

## Page 4: AI Kiosk UAE

File:

- `ai-kiosk-uae.html`

Page job:

- AI differentiator pillar.
- Explain how BotPlus adds governed AI guidance to kiosk/self-service workflows.

SEO ownership:

- Owns: AI kiosk UAE, AI-powered kiosk, AI self-service kiosk.
- Must not own: AI avatar generator, interactive kiosk root.

Primary CTA:

- See a live kiosk/avatar demo.

Secondary CTA:

- Book an AI kiosk journey review.

Recommended flow:

1. Hero: AI kiosk that answers approved questions, routes visitors, and hands off to staff.
2. Category clarity: AI kiosk is a governed service layer, not a generic chatbot on a screen.
3. What AI changes: follow-up questions, multilingual guidance, context capture, fallback logic.
4. Control model: approved content, boundaries, escalation, data minimization, audit/analytics.
5. Example journeys: service-center checklist, hotel guest guidance, mall direction, event lead capture.
6. Avatar as optional interface: useful for premium or high-touch contexts, not required for every deployment.
7. Integration/deployment: kiosk, web, WhatsApp, staff dashboard.
8. Objections: accuracy, privacy, staff handoff, unsupported questions, implementation effort.
9. CTA: demo or journey review.
10. FAQ and links to gateway, self-service, queue, future avatar/security pages.

Technical tasks:

- Add SoftwareApplication + FAQPage schema.
- Avoid AI avatar generator language.
- Use an architecture/flow visual block:
  - visitor question -> approved answer/routing -> handoff card/dashboard -> analytics/follow-up.
- Track CTA clicks separately for `demo_requested` and `journey_review_requested` if analytics code is updated.

Acceptance criteria:

- Page explains AI value without making unsafe autonomy claims.
- Avatar is present as a differentiator but not the main category.
- Internal links make the page a bridge from gateway to use-case pillars.

## Page 5: Queue Management Kiosk Dubai

File:

- `queue-management-kiosk-dubai.html`

Page job:

- Branch/service-center queue pillar for Dubai/GCC intent.

SEO ownership:

- Owns: queue kiosk, queue management kiosk, queue management kiosk Dubai.
- Must not own: contact-center queue automation.

Primary CTA:

- Map a queue and visitor-routing journey.

Secondary CTA:

- Request a service-center pilot.

Buyer:

- Branch Operations Director.
- Service Center Manager.
- Service Excellence Manager.
- Digital Transformation / Innovation sponsor.

Recommended flow:

1. Hero: queue management kiosk for routing visitors before they reach the counter.
2. Recognition: wrong queues, missing documents, repeated desk questions, multilingual confusion.
3. Before/after: current queue friction vs guided queue intake and handoff.
4. BotPlus controlled journey: identify need, explain requirements, issue/route ticket where approved, hand off with context.
5. Required systems/content: service menu, queue categories, counter map, document checklists, escalation rules.
6. Pilot scope: one branch or service center, top queue types, 2-3 routing flows, weekly reporting.
7. Full-bleed operational statement: "The best queue interaction is the one that sends the visitor to the right next step."
8. Trust boundaries: no regulated decisions, staff override, data boundaries, fallback.
9. CTA: map a queue journey.
10. FAQ and links to self-service, gateway, visitor-management future page, contact.

Technical tasks:

- Add SoftwareApplication + FAQPage schema.
- Include Dubai/GCC context naturally; avoid thin geo stuffing.
- Include a simple queue-routing scenario:
  - visitor selects service -> kiosk checks document readiness -> routes to counter/queue -> creates handoff note.
- Do not mention contact-center or call-center queues except to clarify that this page is about physical/service-center visitor flow.

Acceptance criteria:

- Page is recognizably different from the self-service page.
- Dubai targeting is contextual and operational.
- CTA appears after the workflow and trust boundaries are clear.

## Shared SEO Metadata Plan

| Page | Title Draft | Meta Intent |
|---|---|---|
| `index.html` | AI Kiosk and Interactive Service Journeys UAE \| BotPlus | BotPlus helps GCC service locations deploy governed kiosk, web, WhatsApp, routing, and staff handoff journeys. |
| `interactive-kiosk-solutions-uae.html` | Interactive Kiosk Solutions UAE \| BotPlus | AI-guided interactive kiosk software for service centers, hotels, venues, events, and showrooms. |
| `self-service-kiosk-uae.html` | Self-Service Kiosk UAE for Service Centers \| BotPlus | Guided self-service kiosk journeys for approved questions, routing, document guidance, and staff handoff. |
| `ai-kiosk-uae.html` | AI Kiosk UAE for Guided Service Journeys \| BotPlus | Governed AI kiosk experiences that answer approved questions, route visitors, and escalate to staff with context. |
| `queue-management-kiosk-dubai.html` | Queue Management Kiosk Dubai \| BotPlus | Queue intake and visitor-routing kiosk journeys for Dubai service centers and branch operations. |

## Internal Linking Plan

Homepage:

- Links to all four first-batch commercial pages.

Interactive kiosk gateway:

- Links to homepage, self-service, AI kiosk, queue kiosk, contact.
- Mentions and later links to visitor management, wayfinding, hotel, avatar, event, and security pages once live.

Self-service kiosk:

- Links to gateway, queue kiosk, AI kiosk, contact.

AI kiosk:

- Links to gateway, self-service, queue kiosk, contact.
- Future links to avatar and security pages.

Queue management kiosk:

- Links to gateway, self-service, AI kiosk, contact.
- Future links to visitor management page.

## Conversion And Form Plan

Short-term:

- Use existing `contact.html` form and `book-demo.html` Calendly path.
- Add page-specific CTA query strings:
  - `contact.html?source=interactive-kiosk-solutions-uae`
  - `contact.html?source=self-service-kiosk-uae`
  - `contact.html?source=ai-kiosk-uae`
  - `contact.html?source=queue-management-kiosk-dubai`

Near-term enhancement:

- Add fields from `splan.md`:
  - country
  - industry
  - use case
  - location type
  - expected deployment date
  - preferred channel
  - current systems
- Add hidden `source_page`, `cta_location`, and `product_interest` fields.

Analytics events to add when feasible:

- `cta_click`
- `form_started`
- `form_submitted`
- `demo_requested`
- `pilot_requested`
- `journey_review_requested`
- `kiosk_use_case_selected`

## Build Order

### Pass 1: Template And Cleanup

1. Create shared static page pattern from the strongest existing HTML structure.
2. Update navigation/footer copy and links.
3. Add page-local CSS primitives for kiosk pages.
4. Clean unsafe positioning from homepage, footer, and first-batch pages.

### Pass 2: Homepage

1. Rewrite `index.html` around BotPlus positioning.
2. Add page routing, trust/governance, CTA, and FAQ/product boundaries.
3. Update metadata and schema.

### Pass 3: Gateway

1. Create `interactive-kiosk-solutions-uae.html`.
2. Make it the broad hub for kiosk/software category intent.
3. Add links to all first-batch pillars.

### Pass 4: Pillars

1. Create `self-service-kiosk-uae.html`.
2. Create `ai-kiosk-uae.html`.
3. Create `queue-management-kiosk-dubai.html`.
4. Ensure each pillar has a different buyer job and does not duplicate gateway copy.

### Pass 5: SEO And QA

1. Update `sitemap.xml`.
2. Check canonical URLs.
3. Check H1 count on every page.
4. Check all internal links.
5. Run local visual QA.

## QA Plan

Run a local server:

```powershell
python -m http.server 4327
```

Screenshot pages:

```powershell
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/index.html tmp\screenshots\botplus-home-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/index.html tmp\screenshots\botplus-home-mobile.png
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/interactive-kiosk-solutions-uae.html tmp\screenshots\interactive-kiosk-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/interactive-kiosk-solutions-uae.html tmp\screenshots\interactive-kiosk-mobile.png
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/self-service-kiosk-uae.html tmp\screenshots\self-service-kiosk-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/self-service-kiosk-uae.html tmp\screenshots\self-service-kiosk-mobile.png
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/ai-kiosk-uae.html tmp\screenshots\ai-kiosk-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/ai-kiosk-uae.html tmp\screenshots\ai-kiosk-mobile.png
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/queue-management-kiosk-dubai.html tmp\screenshots\queue-kiosk-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/queue-management-kiosk-dubai.html tmp\screenshots\queue-kiosk-mobile.png
```

Manual review checklist:

- Page reads like a guided conversation, not a section list.
- First CTA appears only after enough context exists.
- Form/contact bridge is not buried at the bottom only.
- No repeated three-card rhythm for multiple sections in a row.
- No walls of text.
- Mobile keeps the same story and does not become a long stack of identical cards.
- Text does not overlap or overflow.
- No internal strategy notes visible.
- No unsupported compliance/security claims.
- No unsafe AI, staff replacement, call-center replacement, or guaranteed savings claims.

## Definition Of Done

- `index.html` repositioned and cleaned.
- Four new static HTML pages created.
- Shared nav/footer updated across first-batch pages.
- `sitemap.xml` updated.
- Metadata, OG tags, canonical tags, and schema added.
- Internal links follow the page ownership model.
- CTAs route to `contact.html` or `book-demo.html` with source attribution where possible.
- Desktop and mobile screenshots reviewed for all five pages.
- Existing static pages remain live unless deliberately redirected in a later rebuild.
