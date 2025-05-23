# My UI Component Library

This project is a modular, scalable UI component library built with:

- [Fractal](https://fractal.build/)
- SCSS for styling
- Handlebars for templating
- Vanilla JavaScript (with accessibility support)
- Webpack for bundling assets

---

## Getting Started

After cloning this project, follow the steps below to get it running locally:

### 1. Install dependencies

```bash
npm install
```

### 2. Build assets (JS and SCSS)

```bash
npm run build
```

### 3. Start Fractal component explorer

```bash
npm start
```


## Project Structure

```bash
.
├── components/           # All your Fractal components (tabby, hero-section, etc.)
├── docs/                 # Fractal documentation pages (Markdown)
├── public/               # Compiled JS/CSS output from Webpack
├── src/                  # Source JS & SCSS
│   ├── js/
│   └── scss/
├── fractal.js            # Fractal config
├── webpack.config.js     # Webpack config
├── package.json          # Project metadata & scripts
├── .gitignore
└── README.md
