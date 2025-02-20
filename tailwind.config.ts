import FONT_SIZES from './src/ui/styles/font-sizes';
import BREAK_POINTS from './src/ui/styles/breakpoints';
import COLORS from './src/ui/styles/colors';
import SIZES from './src/ui/styles/sizes';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/boot/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: BREAK_POINTS,
    colors: COLORS,
    fontSize: FONT_SIZES,

    fontWeight: {
      regular: '450',
      // ...defaultTheme.fontWeight,
    },
    extend: {
      // lineHeight: FONT_SIZES,
      // fontFamily: {
      // circular: ['"Circular Std"', ...defaultTheme.fontFamily.sans],
      //   'ibm-plex': [
      //     '"IBM Plex Serif"',
      //     '"Circular Std"',
      //     ...defaultTheme.fontFamily.sans,
      //   ],
      // },
      minWidth: { ...BREAK_POINTS, ...SIZES },
      maxWidth: { ...BREAK_POINTS, ...SIZES },
      minHeight: { ...BREAK_POINTS, ...SIZES },
      maxHeight: { sidebar: 'calc(100vh - 5rem)' },
      boxShadow: {
        'bottom-bar':
          '0px 0px 5px rgba(0,0,0,0.02), 0px 0px 5px 5px rgba(0,0,0,0.05)',
        mobile:
          '0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03)',
        desktop:
          '0px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px 0px 35px 5px rgba(0, 0, 0, 0.08)',
        'view-meals':
          '0px 0px 5px rgba(0, 0, 0, 0.05), 0px 0px 35px 5px rgba(0, 0, 0, 0.08)',
      },
      dropShadow: {
        mobile: [
          '0px 0px 5px rgba(0, 0, 0, 0.05)',
          '0px 25px 35px rgba(0, 0, 0, 0.03)',
        ],
        desktop: [
          '0px 0px 5px 0px rgba(0, 0, 0, 0.05)',
          '0px 0px 35px 5px rgba(0, 0, 0, 0.08)',
        ],
        soft: [
          '0px 21.465px 30.051px rgba(0, 0, 0, 0.03)',
          '0px 0px 4.293px rgba(0, 0, 0, 0.05)',
        ],
      },
      borderRadius: {
        s: '16px',
        xs: '24px',
        l: '45px',
        '4xl': '100px',
      },
      padding: {
        ...SIZES,
      },
      margin: {
        ...SIZES,
      },
      flex: {
        2: '2 1 0%',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
