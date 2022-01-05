import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import useForm from '../lib/useForm'
import SINGLE_LEVEL from '../queries/singleLevel'
import LEVEL_OVERVIEW from '../queries/levelOverview'
import DisplayError from './ErrorMessage'
import Form from './styles/Form'
import UPDATE_LEVEL_REWARD from '../mutations/updateLevelReward'

interface UpdateLevelProps {
  lvl_id: string
}

export default function UpdateLevel({ lvl_id }: UpdateLevelProps) {
  // Get the existing data
  const { data, error, loading } = useQuery(LEVEL_OVERVIEW, {
    variables: { lvl_id },
  })

  const formattedData = {
    lvl_id,
    lvl_name: data?.level.name,
    reward_id: data?.level.reward.id,
    reward_name: data?.level.reward.name,
    description: data?.level.reward.description,
    type: data?.level.reward.type,
    rarity: data?.level.reward.rarity,
  }

  // Get the mutation to update the data
  const [
    updateLevelReward,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_LEVEL_REWARD, {
    refetchQueries: [{ query: SINGLE_LEVEL, variables: { lvl_id } }],
  })

  // Create state for the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(
    formattedData || {}
  )

  if (loading) return <p>Loading...</p>
  // Get the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await updateLevelReward({
          variables: {
            lvl_id: lvl_id,
            lvl_name: inputs.lvl_name,
            reward_id: inputs.reward_id,
            reward_name: inputs.reward_name,
            description: inputs.description,
            type: inputs.type,
            rarity: inputs.rarity,
          },
        })

        Router.push({
          pathname: `/level/${res.data.updateLevel.id}`,
        })
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="lvl_name">
          Level Name
          <input
            type="text"
            id="lvl_name"
            name="lvl_name"
            placeholder="Level Name"
            value={inputs.lvl_name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="reward_name">
          Reward Name
          <input
            type="text"
            id="reward_name"
            name="reward_name"
            placeholder="Reward Name"
            value={inputs.reward_name}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="description">
          Reward Description
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
            <option value="GOLD">Gold</option>
            <option value="FOOD">Food</option>
            <option value="CREATURE">Creature</option>
            <option value="WEAPON">Weapon</option>
            <option value="SKIN">Skin</option>
            <option value="ABILITY">Ability</option>
          </select>
        </label>
        <label htmlFor="rarity">
          Reward Rarity
          <select
            id="rarity"
            name="rarity"
            value={inputs.rarity}
            onChange={handleChange}
          >
            <option value="COMMON">Common</option>
            <option value="UNUSUAL">Unusual</option>
            <option value="RARE">Rare</option>
            <option value="LEGENDARY">Legendary</option>
          </select>
        </label>
      </fieldset>

      <button type="submit">✏️ Update Level</button>
    </Form>
  )
}
