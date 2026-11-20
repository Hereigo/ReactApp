# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A React 16 learning project. The lessons have no build step, linter or test suite. Each lesson is a standalone `.html` file in `docs/` that runs inline scripts. React lessons load React and ReactDOM 16 as UMD builds from unpkg (`https://unpkg.com/react@16/...`).

## Running

Open a lesson `.html` file directly in a browser. Lessons need nothing installed or built.

## Structure and conventions

- `docs/` holds the lessons. They are numbered in course order with a two-digit prefix (`01_Example.html`, `02_Classes.jpg`, `03_Spread_n_Rest.html`), so the next lesson is `04_...`.
- A lesson can be an `.html` page or an image. Image lessons (such as `02_Classes.jpg`) are course slides kept as reference material, not app code.
- Not every lesson uses React. `03_Spread_n_Rest.html` covers plain ES6 syntax in a `<script type="text/javascript">` tag and logs results to the console.
- `docs/01_Example.html` defines a function component (`Person`) and mounts it with the React 16 API `ReactDOM.render(<Component />, container)`. Keep the React 16 API (`ReactDOM.render`, not `createRoot`) unless asked to upgrade.
- `.gitignore` is the stock Visual Studio template, not tailored to this project. It already ignores `node_modules`.

## JSX without a build step

React lessons transpile JSX in the browser. Each page loads Babel standalone (`https://unpkg.com/@babel/standalone@7.24.0/babel.min.js`) after React and ReactDOM, and puts its JSX in a `<script type="text/babel">` tag. A plain `<script>` containing JSX throws a syntax error, so a new React lesson needs both of these.

## create-react-app

`package.json` at the root has a single dependency, `create-react-app`, and no scripts, so `npm start` does nothing at the root. `README.md` describes the intended use: scaffold a separate app with `create-react-app My-React-App --scripts-version 1.1.5`, then run `npm start` inside that app's folder. Because the package is installed locally, not globally, the command is not on `PATH`; run it as `npx create-react-app ...`.
