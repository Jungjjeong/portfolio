/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#0080C8',
          1: '#0080C8',
          2: '#00A7CC',
          3: '#6CC2F2',
          4: '#6CD5EC',
          5: '#C1E3F5',
          6: '#BAECF6',
        },
        gray: {
          DEFAULT: '#FFFFFF',
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          6: '#F2F2F2',
        },
        black: '#000000',
        text: {
          DEFAULT: '#353C49',
          1: '#707885',
          2: '#AEB0B4',
          3: '#7F43F5',
          4: '#5B75EC',
          5: '#EC6A65',
          6: '#399B54',
        },
      },
      fontSize: {
        t: {
          DEFAULT: '6.5rem',
          1: '6.5rem',
        },
        h: {
          DEFAULT: '2.4rem',
          1: '2.4rem',
          2: '2.1rem',
          3: '1.9rem',
        },
        b: {
          DEFAULT: '1.8rem',
          1: '1.8rem',
          2: '1.4rem',
          3: '1.3rem',
        },
        c: {
          DEFAULT: '1.1rem',
          1: '1.1rem',
          2: '1.2rem',
        },
        n: {
          DEFAULT: '0.9rem',
          1: '0.9rem',
          2: '0.8rem',
        },
      },
    },
  },
  plugins: [],
};
