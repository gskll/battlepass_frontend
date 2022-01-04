import Button from './styles/Button'
import { Tier } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'

interface TierListItemProps {
  tier: Tier
}

export default function TierListItem({ tier }: TierListItemProps) {
  return (
    <ListItemStyles>
      <h3>{tier.name}</h3>
      <div>Price: {formatMoney(parseInt(tier.price))}</div>
      <div>{tier.levels.length} levels</div>
      <Link href="/">View &gt;&gt;</Link>
    </ListItemStyles>
  )
}
