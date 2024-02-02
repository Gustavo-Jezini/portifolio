import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-stars': "url('/src/assets/cover-image-portifolio.jpg')",
      },
      colors: {
        'dark-blue-800': '#00272d',
        'dark-blue-700': '#134647',
        'dark-blue-600': '#0c7e7e',
        'white-100': '#f8f9f6',
        'white-200': '#f2f3ec',
        'white-300': '#ebeee3',
        'white-400': '#e5e8da',
        white: '#ffffff',
        black: '#000706',
        beje: '#bfac8b',
      },
    },
  },
  plugins: [],
}
export default config
