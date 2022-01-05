import { useMutation } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import Form from './styles/Form'
import DisplayError from './ErrorMessage'
import CREATE_MISSION from '../mutations/createMission'
import SINGLE_BATTLE_PASS from '../queries/singleBattlePass'

interface CreateMissionProps {
  bp_id: string
}

export default function CreateMission({ bp_id }: CreateMissionProps) {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'test mission',
    bp_id: bp_id,
    description: 'test mission description',
    type: 'WEEKLY',
    goal_type: 'GAMETIME',
    exp_awarded: 1000,
  })

  const [createMission, { loading, error, data }] = useMutation(
    CREATE_MISSION,
    {
      variables: inputs,
      refetchQueries: [{ query: SINGLE_BATTLE_PASS, variables: { bp_id } }],
    }
  )

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await createMission()
        clearForm()

        Router.push({
          pathname: `/mission/${res.data.createMission.id}`,
        })
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="type">
          Reward Type
          <select
            id="type"
            name="type"
            value={inputs.type}
            onChange={handleChange}
          >
            <option value="WEEKLY">Weekly</option>
            <option value="DAILY">Daily</option>
          </select>
        </label>
        <label htmlFor="goal_type">
          Goal Type
          <select
            id="goal_type"
            name="goal_type"
            value={inputs.goal_type}
            onChange={handleChange}
          >
            <option value="GAMETIME">Gametime</option>
            <option value="COLLECTION">Collection</option>
            <option value="VICTORIES">Victories</option>
            <option value="LEVELUP">Levelup</option>
          </select>
        </label>
        <label htmlFor="exp_awarded">
          Exp awarded on completion
          <input
            type="number"
            id="exp_awarded"
            name="exp_awarded"
            placeholder="Exp awarded on completion"
            value={inputs.exp_awarded}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">+ Add Mission</button>
    </Form>
  )
}
