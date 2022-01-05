import type { NextPage } from 'next'
import CreateMission from '../../../components/CreateMission'

interface CreateMissionPageProps {
  query: {
    id: string
  }
}

const CreateMissionPage: NextPage<CreateMissionPageProps> = ({ query }) => {
  return <CreateMission bp_id={query.id} />
}

export default CreateMissionPage
