import gql from 'graphql-tag'

const SINGLE_LEVEL = gql`
  query SINGLE_LEVEL($id: ID!) {
    level(where: { id: $id }) {
      id
      name
      tier {
        id
        name
      }
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

export default SINGLE_LEVEL
