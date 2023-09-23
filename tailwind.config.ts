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
        primary: 'Manrope, sans-serif'
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
        fourthGray: '#FAFAFA',
        fifthGray: '#333333',
        sixthGray: '#969696',
        seventhGray: '#37465A',
        primaryGreen: '#85BF55',
        secondaryGreen: '#59AE43',
        thirdGreen: '#5BB59A',
        primaryRed: '#F82C2C', 
      },
      fontWeight: {
        lite: '300',
        light: '400',
        normal: '500',
        medium: '600',
        hard: '700',
      },
    },
  },
  plugins: [],
}
export default config
