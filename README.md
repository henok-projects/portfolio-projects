# Henok Addis Meles - Software Engineer Portfolio

A recruiter-focused portfolio for Henok Addis Meles, a Senior Software Engineer specializing in Java, Spring Boot, microservices, secure APIs, fintech integrations, and enterprise software delivery.

## Technology

- Angular 22 standalone application with zoneless change detection
- TypeScript 6, RxJS 7, and the Angular esbuild/Vite build system
- Vitest and jsdom component tests
- Responsive, accessible, semantic one-page portfolio with CV download and structured-data metadata

## Prerequisites

Use Node.js `24.15.0` or newer compatible release (Node 26 is also supported) and npm 11 or newer.

```powershell
node --version
npm --version
```

The versions must satisfy the `engines` field in `package.json`. If you use nvm for Windows, switch before installing:

```powershell
nvm use 24.15.0
```

## Run locally

```powershell
npm install
npm start
```

Open `http://localhost:4200`.

## Verify and build

```powershell
npm test
npm run build
```

The production build is written to `dist/my-portfolio`.
