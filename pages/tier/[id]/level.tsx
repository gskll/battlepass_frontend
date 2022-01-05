import type { NextPage } from 'next'
import CreateLevel from '../../../components/CreateLevel'

interface CreateLevelPageProps {
  query: {
    id: string
  }
}

const CreateLevelPage: NextPage<CreateLevelPageProps> = ({ query }) => {
  return <CreateLevel tier_id={query.id} />
}

export default CreateLevelPage
