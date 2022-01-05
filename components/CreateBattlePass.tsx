import { useMutation } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import Form from './styles/Form'
import DisplayError from './ErrorMessage'
import CREATE_BATTLE_PASS_MUTATION from '../mutations/createBattlePass'
import ALL_BATTLEPASSES_QUERY from '../queries/allBattlePasses'
import BattlePassForm from './forms/BattlePassForm'

export default function CreateBattlePass() {
  const { inputs, errors, handleChange, resetForm, clearForm } = useForm({
    name: 'test',
    description: 'test',
    status: 'DRAFT',
    start_date: '2022-01-12T00:00:00.000Z',
    end_date: '2022-01-13T00:00:00.000Z',
    experience: 123,
  })

  const [createBattlePass, { loading, error, data }] = useMutation(
    CREATE_BATTLE_PASS_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_BATTLEPASSES_QUERY }],
    }
  )

  const submit = async (e) => {
    e.preventDefault()

    // Submit input fields to backend:
    const res = await createBattlePass()
    clearForm()

    Router.push({
      pathname: `/bp/${res.data.createBattlePass.id}`,
    })
  }

  return (
    <BattlePassForm
      inputs={inputs}
      errors={errors}
      handleChange={handleChange}
      submit={submit}
      formError={error}
      formLoading={loading}
      submitButtonText={'+ Add Battle Pass'}
    />
  )
}
