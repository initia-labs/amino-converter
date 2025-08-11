import { defineConfig } from 'tsup'

// IMPORTANT: Building as CommonJS only for compatibility with @initia proto packages
//
// The @initia/initia.proto and @initia/opinit.proto packages are built as CommonJS modules
// with .js extensions. When this package is built as ESM, Node.js ESM loader attempts to
// import these .js files as ES modules, but they contain CommonJS syntax (module.exports),
// causing "Cannot use import statement outside a module" or similar errors.
//
// Even with explicit .js extensions in imports, the module format mismatch persists because:
// 1. Proto packages don't declare "type": "module" in package.json
// 2. Generated files use CommonJS exports (exports.xxx = ...) not ES exports
// 3. Different bundlers (Webpack, Vite, esbuild) interpret .js files inconsistently
//
// Using CommonJS ensures consistent behavior across all environments and avoids the
// dual package hazard where ESM consumers would fail at runtime.

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
})
