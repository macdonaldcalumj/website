const plugin = require('tailwindcss/plugin');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
