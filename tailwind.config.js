/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#003768',
        navyDeep: '#0a243a',
        navyMid: '#0e355d',
        teal: '#3caa9f',
        mist: '#e8f0f3',
        body: '#212529',
        muted: '#666666',
        slate: '#465059',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        btn: '6px',
        card: '12px',
        input: '5px',
      },
      boxShadow: {
        soft: 'rgba(0, 72, 88, 0.1) 5px 3px 40px 0px',
        sm: 'rgba(0, 0, 0, 0.075) 0px 2px 4px 0px',
      },
    },
  },
  plugins: [],
}
