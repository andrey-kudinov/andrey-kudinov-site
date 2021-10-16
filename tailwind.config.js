module.exports = {
  purge: ['./src/**/*.[j|t]s[x]'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-md': {'max': '767px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
