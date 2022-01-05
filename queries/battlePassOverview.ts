import gql from 'graphql-tag'

const BATTLE_PASS_OVERVIEW_QUERY = gql`
  query BATTLE_PASS_OVERVIEW_QUERY($bp_id: ID!) {
    battlePass(where: { id: $bp_id }) {
      id
      name
      description
      status
      start_date
      end_date
      experience
    }
  }
`

export default BATTLE_PASS_OVERVIEW_QUERY
