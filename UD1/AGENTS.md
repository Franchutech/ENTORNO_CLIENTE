# AGENTS.md

## Project overview
This repository contains a small set of front-end practice exercises built with static HTML and Bootstrap. The main deliverables live in dedicated activity folders such as:

- `act1.maquetado bootstrap/`
- `act2.flexbox _froggy/`

There is no app framework, package manager, or automated test suite in this workspace. Treat the project as a collection of standalone HTML pages and assets.

## Working conventions
- Keep changes scoped to the specific activity being edited.
- Prefer semantic HTML and Bootstrap utility classes when matching the existing visual style.
- Preserve the current folder names and activity structure unless the task explicitly requires renaming or restructuring.
- Keep copy and labels consistent with the existing language/style of the exercise (mostly Spanish UI text).
- Do not introduce new libraries, build tooling, or frameworks unless the task explicitly asks for them.

## Validation workflow
- Open the relevant `index.html` in a browser to verify layout and behavior.
- If a quick local preview is needed, run a lightweight static server from the activity folder, for example:

  ```bash
  python -m http.server 8000
  ```

- Then open `http://localhost:8000` in the browser and check the page visually.

## Files to inspect first
- `act1.maquetado bootstrap/index.html` for the Bootstrap landing page exercise.
- The HTML file inside `act2.flexbox _froggy/` for the flexbox challenge, along with any related assets or screenshots in that folder.

## Do not do unless asked
- Do not add a build pipeline, package.json, or JS framework.
- Do not refactor unrelated files.
- Do not change the exercise structure or rename folders without explicit instruction.
