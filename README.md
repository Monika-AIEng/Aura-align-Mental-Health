# AuraAlign Mental Health Initiative

AuraAlign Mental Health Initiative is a React + TanStack Start website focused on mental health awareness, support, and community outreach across India. The site presents the organization’s mission, programs, volunteer opportunities, donation flow, emergency resources, and real recovery stories in a polished public-facing experience.

## What’s Inside

- A strong landing page with calls to action for help, volunteering, and donations
- About, programs, stories, contact, and emergency support pages
- Volunteer and donation forms with in-app confirmation states
- File-based routing powered by TanStack Router / TanStack Start
- A shared page shell, reusable UI components, and asset-driven content sections

## Tech Stack

- React 19
- TanStack Start
- TanStack Router
- Vite
- TypeScript
- Tailwind CSS 4
- Radix UI primitives
- Lucide icons

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Monika-AIEng/mental-align-hope.git
cd mental-align-hope
bun install
```

If you prefer npm, use `npm install` instead of `bun install`.

## Available Scripts

```bash
bun dev
bun build
bun build:dev
bun preview
bun lint
bun format
```

- `bun dev` starts the local development server.
- `bun build` creates a production build.
- `bun preview` serves the production output locally.
- `bun lint` runs ESLint.
- `bun format` formats the codebase with Prettier.

## Project Structure

- `src/routes/` contains the file-based routes.
- `src/components/` contains the shared shell and UI pieces.
- `src/data/` contains story content and related data.
- `src/assets/` contains the image asset metadata used by the pages.

## Main Routes

- `/` home page
- `/about` organization overview
- `/programs` program overview
- `/stories` success stories
- `/volunteer` volunteer registration
- `/donate` donation flow
- `/contact` contact page
- `/emergency` crisis resources and helplines

## Notes

- The emergency page includes direct helpline links for crisis support, including 112 and Tele-MANAS.
- Route definitions live in `src/routes/`; `src/routes/README.md` explains the file-based routing convention used by the project.
- The project is connected to Lovable, so avoid rewriting published git history.
