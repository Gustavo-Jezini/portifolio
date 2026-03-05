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
        primary: '#E1D4C2',
        muted: '#BEB5A9',
        secondary: '#A78D78',
        accent: '#6E473B',
        background: '#291C0E',
      },
    },
  },
  plugins: [],
}
export default config
