import gql from 'graphql-tag'

const TIER_OVERVIEW = gql`
  query TIER_OVERVIEW($tier_id: ID!) {
    tier(where: { id: $tier_id }) {
      name
      price
    }
  }
`

export default TIER_OVERVIEW
