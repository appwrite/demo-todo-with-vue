module.exports = {
  purge: {
    enable : true,
    content: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
    options : {
      safelist: [/^w-/, /^bg-[a-z]*-500/]
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
