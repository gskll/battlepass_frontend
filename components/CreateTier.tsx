import { useMutation } from '@apollo/client'
import Router from 'next/router'
import useForm from '../lib/useForm'
import Form from './styles/Form'
import DisplayError from './ErrorMessage'
import CREATE_TIER from '../mutations/createTier'
import SINGLE_BATTLE_PASS from '../queries/singleBattlePass'

interface CreateTierProps {
  bp_id: string
}

export default function CreateTier({ bp_id }: CreateTierProps) {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'test',
    price: 10000,
    bp_id: bp_id,
  })

  const [createTier, { loading, error, data }] = useMutation(CREATE_TIER, {
    variables: inputs,
    refetchQueries: [{ query: SINGLE_BATTLE_PASS, variables: { bp_id } }],
  })

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await createTier()
        clearForm()

        Router.push({
          pathname: `/tier/${res.data.createTier.id}`,
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
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <button type="submit">+ Add Tier</button>
    </Form>
  )
}
