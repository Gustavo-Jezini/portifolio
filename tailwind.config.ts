import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        // Opção 1.
        // primary: '#E1D4C2',
        // muted: '#BEB5A9',
        // secondary: '#A78D78',
        // accent: '#6E473B',
        // background: '#291C0E',
        // Opção 2.
        primary: '#b7ae8f',
        muted: '#d9d9db',
        secondary: '#978f84',
        accent: '#4a362f',
        background: '#121210',
        // Opção 3.
        // primary: '#f7dece',
        // muted: '#eed7c5',
        // secondary: '#ccccbb',
        // accent: '#9ec4bb',
        // background: '#2d2e2c',
        // Opção 4.
        // primary: '#daded8',
        // muted: '#959581',
        // secondary: '#768064',
        // accent: '#4c583e',
        // background: '#2c3424',
        // Opção 5.
        // primary: '#cf9d7b',
        // muted: '#784239',
        // secondary: '#3a3534',
        // accent: '#162127',
        // background: '#0c1519',
      },
    },
  },
  plugins: [],
}
export default config
