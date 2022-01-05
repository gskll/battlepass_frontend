import { gql } from '@apollo/client'

const UPDATE_BATTLE_PASS_MUTATION = gql`
  mutation UPDATE_BATTLE_PASS_MUTATION(
    $bp_id: ID!
    $name: String!
    $description: String
    $status: String!
    $start_date: DateTime!
    $end_date: DateTime!
    $experience: Int!
  ) {
    updateBattlePass(
      where: { id: $bp_id }
      data: {
        name: $name
        description: $description
        status: $status
        start_date: $start_date
        end_date: $end_date
        experience: $experience
      }
    ) {
      id
    }
  }
`

export default UPDATE_BATTLE_PASS_MUTATION
