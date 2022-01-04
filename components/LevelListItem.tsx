import { Level } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'

interface LevelListItemProps {
  level: Level
}

const LevelListItem = ({ level }: LevelListItemProps) => (
  <ListItemStyles>
    <h3>Level {level.name}</h3>
    <div>Reward: {level.reward.name}</div>
    <Link href={`/level/${level.id}`}>View →</Link>
  </ListItemStyles>
)

export default LevelListItem
