const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        body: {
          'background-image':
            'repeating-linear-gradient(white, white calc(1.5rem - 1px), steelblue 1.5rem)',
          'font-family': 'Journal',
          'min-height': '100vh',
        },
      });
    }),
  ],
};
