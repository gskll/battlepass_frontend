import { gql } from '@apollo/client'

const UPDATE_LEVEL_REWARD = gql`
  mutation UPDATE_LEVEL_REWARD(
    $lvl_id: ID!
    $lvl_name: String!
    $reward_id: ID!
    $reward_name: String!
    $description: String
    $type: String!
    $rarity: String!
  ) {
    updateLevel(where: { id: $lvl_id }, data: { name: $lvl_name }) {
      id
    }
    updateReward(
      where: { id: $reward_id }
      data: {
        name: $reward_name
        description: $description
        type: $type
        rarity: $rarity
      }
    ) {
      id
    }
  }
`
export default UPDATE_LEVEL_REWARD
