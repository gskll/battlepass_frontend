import { Tier } from '../types'
import ListItemStyles from './styles/ListItemStyles'
import Link from 'next/link'
import formatMoney from '../lib/formatMoney'
import SolidBtn from './styles/SolidBtn'

interface TierListItemProps {
  tier: Tier
}

const TierListItem = ({ tier }: TierListItemProps) => (
  <ListItemStyles>
    <h3>{tier.name}</h3>
    <div>Price: {formatMoney(parseInt(tier.price))}</div>
    <div>{tier.levels.length} levels</div>
    <Link href={`/tier/${tier.id}`} passHref>
      <SolidBtn>View →</SolidBtn>
    </Link>
  </ListItemStyles>
)

export default TierListItem
