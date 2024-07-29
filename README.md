# Turborepo Starter: Fuma Docs, Tailwind, Shadcn UI

This repository is a Turborepo starter configured with Shadcn UI and Fuma Docs, following best practices. 

> [!NOTE]
> This example uses `pnpm` as the package manager.

## Getting Started

Clone the repository:

```sh
git clone https://github.com/saadi925/next-turbo-super

```
```
cd turborepo-shadcn-ui
pnpm install
```
## Adding UI Components
Use the pre-made script to add UI components:
```
pnpm ui:add <component-name>
```

This works just like the add command in the shadcn/ui CLI.

## Adding a New App
Turborepo offers a simple command to add a new app:

```
pnpm turbo gen workspace --name <app-name>
```
This will create a new empty app in the apps directory. To copy an existing app:

```
pnpm turbo gen workspace --name <app-name> --copy
```

[!NOTE]
Remember to run pnpm install after copying an app.

## What's Inside?
This Turborepo includes the following packages/apps:

## Apps
- docs: a Next.js app (With [FumaDocs](https://fumadocs.vercel.app/docs/ui))
- web: another Next.js app

## Packages
- @repo/ui: a shared React component library powered by shadcn/ui and tailwind css
- @repo/eslint-config: ESLint configurations including eslint-config-next and eslint-config-prettier
- @repo/typescript-config: Shared tsconfig.json files

# Utilities 

TypeScript for static type checking
ESLint for code linting
Prettier for code formatting

## Commands
Build
To build all apps and packages: