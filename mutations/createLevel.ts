import { gql } from '@apollo/client'

const CREATE_LEVEL = gql`
  mutation CREATE_LEVEL($lvl_name: String!, $tier_id: ID!) {
    createLevel(
      data: { name: $lvl_name, tier: { connect: { id: $tier_id } } }
    ) {
      id
    }
  }
`
export default CREATE_LEVEL
