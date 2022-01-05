import gql from 'graphql-tag'

const LEVEL_OVERVIEW = gql`
  query LEVEL_OVERVIEW($lvl_id: ID!) {
    level(where: { id: $lvl_id }) {
      name
      reward {
        id
        name
        description
        type
        rarity
      }
    }
  }
`

export default LEVEL_OVERVIEW
