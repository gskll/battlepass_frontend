import gql from 'graphql-tag'

const MISSION_OVERVIEW = gql`
  query MISSION_OVERVIEW($id: ID!) {
    mission(where: { id: $id }) {
      name
      description
      type
      goal_type
      exp_awarded
    }
  }
`

export default MISSION_OVERVIEW
