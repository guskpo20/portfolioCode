const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }/* ,//Para hacer npm run build y generar pagina estatica
  output: 'export', */
  ,async headers() {
    return [
      {
        source: "/(favicon.ico|favicon-16x16.png|favicon-32x32.png|android-chrome-192x192|android-chrome-512x512|apple-touch-icon|mstile-150x150...)", // Añade otros tamaños si es necesario
        headers: [
          {
            key: "Link",
            value: "/public/favicon.ico",
          },
        ],
      },
    ];
  },
}