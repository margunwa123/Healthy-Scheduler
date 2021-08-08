module.exports = {
  purge: {
    content: ['./src/**/*.jsx', './src/**/*.tsx'],
    safelist: [
      /^bg-/,
      /^text-/,
      /^btn-/,
      /^border-/,
      /^space-x-/,
      /^space-y-/,
      'hidden',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      link: '#0054B7',
      green: {
        DEFAULT: '#6A974F',
      },
      red: {
        DEFAULT: '#EE5555',
        light: '#FFE6E6',
      },
      blue: {
        DEFAULT: '#06B7DB',
        light: '#E8FBFF',
      },
      grey: {
        DEFAULT: '#888888',
        light: '#CCCCCC',
        lighter: '#f8f8f8',
      },
      orange: {
        DEFAULT: '#FBBD00',
      },
      layout: '#E5E5E5',
      muted: '#BABABA',

      // blue
      // primaryt
      'primary-light': '#E8FBFF',
      primary: '#06B7DB',
      'primary-darker': '	#0593af',

      // warning
      'warning-light': '#fef5e6',
      warning: '#F7A01D',
      'warning-darker': '#c68017',

      // danger
      'danger-light': '#f5d5da',
      danger: '#CF2D48',
      'danger-darker': '#a6243a',

      // green
      'success-light': '#ebf2d1',
      success: '#9CBC1A',
      'success-darker': '#7d9615',

      // light-grey
      'muted-light': '#f1f1f1',
      muted: '#BABABA',
      'muted-darker': '#959595',

      'white-light': '#FFFFFF',
      white: '#FFFFFF',
      'white-darker': '#EEEEEE',

      'dark-light': '#d3d3d3',
      dark: '#232323',
      'dark-darker': '#000000',

      link: '#0047D1',
    },

    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px',
    },

    extend: {
      margin: {
        default: '4rem',
      },
      padding: {
        default: '4rem',
      },
      width: {
        112: '28rem',
      },
      height: {
        'min-content': 'min-content',
      },
      boxShadow: {
        panel: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        inset: '0px 0px 0px 2px white inset',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
        '-40': '-40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
