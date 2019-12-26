import express from 'express'
import bodyParser from 'body-parser'
import * as api from './index'
import cors from 'cors'
import path from 'path'
import yaml from 'yamljs'
import http from 'http'
import compression from 'compression'


const app = express()
const port = 9802
// const multer = require('multer')
const { connector, summarise } = require('swagger-routes-express')



// swagger static
app.use('/static', express.static("swagger-ui"))

// 压缩请求
app.use(compression())

app.use(cors())

// post put delete body parser
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: false
}))

// no cache
app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
    res.header('Pragma', 'no-cache')
    res.header('Expires', '-1')
    next()
})

const apiDefinition = yaml.load(path.resolve(__dirname, 'swagger-ui/swagger.yml'))
const connectSwagger = connector(api, apiDefinition)
connectSwagger(app)


const apiSummary = summarise(apiDefinition)
console.log("apiSummary", apiSummary)

// Catch 404 error
app.use((req, res, next) => {
    const err = new Error('Not Found')
    res.status(404).json({
        message: err.message,
        error: err
    })
})



const serve = http.createServer(app)

serve.listen(port)
serve.on("error", onError)


console.log("mock serve is starting on prot " + port + '!!!')

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error('Express ERROR (app) : %s requires elevated privileges', bind)
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error('Express ERROR (app) : %s is already in use', bind)
            process.exit(1)
            break
        default:
            throw error
            break
    }

}
