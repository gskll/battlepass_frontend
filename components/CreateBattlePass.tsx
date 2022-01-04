import { useMutation } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import Form from './styles/Form'
import DisplayError from './ErrorMessage'
import CREATE_BATTLE_PASS_MUTATION from '../mutations/createBattlePass'

export default function CreateBattlePass() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
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
    }
  )

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await createBattlePass()
        console.log(res)
        clearForm()

        Router.push({
          pathname: `/bp/${res.data.createBattlePass.id}`,
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
        <label htmlFor="status">
          Status
          <select
            id="status"
            name="status"
            value={inputs.status}
            onChange={handleChange}
          >
            <option value="DRAFT">Draft</option>
            <option value="ACTIVE">Active</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="PAST">Past</option>
          </select>
        </label>
        <label htmlFor="experience">
          Experience per level
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Experience"
            value={inputs.experience}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="start_date">
          Start Date
          <input
            type="date"
            id="start_date"
            name="start_date"
            placeholder="Start Date"
            value={inputs.start_date.substring(0, 10)}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="end_date">
          End Date
          <input
            type="date"
            id="end_date"
            name="end_date"
            placeholder="End Date"
            value={inputs.end_date.substring(0, 10)}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>

      <button type="submit">+ Add Battle Pass</button>
    </Form>
  )
}
