import type { NextPage } from 'next'
import UpdateTier from '../../../components/UpdateTier'

interface UpdateTierPageProps {
  query: {
    id: string
  }
}

const UpdateTierPage: NextPage<UpdateTierPageProps> = ({ query }) => {
  return <UpdateTier tier_id={query.id} />
}

export default UpdateTierPage
