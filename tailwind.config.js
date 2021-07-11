module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      link: '#0054B7',
      green: {
        DEFAULT: '#6A974F',
      },
      red: {
        DEFAULT: '#DD0000',
        light: '#FFE6EC',
      },
      blue: {
        DEFAULT: '#06B7DB',
        light: '#E8FBFF',
      },
      grey: {
        DEFAULT: '#888888',
        light: '#EDEDED',
        lighter: '#f8f8f8',
      },
      orange: {
        DEFAULT: '#FBBD00',
      },
      layout: '#E5E5E5',
      muted: '#BABABA',

      // blue
      primary: '#06B7DB',
      'primary-darker': '	#0593af',

      // blue-light
      'primary-light': '#E8FBFF',
      'primary-light-darker': '#06B7DB',

      // orange
      'warning-light': '#fef5e6',
      warning: '#F7A01D',
      'warning-darker': '#c68017',

      // red
      danger: '#CF2D48',
      'danger-darker': '#a6243a',

      // green
      success: '#9CBC1A',
      'success-darker': '#7d9615',

      // light-grey
      muted: '#BABABA',
      'muted-darker': '#959595',
      white: '#FFFFFF',
      'white-darker': '#EEEEEE',
      dark: '#232323',
    },

    extend: {
      margin: {
        default: '12.5px',
      },
      padding: {
        default: '12.5px',
      },
      width: {
        112: '28rem',
      },
      height: {
        'min-content': 'min-content',
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
