import type { NextPage } from 'next'
import UpdateLevel from '../../../components/UpdateLevel'

interface UpdateLevelPageProps {
  query: {
    id: string
  }
}

const UpdateLevelPage: NextPage<UpdateLevelPageProps> = ({ query }) => {
  return <UpdateLevel lvl_id={query.id} />
}

export default UpdateLevelPage
