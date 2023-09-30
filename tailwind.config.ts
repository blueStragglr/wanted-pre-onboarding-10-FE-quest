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
      TText : {
        DEFAULT: '#0A0311',
        light: '#cecdcf',
      },
      TBackground: '#F6F6F6',
      TPrimary: {
        DEFAULT: '#FF7624',
        50: '#FFE9DC',
        100: '#FFDCC7',
        200: '#FFC39E',
        300: '#FFA976',
        400: '#FF904D',
        500: '#FF7624',
        600: '#EB5800',
        700: '#B34300',
        800: '#7B2E00',
        900: '#431900',
        950: '#270E00'
      }, 
      TSecondary: {
        DEFAULT: '#F6F6F6',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FFFFFF',
        500: '#F6F6F6',
        600: '#DADADA',
        700: '#BEBEBE',
        800: '#A2A2A2',
        900: '#868686',
        950: '#787878'
      },
      TBlue : {
        DEFAULT: '#0048FF',
        50: '#B8CCFF',
        100: '#A3BDFF',
        200: '#7AA0FF',
        300: '#5283FF',
        400: '#2965FF',
        500: '#0048FF',
        600: '#0038C7',
        700: '#00288F',
        800: '#001857',
        900: '#00091F',
        950: '#000103'
      },
  }

    }
  },
  plugins: [],
}

// colors: {
  // --text: #0a0311;
  // --background: #ffffff;
  // --primary: #ff7624;
  // --secondary: #f6f6f6;
  // --accent: #0048ff;
//  },

export default config
