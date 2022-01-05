import type { NextPage } from 'next'
import CreateTier from '../../../components/CreateTier'

interface CreateTierPageProps {
  query: {
    id: string
  }
}

const CreateTierPage: NextPage<CreateTierPageProps> = ({ query }) => {
  return <CreateTier bp_id={query.id} />
}

export default CreateTierPage
