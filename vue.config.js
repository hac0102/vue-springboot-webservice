const path = require('path')

module.exports = {
    outputDir: path.resolve(__dirname, "../" + "main/resources/static"),
    devServer: {
        proxy: {
            '/api': {
                target: 'htpp://localhost:9000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}