import { useQuery } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
import { Mission } from '../types'
import SINGLE_MISSION from '../queries/singleMission'
import SinglePageStyles from './styles/SinglePageStyles'
import formatUppercaseString from '../lib/formatUppercaseString'
import Link from 'next/link'
import OutlineBtn from './styles/OutlineBtn'

interface MissionProps {
  id: string
}

const Mission = ({ id }: MissionProps) => {
  const { data, loading, error } = useQuery(SINGLE_MISSION, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { mission } = data

  return (
    <SinglePageStyles>
      <div className="overview">
        <h1 className="title">{mission.name}</h1>
        <div className="sub-head">
          <p>Type: {formatUppercaseString(mission.type)}</p>
          <p>Goal: {formatUppercaseString(mission.goal_type)}</p>
        </div>
        <div className="description">
          <p>Description: {mission.description}</p>
        </div>
        <div className="accent">
          <p>Experience awarded on completion: {mission.exp_awarded}</p>
          <p>Mission belongs to {mission.battlepass?.name} battle pass</p>
          <Link href={`/bp/${mission.battlepass?.id}`} passHref>
            <OutlineBtn>View battle pass</OutlineBtn>
          </Link>
        </div>
      </div>
    </SinglePageStyles>
  )
}
export default Mission
