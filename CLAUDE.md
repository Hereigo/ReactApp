# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A React 16 learning project with two parts:

- The repo root is a create-react-app project (`react-scripts` 1.1.5, React 16.14). Its source is in `src/`, and `public/index.html` is the page template.
- `docs/` holds standalone lesson pages that run in the browser with no build step.

## Commands

Run these from the repo root:

- `npm start`: dev server with hot reload.
- `npm run build`: production bundle in `build/`, which is gitignored.
- `npm test`: Jest in watch mode. Use `CI=true npm test` for a single non-interactive run. Add a filename pattern to run one test file, e.g. `CI=true npm test -- App`.

`react-scripts` 1.1.5 is old, but the build and tests both work on Node 22. The build prints a `util._extend` deprecation warning, which can be ignored.

## The app (`src/`)

- `src/index.js` mounts `App` with the React 16 API `ReactDOM.render(<App />, document.getElementById('root'))` and calls `registerServiceWorker()`.
- `src/App.js` is still the create-react-app template: a class component (`extends Component`).
- Tests sit next to the code as `*.test.js` (`src/App.test.js`).
- Keep the React 16 API (`ReactDOM.render`, not `createRoot`) unless asked to upgrade.

## Lessons (`docs/`)

- Lessons are numbered in course order with a two-digit prefix (`01_Example.html`, `02_Classes.jpg`, `03_Spread_n_Rest.html`), so the next lesson is `04_...`. To run one, open the `.html` file directly in a browser.
- A lesson can be an `.html` page or an image. Image lessons (such as `02_Classes.jpg`) are course slides kept as reference material, not app code.
- Not every lesson uses React. `03_Spread_n_Rest.html` covers plain ES6 syntax in a `<script type="text/javascript">` tag and logs results to the console.
- React lessons load React and ReactDOM 16 as UMD builds from unpkg (`https://unpkg.com/react@16/...`). They transpile JSX in the browser: each page loads Babel standalone (`https://unpkg.com/@babel/standalone@7.24.0/babel.min.js`) after React and ReactDOM, and puts its JSX in a `<script type="text/babel">` tag. A plain `<script>` containing JSX throws a syntax error, so a new React lesson needs both of these.
- Lessons don't share code with `src/`. Each page is self-contained.
