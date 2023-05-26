/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      'bright-orange': 'hsl(31, 77%, 52%)',
      'cyan-1': 'hsl(184, 100%, 22%)',
      'cyan-2': 'hsl(179, 100%, 13%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        'big-shoulders-display'  : ['Big Shoulders Display', 'cursive'],
        'lexend-deca'  : ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

