import gql from 'graphql-tag'

const SINGLE_MISSION = gql`
  query SINGLE_MISSION($id: ID!) {
    mission(where: { id: $id }) {
      name
      description
      type
      goal_type
      exp_awarded
      battlepass {
        id
        name
      }
    }
  }
`

export default SINGLE_MISSION
