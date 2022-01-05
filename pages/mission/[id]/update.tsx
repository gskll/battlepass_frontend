import type { NextPage } from 'next'
import UpdateMission from '../../../components/UpdateMission'

interface UpdateMissionPageProps {
  query: {
    id: string
  }
}

const UpdateMissionPage: NextPage<UpdateMissionPageProps> = ({ query }) => {
  return <UpdateMission id={query.id} />
}

export default UpdateMissionPage
