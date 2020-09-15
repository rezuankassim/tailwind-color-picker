/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          'ming': '#355C7D',
        },
        pink: {
          ...colors.pink,
          'contessa': '#C56C86',
          'brink-pink': '#FF7582'
        },
        purple: {
          ...colors.purpler,
          'salt-box': '#725A7A'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
