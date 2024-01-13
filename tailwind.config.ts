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
        mainTitle: ['6.25rem', {fontWeight:"800"}],
        subTitle:['5.938rem',{fontWeight:700}],
        normalTitle:['3rem',{fontWeight:600}],
        sectionTitle:['4rem',{fontWeight:600}]
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
