const Koa = require('koa')
const app = new Koa()
const router = require('koa-better-router')().loadMethods()
const logger = require('koa-logger')

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

router.get('/', ({ response }) => {
    console.log('Route hi')
    response.body = 'Hello world!'
    response.status = 200
})

router.get('/new', async ({ response }) => {
    await wait(1000)
    response.body = 'Route test'
    response.status = 200
})

router.get('/slow/:count', async ({ response, params }) => {
    const { count } = params

    await wait(count || 500)

    response.status = 200
})

app.use(router.middleware())
app.use(logger())

app.listen(3000, () => {
    console.log('Listening on port 3000')
})