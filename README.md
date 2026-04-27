# Personal Portfolio Website

A clean, responsive portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Edit your content

Most visible page content lives in one file:

```txt
lib/portfolio-data.ts
```

Update your name, role, intro, skills, projects, experience, contact links, and footer text there.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Check the project

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

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the repository.
4. Keep the default Next.js settings.
5. Click **Deploy**.

After deployment, update `profile.siteUrl` in `lib/portfolio-data.ts` to your live domain for accurate SEO metadata.
