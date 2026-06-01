# TIH Website

A sleek one-page landing site for the Christian fantasy novel **Trapped In Heaven**.

## Local setup

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

## Build

```bash
npm run build
```

## Deploy through GitHub + Vercel

```bash
git init
git add .
git commit -m "Initial Trapped In Heaven website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

Then connect the GitHub repository in Vercel and assign your custom domain.

## Things to replace

- Replace quote placeholders in `src/App.jsx`.
- Replace gallery placeholders with real artwork or image components.
- Replace the Formspree action URL in the signup form.
- Add preorder button URL when the store/book listing is ready.
- Update metadata in `index.html` after the domain and final book description are locked.
