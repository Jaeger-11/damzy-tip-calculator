/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        strongcyan: 'hsl(172, 67%, 45%)',
        darkgrayishcyan: 'hsl(186, 14%, 43%)',
        verydarkcyan: 'hsl(183, 100%, 15%)',
        grayishcyan: 'hsl(184, 14%, 56%)',
        lightgrayishcyan: 'hsl(185, 41%, 84%)',
        verylightgrayishcyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      }
    },
    fontFamily: {
      'sanserif': ['Space Mono', 'monospace']
    },
  },
  plugins: [],
}
