import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import styled from 'styled-components'
import ALL_BATTLEPASSES_QUERY from '../queries/allBattlePasses'
import { BattlePassOverview } from '../types'
import BattlePassCard from './BattlePassCard'
import SolidBtn from './styles/SolidBtn'

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
      <Link href="/bp/new" passHref>
        <SolidBtn>+ Create new battle pass</SolidBtn>
      </Link>
      <div>
        <BattlePassGridStyles>
          {data.battlePasses.map((bp: BattlePassOverview) => (
            <BattlePassCard key={bp.id} bp={bp} />
          ))}
        </BattlePassGridStyles>
      </div>
    </div>
  )
}

export default BattlePasses
