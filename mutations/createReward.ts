import { gql } from '@apollo/client'

const CREATE_REWARD = gql`
  mutation CREATE_REWARD(
    $reward_name: String!
    $description: String
    $reward_type: String!
    $rarity: String!
    $bp_id: ID!
    $tier_id: ID!
    $lvl_id: ID!
  ) {
    createReward(
      data: {
        name: $reward_name
        description: $description
        type: $reward_type
        rarity: $rarity
        tier: { connect: { id: $tier_id } }
        battlepass: { connect: { id: $bp_id } }
        level: { connect: { id: $lvl_id } }
      }
    ) {
      id
    }
  }
`
export default CREATE_REWARD
