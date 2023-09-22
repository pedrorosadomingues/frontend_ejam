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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: 'Manrope'
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primaryBlue: '#252F3D',
        secondaryBlue: '#2C7EF8',
        thirdBlue: '#EDF3FD',
        primaryGray: '#4D5254',
        secondaryGray: '#CFCFCF',
        thirdGray: '#5BB59A',
        primaryGreen: '#85BF55',
        secondaryGreen: '#59AE43',
        thirdGreen: '#5BB59A',
        primaryRed: '#F82C2C',
      },
    },
  },
  plugins: [],
}
export default config
