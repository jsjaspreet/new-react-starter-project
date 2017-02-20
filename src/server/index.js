import express from 'express'
import compression from 'compression'
import { resolve } from 'path'
import router from './router'

const nodeEnv = process.env.NODE_ENV || "development"
const port = process.env.PORT || "9090"

console.log(`Running in ${nodeEnv}`)

const app = express()
app.use(compression())

app.use(router)

// static
const maxAge = nodeEnv === "production" ? 1000 * 60 * 60 * 24 * 30 : 0
app.use("/build", express.static(resolve('./build'), { maxAge }))

app.all('*', (req, res) => {
  res.sendFile(resolve('./build/index.html'))
})

app.listen(port, console.log(`Running app at ${port}`))
