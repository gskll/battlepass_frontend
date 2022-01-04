import { Level } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import SolidBtn from './styles/SolidBtn'

interface LevelListItemProps {
  level: Level
}

const LevelListItem = ({ level }: LevelListItemProps) => (
  <ListItemStyles>
    <h3>Level {level.name}</h3>
    <div>Reward: {level.reward.name}</div>
    <Link href={`/level/${level.id}`} passHref>
      <SolidBtn>View →</SolidBtn>
    </Link>
  </ListItemStyles>
)

export default LevelListItem
