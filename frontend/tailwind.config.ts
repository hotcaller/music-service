import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|divider|skeleton|ripple|spinner|modal|switch).js',
  ],
  theme: {
    colors: {
      'primary-green': {
        DEFAULT: '#27AE60',
        100: '#9bd8b5',
      },
      dark: '#333',
      'gray-100': '#828282',
      'gray-200': '#4f4f4f',
      'gray-for-text-bold': '#333',
      'gray-light': '#fafafa',
      white: '#fff',
      'theme-dark': {
        '--bg-color': '#222',
        '--bg-contrast-color': '#444',
        '--color-theme': '#000',
        '--text-color': '#ddd',
        '--link-color': '#fff',
        '--link-hover-color': '#fff',
      },
      'theme-light': {
        '--bg-color': '#fff',
        '--bg-contrast-color': '#fafafa',
        '--color-theme': '#fff',
        '--text-color': '#333',
        '--link-color': '#333',
        '--link-hover-color': '#333',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['SF Pro Display', 'serif'],
    },
    extend: {
      lineHeight: {
        default: '111%',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        xl: '1.2rem',
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '0 4px 8px 1px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [nextui(), addDynamicIconSelectors()],
};
export default config;
