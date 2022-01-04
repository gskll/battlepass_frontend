import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SINGLE_BATTLE_PASS from '../queries/singleBattlePass'
import ErrorMessage from './ErrorMessage'

interface BattlePassProps {
  id: string
}

export default function BattlePass({ id }: BattlePassProps) {
  const { data, loading, error } = useQuery(SINGLE_BATTLE_PASS, {
    variables: { id },
  })

  console.log({ data, loading, error })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  const { battlePass } = data
  return <div>{battlePass.name}</div>
}
