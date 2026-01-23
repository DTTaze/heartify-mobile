/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        light: ['Quicksand-Light'],
        sans: ['Quicksand-Regular'],
        medium: ['Quicksand-Medium'],
        semibold: ['Quicksand-SemiBold'],
        bold: ['Quicksand-Bold'],
      },
      colors: {
        primary: {
          50: '#EDF4FB',
          100: '#DAE9F6',
          200: '#B6D3ED',
          300: '#91BEE5',
          400: '#6DA8DC',
          500: '#4892D3',
          600: '#63A2D9',
          700: '#2B587F',
          800: '#1D3A54',
          900: '#0E1D2A',
          950: '#070F15',
        },
        secondary: {
          100: '#E8F4F2',
          200: '#D2E9E4',
          300: '#B8DED7',
          400: '#A5D3C9',
          500: '#8EC8BC',
          600: '#75A69C',
          700: '#5B847C',
          800: '#42635C',
          900: '#28413C',
          950: '#1C302C',
          1000: '#0F1F1C',
        },
        'neutral-black': {
          500: '#1E293B',
          400: '#3A465A',
          300: '#576379',
          200: '#738197',
          150: '#818FA7',
          100: '#909EB6',
          50: '#ACBBD5',
        },
        'neutral-white': {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FDFDFD',
          300: '#F9F9F9',
          400: '#F2F2F2',
          500: '#EFEFEF',
          600: '#D1D1D1',
          700: '#B4B4B4',
          800: '#969696',
          900: '#797979',
          1000: '#5B5B5B',
        },
        error: {
          100: '#FBDDDD',
          200: '#F7BCBC',
          300: '#F39A9A',
          400: '#EF7979',
          500: '#EB5757',
        },
        warning: {
          100: '#FCEBDB',
          200: '#FAD6B7',
          300: '#F7C292',
          400: '#F5AD6E',
          500: '#F2994A',
        },
        success: {
          100: '#D3EADD',
          200: '#A6D5BA',
          300: '#7AC098',
          400: '#4DAB75',
          500: '#219653',
        },
      },
      fontSize: {
        h1: [
          '28px',
          {
            lineHeight: '35px',
            fontWeight: '700',
          },
        ],
        h2: [
          '24px',
          {
            lineHeight: '30px',
            fontWeight: '600',
          },
        ],
        h3: [
          '20px',
          {
            lineHeight: '25px',
            fontWeight: '700',
          },
        ],
        1: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '600',
          },
        ],
        2: [
          '14px',
          {
            lineHeight: '18px',
            fontWeight: '600',
          },
        ],
        3: [
          '12px',
          {
            lineHeight: '15px',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-bold': {
          fontFamily: 'Quicksand-Bold',
          fontWeight: '600',
        },
      });
    }),
  ],
};
