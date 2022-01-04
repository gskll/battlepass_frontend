import Link from 'next/link'
import formatISODate from '../lib/formatISODate'
import { BattlePassOverview } from '../types'
import OutlineBtn from './styles/OutlineBtn'
import CardStyles from './styles/CardStyles'

interface BattlePassCardProps {
  bp: BattlePassOverview
}

export default function BattlePassCard({ bp }: BattlePassCardProps) {
  const start = formatISODate(bp.start_date)
  const end = formatISODate(bp.end_date)

  return (
    <CardStyles>
      <h3 className="card-title">
        {bp.name} - <span>{bp.status}</span>
      </h3>
      <p className="text">
        <span className="label">Start:</span> {start}
      </p>
      <p className="text">
        <span className="label">End:</span> {end}
      </p>
      <Link href={`/bp/${bp.id}`} passHref={true}>
        <OutlineBtn>View Battle Pass →</OutlineBtn>
      </Link>
    </CardStyles>
  )
}
