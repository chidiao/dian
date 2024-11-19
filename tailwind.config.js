const defaultTheme = require('tailwindcss/defaultTheme')
const { addIconSelectors } = require('@iconify/tailwind')

module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans]
      }
    }
  }
  // plugins: [addIconSelectors(['feather', 'heroicons'])]
}
