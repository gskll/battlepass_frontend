import gql from 'graphql-tag'

const SINGLE_TIER = gql`
  query SINGLE_TIER($id: ID!) {
    tier(where: { id: $id }) {
      name
      price
      battlepass {
        id
        name
      }
      levels {
        id
        name
        reward {
          id
          name
          type
          rarity
        }
      }
      rewards {
        id
        name
        type
        rarity
      }
    }
  }
`

export default SINGLE_TIER
