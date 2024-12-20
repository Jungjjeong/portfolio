/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#2A7BF4',
          1: '#2A7BF4',
          2: '#00A7CC',
          3: '#6CC2F2',
          4: '#6CD5EC',
          5: '#C1E3F5',
          6: '#BAECF6',
          7: '#EEF8FD',
        },
        gray: {
          DEFAULT: '#FFFFFF',
          1: '#333333',
          2: '#4F4F4F',
          3: '#828282',
          4: '#BDBDBD',
          5: '#E0E0E0',
          6: '#F2F2F2',
          7: '#050C14',
        },
        black: '#000000',
        dark: {
          DEFAULT: '#17171B',
          1: '#202027',
          2: '#2C2C34',
          3: '#62626C',
        },
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
        sxm: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.452rem',
        extra: '3.732rem',
      },
      gridTemplateColumns: {
        project: 'repeat(auto-fill, minmax(320px, 1fr))',
      },
      keyframes: {
        gradation: {
          '0%': {
            'background-position-x': '100%',
          },
          '50%': {
            'background-position-x': '-100%',
          },
          '100%': {
            'background-position-x': '-100%',
          },
        },
        fadeIn: {
          from: { transform: 'translateY(30px)', opacity: 0 },
          to: { transform: 'translateY(0px)', opacity: 1 },
        },
        opacityIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        scaleUp: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.2)' },
        },
      },
      animation: {
        button: 'gradation 1500ms infinite linear',
        fadeIn: 'fadeIn 800ms ease-in-out forwards',
        opacityIn: 'opacityIn 200ms ease-in-out forwards',
        scaleUp: 'scaleUp 2300ms ease-in-out forwards',
      },
      fontFamily: {
        pen: ['Nanum Pen Script'],
      },
    },
  },
  plugins: [],
};
