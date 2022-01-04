import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SINGLE_BATTLE_PASS from '../queries/singleBattlePass'
import ErrorMessage from './ErrorMessage'
import Button from './styles/Button'
import BattlePassStyles from './styles/BattlePassStyles'
import formatISODate from '../lib/formatISODate'
import TierListItem from './TierListItem'

interface BattlePassProps {
  id: string
}

export default function BattlePass({ id }: BattlePassProps) {
  const { data, loading, error } = useQuery(SINGLE_BATTLE_PASS, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { battlePass } = data
  return (
    <BattlePassStyles>
      <div className="overview">
        <h1 className="title">
          {battlePass.name} - <span>{battlePass.status}</span>
        </h1>
        <div className="dates">
          <p>Start: {formatISODate(battlePass.start_date)}</p>
          <p>End: {formatISODate(battlePass.end_date)}</p>
        </div>
        <div className="experience">
          <p>Experience between levels: {battlePass.experience} points</p>
        </div>
      </div>
      <div className="tiers">
        <div className="sub-title">
          <h2>Tiers</h2>
          <Button className="add-button">+ Add tier</Button>
        </div>
        <div className="tier-list">
          {battlePass.tiers.map((tier) => (
            <TierListItem key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
      <div className="Missions">
        <div className="sub-title">
          <h2>Missions</h2>
          <Button className="add-button">+ Add mission</Button>
        </div>
        <div className="mission-list">Mission List</div>
      </div>
      <div className="rewards">
        <div className="sub-title">
          <h2>Rewards</h2>
        </div>
        <div className="rewards-list">Rewards List</div>
      </div>
    </BattlePassStyles>
  )
}
