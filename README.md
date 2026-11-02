# G3 Architects — React + Vite

## Run locally
1. Install Node.js (LTS recommended).
2. Open this folder in VS Code.
3. In the terminal run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.

## Pages
- `/` — G3 Architects home page
- `/login` — Login page
- `/signup` — Sign Up page

## Main files
- `src/App.jsx` — Routes and home page
- `src/pages/Login.jsx` — Login form UI
- `src/pages/Signup.jsx` — Sign Up form UI
- `src/index.css` — Tailwind import and custom auth-page styles
- `src/main.jsx` — React entry point and BrowserRouter

**Authentication note:** Login and Sign Up currently validate the form in the browser only. They do not create accounts or authenticate users yet. For real authentication, connect these forms to a backend API (for example Node.js + Express) and store users securely in MongoDB. Never store plain-text passwords in the frontend or database.
