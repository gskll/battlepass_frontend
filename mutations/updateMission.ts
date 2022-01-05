import { gql } from '@apollo/client'

const UPDATE_MISSION_MUTATION = gql`
  mutation UPDATE_MISSION_MUTATION(
    $id: ID!
    $name: String!
    $description: String
    $type: String!
    $goal_type: String!
    $exp_awarded: Int!
  ) {
    updateMission(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        type: $type
        goal_type: $goal_type
        exp_awarded: $exp_awarded
      }
    ) {
      id
    }
  }
`

export default UPDATE_MISSION_MUTATION
