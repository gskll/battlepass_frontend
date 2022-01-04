import { NextPage } from 'next'
import Level from '../../components/Level'

interface LevelPageProps {
  query: {
    id: string
  }
}

const LevelPage: NextPage<LevelPageProps> = ({ query }) => {
  return <Level id={query.id} />
}

export default LevelPage
