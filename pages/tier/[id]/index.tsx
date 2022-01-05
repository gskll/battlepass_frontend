import { NextPage } from 'next'
import Tier from '../../../components/Tier'

interface TierPageProps {
  query: {
    id: string
  }
}

const TierPage: NextPage<TierPageProps> = ({ query }) => {
  return <Tier tier_id={query.id} />
}

export default TierPage
