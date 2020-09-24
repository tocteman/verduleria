module.exports = {
  important: true,
  corePlugins: {
    textOpacity: false
  },
  theme: {
    fontFamily: {
      'sans': ['ff-tisa-sans-web-pro', 'sans-serif'],
      'display': ['moret', 'sans-serif'],
      'body': ['ff-tisa-sans-web-pro', 'sans-serif'],
    },
    extend: {
      colors: {
        olive: {
          '100': '#dff7d7',
          '200': '#bcf5a9',
          '300': '#84ed61',
          '400': '#43d911',
          '500': '#369c10',
          '600': '#2c820c',
          '700': '#226609',
          '800': '#195703',
          '900': '#061401',
        },

      },
      width: {
        '80': '20rem',
        '95': '95vw',
        '97': '97vw'
      },
      height: {
        '95': '95vh',
        '92': '92.5vh'
      }
    }
  },
  variants: {},
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.html'],
  // },
};
