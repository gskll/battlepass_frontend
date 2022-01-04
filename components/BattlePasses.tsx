import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import BattlePassCard from './BattlePassCard'
import Button from './styles/Button'

export const ALL_BATTLEPASSES_QUERY = gql`
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

const BattlePassGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 10rem;
`

const BattlePasses = () => {
  const { data, error, loading } = useQuery(ALL_BATTLEPASSES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>All Battle Passes</h1>
      <Button>+ Create new battle pass</Button>
      <div>
        <BattlePassGridStyles>
          {data.battlePasses.map((bp) => (
            <BattlePassCard key={bp.id} bp={bp} />
          ))}
        </BattlePassGridStyles>
      </div>
    </div>
  )
}

export default BattlePasses
