import { useQuery } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
import { Level, Reward, Tier } from '../types'
import SINGLE_TIER from '../queries/singleTier'
import SinglePageStyles from './styles/SinglePageStyles'
import Link from 'next/link'
import OutlineBtn from './styles/OutlineBtn'
import formatMoney from '../lib/formatMoney'
import RewardListItem from './RewardListItem'
import LevelListItem from './LevelListItem'

interface TierProps {
  tier_id: string
}

const Tier = ({ tier_id }: TierProps) => {
  const { data, loading, error } = useQuery(SINGLE_TIER, {
    variables: { tier_id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { tier }: { tier: Tier } = data

  return (
    <SinglePageStyles>
      <div className="overview">
        <h1 className="title">{tier.name}</h1>
        <div className="sub-head">
          <p>Price: {formatMoney(parseInt(tier.price))}</p>
        </div>
      </div>
      <div className="accent">
        <p>Tier belongs to {tier.battlepass?.name} battle pass</p>
        <Link href={`/bp/${tier.battlepass?.id}`} passHref>
          <OutlineBtn>View battle pass</OutlineBtn>
        </Link>
      </div>
      <div className="levels">
        <div className="sub-title">
          <h2>Levels</h2>
          <Link href={`/tier/${tier_id}/level`} passHref>
            <OutlineBtn className="add-button">+ Add level</OutlineBtn>
          </Link>
        </div>
        <div className="levels-list">
          {tier.levels.map((level: Level) => (
            <LevelListItem key={level.id} level={level} />
          ))}
        </div>
      </div>
      <div className="rewards">
        <div className="sub-title">
          <h2>All Rewards in Tier</h2>
        </div>
        <div className="rewards-list">
          {tier.rewards?.map((reward: Reward) => (
            <RewardListItem key={reward.id} reward={reward} />
          ))}
        </div>
      </div>
    </SinglePageStyles>
  )
}
export default Tier
