# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 + TypeScript portfolio built with Vite. Application code lives in `src/`: route pages are in `src/page`, reusable UI is in `src/components`, typed content data is in `src/data`, shared types are in `src/types`, and global styling is in `src/style/global.css`. Test setup is in `src/test/setup.ts`, with tests colocated beside the code they cover using `*.test.ts` or `*.test.tsx`. Static public assets live in `public/`, while imported React/Vite assets live in `src/assets/`.

## Build, Test, and Development Commands

The project includes a `bun.lock`, so prefer Bun for installs when adding dependencies. The scripts also run through npm-compatible commands:

- `npm run dev` starts the Vite development server.
- `npm run build` runs TypeScript project builds and creates the production Vite bundle.
- `npm run preview` serves the built app locally.
- `npm run lint` runs ESLint across the repository.
- `npm run test` starts Vitest in watch mode.
- `npm run test:run` runs the Vitest suite once for CI-style verification.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Components and exported page modules use PascalCase, such as `ProjectCard.tsx` and `ProjectDetail.tsx`. Data modules and helpers use camelCase exports, such as `getProjectBySlug`. Prefer the `@/` alias for imports from `src`. Current source files use two-space indentation, double quotes, semicolons, and concise JSX. Keep portfolio content in `src/data` typed against interfaces from `src/types`.

## Testing Guidelines

Vitest runs in a `jsdom` environment with Testing Library and `@testing-library/jest-dom` configured by `src/test/setup.ts`. Add or update tests when changing routing, rendered content, data helpers, or user-visible behavior. Prefer accessibility-first queries like `screen.getByRole(...)`. Name tests after the unit or route under test, for example `App.test.tsx`, `ProjectDetail.test.tsx`, or `project.test.ts`.

## Commit & Pull Request Guidelines

Git history is currently minimal, so keep commit subjects short, imperative, and specific, for example `add project detail tests`. Before opening a pull request, run `npm run lint`, `npm run test:run`, and `npm run build`. PR descriptions should summarize the change, list verification performed, link related issues when available, and include screenshots or short screen recordings for visual UI changes. for every changes that made to the project, the commit message must include the following tags:
- `#bugfix` for bug fixes
- `#feature` for new features
- `#refactor` for code refactors without user-visible changes
- `#content` for changes to portfolio content
- `#docs` for documentation updates
- `#test` for changes to tests or test setup
- `#build` for changes to build scripts or configuration
- `#chore` for other maintenance tasks that don't fit the above categories
- `#wip` for work-in-progress commits that are not ready to be merged
- `#skip` for commits that should be excluded from release notes or changelogs, such as minor fixes or formatting changes
- `#release` for commits that trigger a new release or deployment, such as merging a PR to main or tagging a commit with a version number
- `#hotfix` for urgent fixes that need to be deployed immediately, such as critical bugs or security issues
- `#rollback` for commits that revert a previous commit, such as undoing a bad change or restoring a previous state
- `#fix` for commits that fix a specific issue or bug, such as correcting a typo or resolving a test failure
- `#style` for commits that only change formatting, whitespace, or code style, without affecting functionality
- `#perf` for commits that improve performance, such as optimizing algorithms or reducing load times
- `#ci` for commits that affect continuous integration or deployment, such as updating CI configuration

## Agent-Specific Instructions

Keep edits narrowly scoped and avoid unrelated refactors. Do not commit generated `dist/` output unless explicitly requested. When updating project content, preserve existing slug patterns because routes depend on them.
