import { gql, useMutation, useQuery } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import Form from './styles/Form'
import DisplayError from './ErrorMessage'
import CREATE_REWARD from '../mutations/createReward'
import CREATE_LEVEL from '../mutations/createLevel'
import SINGLE_TIER from '../queries/singleTier'

interface CreateLevelProps {
  tier_id: string
}

const GET_BP_ID = gql`
  query GET_BP_ID($tier_id: ID!) {
    tier(where: { id: $tier_id }) {
      battlepass {
        id
      }
    }
  }
`

export default function CreateLevel({ tier_id }: CreateLevelProps) {
  const {
    data: bpData,
    loading: bpLoading,
    error: bpError,
  } = useQuery(GET_BP_ID, {
    variables: { tier_id },
  })
  const bp_id = bpData?.tier.battlepass.id || ''

  const { inputs, handleChange, resetForm, clearForm } = useForm({
    lvl_name: 'test',
    tier_id: tier_id,
    bp_id: bp_id,
    lvl_id: '',
    reward_name: 'test reward',
    description: 'test test',
    reward_type: 'GOLD',
    rarity: 'COMMON',
  })

  const [createLevel, { loading: lvlLoading, error: lvlError, data: lvlData }] =
    useMutation(CREATE_LEVEL, {
      variables: inputs,
    })

  const [
    createReward,
    { loading: rewardLoading, error: rewardError, data: rewardData },
  ] = useMutation(CREATE_REWARD, {
    variables: inputs,
    refetchQueries: [{ query: SINGLE_TIER, variables: { tier_id } }],
  })

  const error = bpError || lvlError || rewardError
  const loading = bpLoading || lvlLoading || rewardLoading

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const level_result = await createLevel()
        inputs.lvl_id = level_result.data.createLevel.id
        const reward_result = await createReward()
        clearForm()

        Router.push({
          pathname: `/level/${level_result.data.createLevel.id}`,
        })
      }}
    >
      <DisplayError error={error} />
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
            placeholder="Level Name"
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

      <button type="submit">+ Add Level</button>
    </Form>
  )
}
