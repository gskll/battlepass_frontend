import Link from 'next/link'
import formatISODate from '../lib/formatISODate'
import { BattlePassOverview } from '../types'
import Button from './styles/Button'
import CardStyles from './styles/CardStyles'

interface BattlePassCardProps {
  bp: BattlePassOverview
}

export default function BattlePassCard({ bp }: BattlePassCardProps) {
  const start = formatISODate(bp.start_date)
  const end = formatISODate(bp.end_date)

  return (
    <CardStyles>
      <h3 className="title">
        {bp.name} - <span className="status">{bp.status}</span>
      </h3>
      <p className="date">
        <span className="date-label">Start:</span> {start}
      </p>
      <p className="date">
        <span className="date-label">End:</span> {end}
      </p>
      <Link href={`/bp/${bp.id}`} passHref={true}>
        <Button>View Battle Pass &gt;&gt;</Button>
      </Link>
    </CardStyles>
  )
}
