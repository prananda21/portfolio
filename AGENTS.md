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
- Follow Conventional Commit style seen in history: `feat: ...`, `fix: ...`, `refactor: ...`, `chore: ...`, `hotfix: ...`.
- Keep commits scoped (one logical change per commit) and use imperative summaries.
- PRs should include: purpose, key changes, test evidence (`bun run test`, lint/format status), and related issue/ticket.
- For API changes, include sample request/response or endpoint notes.

## Agent-Specific Instructions

Keep edits narrowly scoped and avoid unrelated refactors. Do not commit generated `dist/` output unless explicitly requested. When updating project content, preserve existing slug patterns because routes depend on them.
