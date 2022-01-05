import { useQuery } from '@apollo/client'
import SINGLE_BATTLE_PASS from '../queries/singleBattlePass'
import ErrorMessage from './ErrorMessage'
import OutlineBtn from './styles/OutlineBtn'
import SinglePageStyles from './styles/SinglePageStyles'
import formatISODate from '../lib/formatISODate'
import TierListItem from './TierListItem'
import { Mission, Reward, Tier } from '../types'
import MissionListItem from './MissionListItem'
import RewardListItem from './RewardListItem'
import Link from 'next/link'

interface BattlePassProps {
  bp_id: string
}

export default function BattlePass({ bp_id }: BattlePassProps) {
  const { data, loading, error } = useQuery(SINGLE_BATTLE_PASS, {
    variables: { bp_id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { battlePass } = data

  return (
    <SinglePageStyles>
      <div className="overview">
        <h1 className="title">
          {battlePass.name} - <span>{battlePass.status}</span>
        </h1>
        <div className="sub-head">
          <p>Start: {formatISODate(battlePass.start_date)}</p>
          <p>End: {formatISODate(battlePass.end_date)}</p>
        </div>
        <div className="accent">
          <p>Experience between levels: {battlePass.experience} points</p>
        </div>
        <div className="description">
          <p>Description: {battlePass.description}</p>
        </div>
      </div>
      <div className="tiers">
        <div className="sub-title">
          <h2>Tiers</h2>
          <Link href={`/bp/${bp_id}/tier`} passHref>
            <OutlineBtn>+ Add tier</OutlineBtn>
          </Link>
        </div>
        <div className="tier-list">
          {battlePass.tiers.map((tier: Tier) => (
            <TierListItem key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
      <div className="Missions">
        <div className="sub-title">
          <h2>Missions</h2>
          <Link href={`/bp/${bp_id}/mission`} passHref>
            <OutlineBtn>+ Add mission</OutlineBtn>
          </Link>
        </div>
        <div className="mission-list">
          {battlePass.missions.map((mission: Mission) => (
            <MissionListItem key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
      <div className="rewards">
        <div className="sub-title">
          <h2>All Rewards in Battle Pass</h2>
        </div>
        <div className="rewards-list">
          {battlePass.rewards.map((reward: Reward) => (
            <RewardListItem key={reward.id} reward={reward} />
          ))}
        </div>
      </div>
    </SinglePageStyles>
  )
}
