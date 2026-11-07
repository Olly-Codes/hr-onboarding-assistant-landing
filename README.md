# HR Onboarding Assistant – Landing Page

The landing page for the **HR Onboarding and Compliance Automation** project. New hires reach it from the invitation email. It hosts the **Infobip live chat widget** where they verify themselves and sign their offer letter, employment contract and policy documents. It also contains the **thank-you page** that DocuSign returns them to after signing.

**Live:** https://olly-codes.github.io/hr-onboarding-assistant-landing/

## Landing page & chat widget
<img width="1920" height="957" alt="Welcome to HRAutomationLabs" src="https://github.com/user-attachments/assets/81716c35-05d1-43d4-8a31-e2fdd82094f7" />


## Pages

| Page | Address | Purpose |
| --- | --- | --- |
| Landing page | `/` | Welcome, a short overview of the journey, FAQ, and a *Start onboarding chat* button that opens the widget |
| Thank-you page | `/thank-you.html` | Shown after a document is signed. It tells the new hire to close the page and return to the chat. This address is DocuSign's return URL |

## Tech stack

- [Vite](https://vite.dev/) with plain HTML, CSS and JavaScript (no framework)
- Infobip live chat widget
- GitHub Pages, deployed by GitHub Actions

There is no server code and no secret in this repository.

## Getting started

Prerequisite: Node.js 22 and npm.

```bash
git clone https://github.com/Olly-Codes/hr-onboarding-assistant-landing.git
cd hr-onboarding-assistant-landing
npm install
npm run dev
```

Open the address shown in the terminal. Because of the base path (see below) it ends in `/hr-onboarding-assistant-landing/`.

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the site into `dist/` |
| `npm run preview` | Serves the built site locally so you can check it |

## Configuration

| Setting | Where | Notes |
| --- | --- | --- |
| Widget ID | `index.html`, in `liveChat('init', '<widget id>')` near the end of the file | Use the widget ID from your Infobip live chat widget. It is not a secret |
| Base path | `vite.config.js`, `base` | Must be `/<repository name>/`. Change it if the repository is renamed or a custom domain is used |
| Pages to build | `vite.config.js`, `build.rollupOptions.input` | Any new `.html` page must be listed here |

## Project structure

```
├── index.html                 Landing page and the Infobip widget script
├── thank-you.html             Page DocuSign returns the new hire to
├── vite.config.js             Base path and the pages to build
├── public/favicon.ico         Copied into the site unchanged
├── src/
│   ├── main.js                Opens the chat when a button is clicked
│   ├── style.css              Shared styles
│   ├── thank-you.css          Thank-you page styles
│   └── assets/HRAuto-logo.png
└── .github/workflows/deploy.yml   Build and deploy to GitHub Pages
```

Any element with the attribute `data-open-chat` opens the widget when clicked (see `src/main.js`).

## Deployment

Deployment is automatic with GitHub Actions (`.github/workflows/deploy.yml`).

1. One time only: in the repository, go to **Settings → Pages** and set the source to **GitHub Actions**.
2. Push to `main`. The workflow installs Node 22, runs `npm ci` and `npm run build`, and publishes the `dist/` folder.
3. The workflow can also be started by hand from the **Actions** tab.

If either address changes, update it in the Zaps too: the landing page address is used in the invitation and return-link emails, and the thank-you page address is DocuSign's return URL.

## Related

- HR web application (request form, approval page, dashboard): https://github.com/Olly-Codes/hr-onboarding-form
- Full setup, architecture and code documentation: see the project documentation package (sections 6 and 7).
