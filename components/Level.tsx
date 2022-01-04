import { useQuery } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
import { Level } from '../types'
import SINGLE_LEVEL from '../queries/singleLevel'
import SinglePageStyles from './styles/SinglePageStyles'
import formatUppercaseString from '../lib/formatUppercaseString'
import Link from 'next/link'
import OutlineBtn from './styles/OutlineBtn'
import CardStyles from './styles/CardStyles'
import SolidBtn from './styles/SolidBtn'

interface LevelProps {
  id: string
}

const Level = ({ id }: LevelProps) => {
  const { data, loading, error } = useQuery(SINGLE_LEVEL, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { level } = data
  const { reward } = level

  return (
    <SinglePageStyles>
      <div className="overview">
        <h1 className="title">Level {level.name}</h1>
        <CardStyles>
          <h3 className="card-title">
            <span>Reward: </span>
            {reward.name}
          </h3>
          <p className="text">
            <span className="label">Type:</span>{' '}
            {formatUppercaseString(reward.type)}
          </p>
          <p className="text">
            <span className="label">Rarity:</span>{' '}
            {formatUppercaseString(reward.rarity)}
          </p>
          <p className="text">{reward.description}</p>
          <Link href="/" passHref={true}>
            <SolidBtn>Edit reward ✏️</SolidBtn>
          </Link>
        </CardStyles>
        <div className="accent">
          <p>Level belongs to {level.tier.name} tier</p>
          <Link href={`/tier/${level.tier.id}`} passHref>
            <OutlineBtn>View tier</OutlineBtn>
          </Link>
        </div>
      </div>
    </SinglePageStyles>
  )
}
export default Level
