module.exports = (ctx) => ({
  // map: ctx.env === 'development' ? { inline: true } : false,
  plugins: {
    'css-declaration-sorter': { 'order': 'smacss' },
    'postcss-media-minmax': {},
    'autoprefixer': {},
    'cssnano': ctx.env === 'production' ? { preset: 'default' } : false,
  },
})