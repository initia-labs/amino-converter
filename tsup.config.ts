import { resolve } from 'path'
import { readFile, writeFile } from 'fs/promises'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,

  // Fix imports: Node.js requires .js extensions for ES modules
  // The @initia proto packages export without extensions, causing module resolution errors
  async onSuccess() {
    try {
      const esmFile = resolve('./dist/index.mjs')
      const content = await readFile(esmFile, 'utf-8')

      // Packages that need .js extensions added to their imports
      const targetPackages = ['@initia/initia.proto', '@initia/opinit.proto']

      // Create regex pattern from target packages
      const escapedPackages = targetPackages.map((pkg) =>
        pkg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      )
      const packagePattern = escapedPackages.join('|')

      // Match import statements with captured groups for quote style and path
      // Group 1: opening quote (' or ")
      // Group 2: the full path including package name
      // Group 3: closing quote (same as opening)
      const regex = new RegExp(
        `from\\s+(['"])((?:${packagePattern})/[^'"]+)(['"])`,
        'g'
      )

      // Add .js extension to matching imports, preserving quote style
      const modifiedContent = content.replace(
        regex,
        (match, openQuote, path, closeQuote) => {
          // Skip if already ends with .js
          if (path.endsWith('.js')) {
            return match
          }
          // Return with .js extension and preserved quote style
          return `from ${openQuote}${path}.js${closeQuote}`
        }
      )

      await writeFile(esmFile, modifiedContent)
      console.log('✅ Fixed imports by adding .js extensions')
    } catch (error) {
      console.error('❌ Failed to fix imports:', error)
      process.exit(1)
    }
  },
})
