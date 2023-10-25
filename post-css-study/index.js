import postcss from 'postcss'
import fs from 'fs'
import { cssDeclarationSorter } from 'css-declaration-sorter';

fs.readFile('css_src/**/*.css', (err, css) => {
  postcss([cssDeclarationSorter({ order: 'smacss' })])
    .process(css, { from: 'css_src/**/*.css', to: 'css/**/*.css' })
    .then(result => {
      fs.writeFile('css/**/*.css', result.css, () => true)
    })
})