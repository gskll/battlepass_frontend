import gql from 'graphql-tag'

const SINGLE_TIER = gql`
  query SINGLE_TIER($tier_id: ID!) {
    tier(where: { id: $tier_id }) {
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
        level {
          id
        }
      }
    }
  }
`

export default SINGLE_TIER
