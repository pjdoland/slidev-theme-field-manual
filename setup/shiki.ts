/**
 * Field Manual Theme — Custom Shiki Syntax Highlighting
 * Maps to the FM color palette: warm paper / olive / signal red / blueprint blue
 *
 * Exports a plain function — Slidev calls setup/shiki.ts default export as a function.
 * No imports needed; @slidev/types may not be installed locally in the theme directory.
 */
export default () => {
  return {
    theme: {
      // ── Light theme (aged paper) ────────────────────────────────────────
      light: {
        name: 'field-manual-light',
        type: 'light',
        bg: '#ede8d0',
        fg: '#1a1a14',
        colors: {
          'editor.background':              '#ede8d0',
          'editor.foreground':              '#1a1a14',
          'editor.lineHighlightBackground': '#e0d8be',
          'editorLineNumber.foreground':    '#8a7a50',
          'editorLineNumber.activeForeground': '#5c5c30',
          'editorCursor.foreground':        '#8b1a1a',
          'editor.selectionBackground':     '#c8b87a44',
        },
        tokenColors: [
          // Comments — muted khaki, italic
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#8a7a50', fontStyle: 'italic' },
          },
          // Keywords — signal red
          {
            scope: [
              'keyword',
              'keyword.control',
              'keyword.operator',
              'keyword.declaration',
              'storage.type',
              'storage.modifier',
            ],
            settings: { foreground: '#8b1a1a', fontStyle: 'bold' },
          },
          // Strings — blueprint blue
          {
            scope: [
              'string',
              'string.quoted',
              'string.template',
              'string.interpolated',
            ],
            settings: { foreground: '#2a4a6e' },
          },
          // String punctuation
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#3d6080' },
          },
          // Numbers — warm amber
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#6b4a1a' },
          },
          // Functions — dark olive
          {
            scope: [
              'entity.name.function',
              'meta.function-call',
              'support.function',
            ],
            settings: { foreground: '#3d4a1a', fontStyle: 'bold' },
          },
          // Classes / types
          {
            scope: [
              'entity.name.class',
              'entity.name.type',
              'support.class',
              'support.type',
            ],
            settings: { foreground: '#4a4a2a', fontStyle: 'bold' },
          },
          // Variables / identifiers
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#3a3830' },
          },
          // Constants
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#6b4a1a' },
          },
          // Operators
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#5c5c30' },
          },
          // Parameters
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#3a3830', fontStyle: 'italic' },
          },
          // Decorators / attributes
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#8b1a1a' },
          },
          // Properties
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#2a3d5c' },
          },
          // Punctuation
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#6a6458' },
          },
          // Import / module paths
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#2a4a6e' },
          },
          // YAML keys
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#3d4a1a' },
          },
          // Shell commands / builtins
          {
            scope: [
              'support.function.builtin.shell',
              'keyword.other.shell',
              'entity.name.command.shell',
              'meta.function-call.shell',
            ],
            settings: { foreground: '#8b1a1a', fontStyle: 'bold' },
          },
          // Markdown headings
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#3d4a1a', fontStyle: 'bold' },
          },
        ],
      },

      // ── Dark theme (night map / NOD palette) ───────────────────────────
      dark: {
        name: 'field-manual-dark',
        type: 'dark',
        bg: '#1e2214',
        fg: '#e8e0c8',
        colors: {
          'editor.background':              '#1e2214',
          'editor.foreground':              '#e8e0c8',
          'editor.lineHighlightBackground': '#2a3018',
          'editorLineNumber.foreground':    '#5c5c30',
          'editorLineNumber.activeForeground': '#b5a060',
          'editorCursor.foreground':        '#c04040',
          'editor.selectionBackground':     '#3d4a2244',
        },
        tokenColors: [
          {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#6a6048', fontStyle: 'italic' },
          },
          {
            scope: [
              'keyword', 'keyword.control', 'keyword.operator',
              'keyword.declaration', 'storage.type', 'storage.modifier',
            ],
            settings: { foreground: '#c04040', fontStyle: 'bold' },
          },
          {
            scope: ['string', 'string.quoted', 'string.template', 'string.interpolated'],
            settings: { foreground: '#7090c0' },
          },
          {
            scope: ['punctuation.definition.string'],
            settings: { foreground: '#5a7aaa' },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: { foreground: '#c8963a' },
          },
          {
            scope: ['entity.name.function', 'meta.function-call', 'support.function'],
            settings: { foreground: '#a0b860', fontStyle: 'bold' },
          },
          {
            scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
            settings: { foreground: '#c8b87a', fontStyle: 'bold' },
          },
          {
            scope: ['variable', 'variable.other', 'meta.definition.variable'],
            settings: { foreground: '#d8d0b8' },
          },
          {
            scope: ['constant', 'constant.other'],
            settings: { foreground: '#c8963a' },
          },
          {
            scope: ['keyword.operator', 'punctuation.accessor'],
            settings: { foreground: '#8a9060' },
          },
          {
            scope: ['variable.parameter', 'meta.parameter'],
            settings: { foreground: '#b8b098', fontStyle: 'italic' },
          },
          {
            scope: ['meta.decorator', 'entity.name.tag'],
            settings: { foreground: '#d45555' },
          },
          {
            scope: ['support.type.property-name', 'variable.other.property'],
            settings: { foreground: '#7090c0' },
          },
          {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#8a8070' },
          },
          {
            scope: ['entity.name.module', 'support.module'],
            settings: { foreground: '#7090c0' },
          },
          {
            scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
            settings: { foreground: '#a0b860' },
          },
          {
            scope: [
              'support.function.builtin.shell', 'keyword.other.shell',
              'entity.name.command.shell', 'meta.function-call.shell',
            ],
            settings: { foreground: '#d45555', fontStyle: 'bold' },
          },
          {
            scope: ['markup.heading', 'entity.name.section.markdown'],
            settings: { foreground: '#a0b860', fontStyle: 'bold' },
          },
        ],
      },
    },
  }
}
