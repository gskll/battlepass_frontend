import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import useForm from '../lib/useForm'
import UPDATE_BATTLE_PASS_MUTATION from '../mutations/updateBattlePass'
import BATTLE_PASS_OVERVIEW_QUERY from '../queries/battlePassOverview'
import DisplayError from './ErrorMessage'
import Form from './styles/Form'

interface UpdateBattlePassProps {
  bp_id: string
}

export default function UpdateBattlePass({ bp_id }: UpdateBattlePassProps) {
  // Get the existing product
  const { data, error, loading } = useQuery(BATTLE_PASS_OVERVIEW_QUERY, {
    variables: { bp_id },
  })

  // Get the mutation to update the product
  const [
    updateBattlePass,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_BATTLE_PASS_MUTATION)

  // Create state for the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(
    data?.battlePass || {}
  )

  if (loading) return <p>Loading...</p>
  // Get the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
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
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
            value={inputs.start_date?.substring(0, 10)}
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
            value={inputs.end_date?.substring(0, 10)}
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>

      <button type="submit">✏️ Update Battle Pass</button>
    </Form>
  )
}
