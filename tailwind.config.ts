import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42008C',
        secondary: '#DDFF21',
        background_dark: '#181818',
        background_light: '#F3F3F3',
      },
    },
  },
  plugins: [],
}
export default config
