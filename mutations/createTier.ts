import { gql } from '@apollo/client'

const CREATE_TIER = gql`
  mutation CREATE_TIER($name: String!, $price: Int!, $bp_id: ID!) {
    createTier(
      data: {
        name: $name
        price: $price
        battlepass: { connect: { id: $bp_id } }
      }
    ) {
      id
    }
  }
`
export default CREATE_TIER
