import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize:{
        mainTitle: ['4.8rem', {fontWeight:"800"}],
        subTitle:['4.5rem',{fontWeight:700}],
        normalTitle:['2.5rem',{fontWeight:600}],
        sectionTitle:['3rem',{fontWeight:500}]
      },
      fontFamily:{
        sans: ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset"],
  },
}
export default config
