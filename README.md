# gas-vue-demo

A modern Google Apps Script (GAS) web application template powered by Vue 3 and Vite.

## Project Structure

```
gas-vue-demo/
├── frontend/           # Vue 3 frontend source code
├── src/                # Google Apps Script backend & bundled output
│   ├── Code.js         # GAS server-side functions (doGet, etc.)
│   └── Page.html       # Bundled frontend output served by GAS
├── package.json        # Project scripts and dependencies
└── vite.config.js      # Vite configuration for building single-file output
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Google Apps Script CLI (`clasp`)](https://github.com/google/clasp) installed globally (`npm install @google/clasp -g`)

## Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Login to clasp:**
   ```bash
   clasp login
   ```

3. **Run Vite development server:**
   ```bash
   npm run dev
   ```

## Build & Deployment

- **Build frontend and update GAS template:**
  ```bash
  npm run build:frontend
  ```
  *(This builds the Vue app and copies the output to `src/Page.html`)*

- **Push to Google Apps Script:**
  ```bash
  npm run push
  ```
  *(Builds the frontend and pushes code via clasp)*
