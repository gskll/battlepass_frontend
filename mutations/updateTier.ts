import { gql } from '@apollo/client'

const UPDATE_TIER_MUTATION = gql`
  mutation UPDATE_TIER_MUTATION($tier_id: ID!, $name: String!, $price: Int!) {
    updateTier(where: { id: $tier_id }, data: { name: $name, price: $price }) {
      id
    }
  }
`

export default UPDATE_TIER_MUTATION
