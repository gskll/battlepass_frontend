import { Reward } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import formatUppercaseString from '../lib/formatUppercaseString'

interface RewardListItemProps {
  reward: Reward
}

const RewardListItem = ({ reward }: RewardListItemProps) => (
  <ListItemStyles>
    <h3>{reward.name}</h3>
    <div>{formatUppercaseString(reward.rarity)}</div>
    <div>{formatUppercaseString(reward.type)}</div>
    <Link href="/">View →</Link>
  </ListItemStyles>
)

export default RewardListItem
