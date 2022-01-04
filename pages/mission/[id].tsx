import { NextPage } from 'next'
import Mission from '../../components/Mission'

interface MissionPageProps {
  query: {
    id: string
  }
}

const MissionPage: NextPage<MissionPageProps> = ({ query }) => {
  return <Mission id={query.id} />
}

export default MissionPage
