import { useMutation, useQuery } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import UPDATE_BATTLE_PASS_MUTATION from '../mutations/updateBattlePass'
import BATTLE_PASS_OVERVIEW_QUERY from '../queries/battlePassOverview'
import DisplayError from './ErrorMessage'
import BattlePassForm from './forms/BattlePassForm'
import Form from './styles/Form'

interface UpdateBattlePassProps {
  bp_id: string
}

export default function UpdateBattlePass({ bp_id }: UpdateBattlePassProps) {
  // Get the existing data
  const { data, error, loading } = useQuery(BATTLE_PASS_OVERVIEW_QUERY, {
    variables: { bp_id },
  })

  // Get the mutation to update the data
  const [
    updateBattlePass,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_BATTLE_PASS_MUTATION)

  // Create state for the form inputs
  const { inputs, errors, handleChange, resetForm, clearForm } = useForm(
    data?.battlePass || {}
  )

  if (loading) return <p>Loading...</p>

  const submit = async (e) => {
    e.preventDefault()

    // Submit input fields to backend:
    const res = await updateBattlePass({
      variables: {
        bp_id: bp_id,
        name: inputs.name,
        description: inputs.description,
        status: inputs.status,
        start_date: inputs.start_date,
        end_date: inputs.end_date,
        experience: inputs.experience,
      },
    })

    Router.push({
      pathname: `/bp/${res.data.updateBattlePass.id}`,
    })
  }

  return (
    <BattlePassForm
      inputs={inputs}
      errors={errors}
      handleChange={handleChange}
      submit={submit}
      formError={error || updateError}
      formLoading={updateLoading}
      submitButtonText={'✏️ Update Battle Pass'}
    />
  )
}
