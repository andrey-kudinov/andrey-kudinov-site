# React Vite Starter
Starter template for small React Vite app.

Alternative to [next-starter](https://github.com/saltyAom/next-starter) for small app.

## Featuring
- Vite
    - Blazing fast bundler.
- Starting at 10KB
    - With Preact configured.
- Router at 400 bytes
    - Pre-configured [wouter](https://github.com/molefrog/wouter) at the cost of 400 bytes
- Prerender and hydration
    - Pre-render with custom scripts `tools/prerender.ts`
- TypeScript
    - TypeScript pre-configured.
- Tailwind
    - Preconfigured tailwind
- Sass
    - Sass pre-configured
- Module Alias
    - Handy path aliases for production grade app.

## Dynamic Path alias
List of path aliased:
- `@pages` - src/pages
- `@layouts` - src/layouts
- `@components` - src/components
- `@styles` - src/styles
- `@services` - src/services
- `@models` - src/models
- `@stores` - src/stores
- `@tailwind` - src/services/tailwind/index.ts
- `@atoms` - src/components/atoms
- `@molecules` - src/components/molecules
- `@organisms` - src/components/organisms

## Issue
- The template doesn't support page-level code splitting yet.
Using `React.lazy` and `Suspense` broke the `ReactDOM.hydrate`, I'm finding a way to deal with it.
- Vite fast refresh doesn't support sub module file.
You will need to do maunal refresh.