import { Mission } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import formatUppercaseString from '../lib/formatUppercaseString'

interface MissionListItemProps {
  mission: Mission
}

const MissionListItem = ({ mission }: MissionListItemProps) => (
  <ListItemStyles>
    <h3>{mission.name}</h3>
    <div>{formatUppercaseString(mission.type)}</div>
    <div>{formatUppercaseString(mission.goal_type)}</div>
    <Link href={`/mission/${mission.id}`}>View →</Link>
  </ListItemStyles>
)

export default MissionListItem
