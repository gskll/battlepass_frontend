import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import useForm from '../lib/useForm'
import SINGLE_MISSION from '../queries/singleMission'
import UPDATE_MISSION_MUTATION from '../mutations/updateMission'
import MISSION_OVERVIEW from '../queries/missionOverview'

import DisplayError from './ErrorMessage'
import Form from './styles/Form'

interface UpdateMissionProps {
  id: string
}

export default function UpdateMission({ id }: UpdateMissionProps) {
  // Get the existing product
  const { data, error, loading } = useQuery(MISSION_OVERVIEW, {
    variables: { id },
  })

  // Get the mutation to update the product
  const [
    updateMission,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_MISSION_MUTATION, {
    refetchQueries: [{ query: SINGLE_MISSION, variables: { id } }],
  })

  // Create state for the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(
    data?.mission || {}
  )

  if (loading) return <p>Loading...</p>
  // Get the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await updateMission({
          variables: {
            id: id,
            name: inputs.name,
            description: inputs.description,
            type: inputs.type,
            goal_type: inputs.goal_type,
            exp_awarded: inputs.exp_awarded,
          },
        })

        Router.push({
          pathname: `/mission/${res.data.updateMission.id}`,
        })
      }}
    >
      <DisplayError error={error || updateError} />
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

      <button type="submit">✏️ Update Mission</button>
    </Form>
  )
}
