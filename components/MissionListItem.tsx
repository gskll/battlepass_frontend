import { Mission } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import formatUppercaseString from '../lib/formatUppercaseString'
import SolidBtn from './styles/SolidBtn'

interface MissionListItemProps {
  mission: Mission
}

const MissionListItem = ({ mission }: MissionListItemProps) => (
  <ListItemStyles>
    <h3>{mission.name}</h3>
    <div>{formatUppercaseString(mission.type)}</div>
    <div>{formatUppercaseString(mission.goal_type)}</div>
    <Link href={`/mission/${mission.id}`} passHref>
      <SolidBtn>View →</SolidBtn>
    </Link>
  </ListItemStyles>
)

export default MissionListItem
