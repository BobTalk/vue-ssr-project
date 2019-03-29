let express = require('express')
let app = express();
let path = require("path")
let fs = require('fs')
let VueServerRenderer = require('vue-server-renderer')
let serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf8')
let ssrTemplate = fs.readFileSync('./dist/index.ssr.html', 'utf8')
let render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template: ssrTemplate
})
app.get('/', (req, res) => {
    let context = { url: req.url };
    render.renderToString(context, (err, html) => {
        res.send(html)
    })
})
app.use(express.static(path.resolve(__dirname, 'dist')))
app.get('*', (req, res) => {
    let context = { url: req.url };
    render.renderToString(context, (err, html) => {
        res.send(html)
    })
})
app.listen(3000)