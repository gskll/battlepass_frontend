import { gql } from '@apollo/client'

const CREATE_MISSION = gql`
  mutation CREATE_MISSION(
    $name: String!
    $bp_id: ID!
    $description: String
    $type: String!
    $goal_type: String!
    $exp_awarded: Int!
  ) {
    createMission(
      data: {
        name: $name
        description: $description
        exp_awarded: $exp_awarded
        type: $type
        goal_type: $goal_type
        battlepass: { connect: { id: $bp_id } }
      }
    ) {
      id
    }
  }
`
export default CREATE_MISSION
