const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }/* ,//Para hacer npm run build y generar pagina estatica
  output: 'export', */
}