/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './*.html',
    './src/**/*.vue',
    './src/**/*.js',
    './src/*.vue',
    './src/*.js',
  ],
  content: [],
  theme: {
    //   screens: {
    //     sm: '480px',
    //     md: '768px',
    //     lg: '976px',
    //     xl: '1440px',
    //   },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    //   fontFamily: {
    //     sans: ['Graphik', 'sans-serif'],
    //     serif: ['Merriweather', 'serif'],
    //   },
    //   extend: {
    //     spacing: {
    //       '128': '32rem',
    //       '144': '36rem',
    //     },
    //     borderRadius: {
    //       '4xl': '2rem',
    //     }
    //   },
  },
  plugins: [],
}

