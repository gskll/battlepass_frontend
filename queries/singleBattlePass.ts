import gql from 'graphql-tag'

const SINGLE_BATTLE_PASS = gql`
  query SINGLE_BATTLE_PASS($bp_id: ID!) {
    battlePass(where: { id: $bp_id }) {
      name
      description
      status
      start_date
      end_date
      experience
      tiers {
        id
        name
        price
        levels {
          id
          name
          reward {
            id
            name
            description
            type
            rarity
          }
        }
      }
      missions {
        id
        name
        description
        type
        goal_type
      }
      rewards {
        id
        name
        description
        type
        rarity
        level {
          id
        }
      }
    }
  }
`

export default SINGLE_BATTLE_PASS
