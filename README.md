# Frederique Bruell Golf — design preview

A Next.js (App Router) scaffold of the Quiet Editorial design, for showing Frederique the direction. Content is placeholder or draft where noted.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home, version 5a (Quiet Editorial) |
| `/home-b` | Home, version 5b (Night Course) |
| `/home-c` | Home, version 5c (Clubhouse Light) |
| `/about` | About Frederique |
| `/coaching` | Coaching & programs |
| `/womens-clinics` | Women's golf & clinics |
| `/students` | Student success |
| `/insights` | Golf insights |
| `/book` | Book a lesson (form shows a confirmation, not wired to email yet) |

The header has links to all three home versions. The floating **Accent** switch (bottom right) swaps the highlight color (Blush, Butter, Sky, Sage, Peach) and remembers the choice.

## Deploying

Pushes to `main` deploy on Vercel (framework preset: Next.js, no env vars needed).

## Where things live

- `lib/content.ts` — programs, clinics, stories, insights (edit copy here)
- `app/globals.css` — colors, accent palettes, type and layout classes
- `components/` — Header, Footer, AccentSwitch, Reveal (scroll fade-in), RotatingWord, Placeholder

## Before launch

- Replace `Placeholder` blocks with real photos/video
- Confirm credentials, quotes, and clinic details with Frederique (drafts are labelled)
- Connect the booking form (e.g. Formspree, Resend, or her scheduler) and add spam protection
