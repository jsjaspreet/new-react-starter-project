import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

import storeType from './types/store'
import mutations from './mutations'

const RootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      store: {
        type: storeType,
        resolve: () => ({})
      }
    })
  }),
  mutation: mutations
})

export default RootSchema
