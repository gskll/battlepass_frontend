import { gql } from '@apollo/client'

const CREATE_BATTLE_PASS_MUTATION = gql`
  mutation CREATE_BATTLE_PASS_MUTATION(
    $name: String!
    $description: String
    $status: String!
    $start_date: DateTime!
    $end_date: DateTime!
    $experience: Int!
  ) {
    createBattlePass(
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
export default CREATE_BATTLE_PASS_MUTATION
