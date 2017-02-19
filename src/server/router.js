import express from 'express'
import graphqlHTTP from 'express-graphql'
import pgPool from './pgPool'
import schema from '../../schema'

/* START code for writing out graphql schema for babel relay plugin */

// import { resolve } from 'path'
// import { graphql } from 'graphql'
// import { introspectionQuery } from 'graphql/utilities'

// graphql(schema, introspectionQuery).then((data) => {
//   console.log('writing data')
//   fs.writeFile('/home/jsjaspreet/dev/projects/rgr-links/linksSchema.json', JSON.stringify(data, null, 2), err => {
//     if (err) throw err
//     console.log("Wrote json schema")
//   })
// })

/* END */

const router = express.Router()

router.get('/api/status', (req, res) => res.send({"hello": "world"}))
router.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      pgPool
    }
  })
)
export default router
