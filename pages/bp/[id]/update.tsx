import type { NextPage } from 'next'
import UpdateBattlePass from '../../../components/UpdateBattlePass'

interface UpdateBattlePassPageProps {
  query: {
    id: string
  }
}

const UpdateBattlePassPage: NextPage<UpdateBattlePassPageProps> = ({
  query,
}) => {
  return <UpdateBattlePass bp_id={query.id} />
}

export default UpdateBattlePassPage
