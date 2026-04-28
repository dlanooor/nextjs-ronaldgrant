# Ronald Grant Portfolio

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16.2.4-111111?style=for-the-badge&logo=nextdotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111111" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-ec4899?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Vercel Analytics" src="https://img.shields.io/badge/Vercel_Analytics-enabled-ff5fa2?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

Personal portfolio for **Ronald Grant**, a Quality Assurance Engineer focused on reliable product delivery, end-to-end testing, API validation, automation, and practical test strategy.

The site is designed to feel polished and direct: dark-first, responsive, pink-accented, animated, and easy to update from one data file.

## Highlights

<table>
  <tr>
    <td><strong>Dark-first theme</strong></td>
    <td>Modern dark interface with a light/dark toggle and saved theme preference.</td>
  </tr>
  <tr>
    <td><strong>Personal content system</strong></td>
    <td>Profile, skills, works, experience, links, and footer content live in one editable data file.</td>
  </tr>
  <tr>
    <td><strong>Portfolio sections</strong></td>
    <td>Hero, About, Skills, Works, Experience, Contact, and Footer.</td>
  </tr>
  <tr>
    <td><strong>Polished motion</strong></td>
    <td>Subtle staggered reveals, card hover glows, animated stats, and accessible reduced-motion support.</td>
  </tr>
  <tr>
    <td><strong>Deployment-ready</strong></td>
    <td>Built with Next.js App Router, TypeScript, Tailwind CSS, SEO metadata, and Vercel Analytics.</td>
  </tr>
</table>

## Color Direction

The current visual identity uses a dark neutral base with bright pink accents.

| Token | Use |
| --- | --- |
| `#080808` | Primary dark background |
| `#f5f5f5` | Main foreground text |
| `#db2777` | Primary pink accent |
| `#f472b6` | Soft pink highlight |
| `#2563eb` | Traveloka work accent |
| `#f59e0b` | Blibli work accent |

## Project Structure

```txt
app/
  layout.tsx        Root layout, fonts, SEO metadata, analytics
  page.tsx          Main page composition
  globals.css       Tailwind import, theme tokens, animations

components/
  *-section.tsx     Reusable page sections
  site-header.tsx   Responsive header and mobile menu
  theme-toggle.tsx  Persistent light/dark theme switch

lib/
  portfolio-data.ts Editable portfolio content
```

## Edit Content

Most visible website content lives here:

```txt
lib/portfolio-data.ts
```

Update that file to change:

- Name, role, location, email, intro, and CTA links
- Hero image and current focus text
- Skills and grouped skill details
- Works cards and company links
- Experience timeline
- Social links and footer text

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Quality Checks

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run start
```

## Deploy

This project is ready for Vercel.

1. Push the repository to GitHub.
2. Open [Vercel](https://vercel.com/new).
3. Import the repository.
4. Keep the default Next.js settings.
5. Deploy.

After deployment, update `profile.siteUrl` in `lib/portfolio-data.ts` to your live domain so SEO metadata points to the correct URL.

## Built With

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel Analytics
- A tiny local content layer in `lib/portfolio-data.ts`
