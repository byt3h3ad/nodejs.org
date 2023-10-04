import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{tsx,mdx}',
    './components/**/*.tsx',
    './layouts/**/*.tsx',
    './.storybook/preview.tsx',
    './.storybook/preview-body.html',
  ],
  theme: {
    colors: {
      green: {
        100: '#EDF2EB',
        200: '#C5E5B4',
        300: '#C5E5B4',
        400: '#84BA64',
        500: '#5FA04E',
        600: '#417E38',
        700: '#2C682C',
        800: '#2C682C',
        900: '#1A3F1D',
      },
      neutral: {
        100: '#F6F7F9',
        200: '#E9EDF0',
        300: '#D9E1E4',
        400: '#CBD4D9',
        500: '#B1BCC2',
        600: '#929FA5',
        700: '#6E7B83',
        800: '#556066',
        900: '#2C3437',
        950: '#0D121C',
      },
      danger: {
        100: '#FBF1F0',
        200: '#FAD3D4',
        300: '#FAB6B7',
        400: '#FA8E8E',
        500: '#F65354',
        600: '#DE1A1B',
        700: '#B80C0C',
        800: '#900E0E',
        900: '#661514',
      },
      warning: {
        100: '#FDF3E7',
        200: '#FAD9B0',
        300: '#F5BC75',
        400: '#E99C40',
        500: '#D07912',
        600: '#AE5F00',
        700: '#8B4D04',
        800: '#683D08',
        900: '#4D2F0B',
      },
      info: {
        100: '#E9F4FA',
        200: '#BCE6FC',
        300: '#8ED4F8',
        400: '#52BAED',
        500: '#229AD6',
        600: '#0C7BB3',
        700: '#066291',
        800: '#074D71',
        900: '#0A3953',
      },
      accent1: {
        100: '#F7F1FB',
        200: '#EAD9FB',
        300: '#DBBDF9',
        400: '#C79BF2',
        500: '#AF74E8',
        600: '#9756D6',
        700: '#7D3CBE',
        800: '#642B9E',
        900: '#361B52',
      },
      accent2: {
        100: '#FBF0F4',
        200: '#FBD4E6',
        300: '#FBB4D2',
        400: '#F68BB7',
        500: '#ED5393',
        600: '#D6246E',
        700: '#B01356',
        800: '#8B1245',
        900: '#411526',
      },
      white: '#FFFFFF',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.875rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '3rem'],
      '6xl': ['3.75rem', '3.75rem'],
      '7xl': ['4.5rem', '4.5rem'],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    fontFamily: {
      'open-sans': ['var(--font-open-sans)'],
      'ibm-plex-mono': ['var(--font-ibm-plex-mono)'],
    },
    extend: {
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      },
      spacing: {
        '4.5': '1.125rem',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
} satisfies Config;
