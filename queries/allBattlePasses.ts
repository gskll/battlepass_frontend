import { gql } from '@apollo/client'

const ALL_BATTLEPASSES_QUERY = gql`
  query ALL_BATTLEPASSES_QUERY {
    battlePasses {
      id
      name
      status
      start_date
      end_date
    }
  }
`
export default ALL_BATTLEPASSES_QUERY
