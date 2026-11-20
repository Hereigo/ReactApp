# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A React 16 learning project. There is no build system, package manager, linter or test suite: no `package.json`, no `node_modules`, no bundler. Each lesson is a standalone `.html` file that loads React and ReactDOM 16 as UMD builds from unpkg (`https://unpkg.com/react@16/...`) and runs inline scripts.

## Running

Open an `.html` file directly in a browser. There is nothing to build, install or test.

## Structure and conventions

- `A_Primitive.html`: the first lesson. It defines a function component (`Person`) and mounts it with the React 16 API `ReactDOM.render(<Component />, container)`. Keep the React 16 API (`ReactDOM.render`, not `createRoot`) unless asked to upgrade.
- Lesson files are named with a letter prefix (`A_...`), which suggests later lessons will follow as `B_...`, `C_...`.
- `Components.jpg`: a course slide on splitting a page into reusable components. It is reference material, not app code.
- `.gitignore` is the stock Visual Studio template, not tailored to this project.

## JSX without a build step

Lessons transpile JSX in the browser. Each page loads Babel standalone (`https://unpkg.com/@babel/standalone@7.24.0/babel.min.js`) after React and ReactDOM, and puts its JSX in a `<script type="text/babel">` tag. A plain `<script>` containing JSX throws a syntax error, so a new lesson needs both of these.
