# Swadesh Seva Sansthan — React NGO Website

A responsive NGO website for Swadesh Seva Sansthan, built with React and Vite. Its programs, organization history, branch locations, donation details, and contact information are based on the provided brochure and organization details.

## Files
- `src/App.jsx` — page layout and remaining sections
- `src/components/` — separate Header, Hero, About, Contact, floating actions, and shared Arrow components
- `src/data.js` — editable organization content, programs, branches, campaigns, and impact figures
- `logo.jpg`, `hero1.png`–`hero4.jpeg` — organization logo and community photos used on the site
- `css/style.css` — styling and responsive layout
- `index.html` — Vite entry point

The header includes a light/dark theme switch. Floating buttons provide quick WhatsApp, phone, and back-to-top actions. Brochure information is presented in the organization, program, initiative, branch, gallery, impact, donation, and contact sections.

## Run
Install dependencies with `npm install`, then start the development server with `npm run dev`.
Use `npm run build` to create a production build.

## Customize
Edit `NGO_DATA` in `src/data.js` to update organization information, contact details, programs, campaigns, and impact figures. The contact form currently displays a demo confirmation and does not send messages.
