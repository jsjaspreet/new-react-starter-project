import express from 'express'
import graphqlHTTP from 'express-graphql'

const router = express.Router()

router.get('/api/status', (req, res) => res.send({"hello": "world"}))

export default router
