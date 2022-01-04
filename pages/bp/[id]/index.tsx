import { NextPage } from 'next'
import BattlePass from '../../../components/BattlePass'

interface BattlePassPageProps {
  query: {
    id: string
  }
}

const BattlePassPage: NextPage<BattlePassPageProps> = ({ query }) => {
  return <BattlePass id={query.id} />
}

export default BattlePassPage
