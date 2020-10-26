import path from 'path'
import {
  MarkdownTranspiler,
  FileCreatorSvelte3
} from '@gabio/markdown-transpiler'
import { GioSvelteMarkdownParser } from '@gabio/design-svelte/lib/markdown'

const inputPattern = path.resolve(__dirname, '../articles') + '/**/*.md'
const outputDir = path.resolve(__dirname, '../src/data/articles')

const markdownCompiler = new MarkdownTranspiler({
  parser: new GioSvelteMarkdownParser(),
  fileCreator: new FileCreatorSvelte3()
})

markdownCompiler.transpileFiles(inputPattern, outputDir)
