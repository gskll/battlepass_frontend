import { useMutation, useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import useForm from '../lib/useForm'
import SINGLE_TIER from '../queries/singleTier'
import UPDATE_TIER_MUTATION from '../mutations/updateTier'
import TIER_OVERVIEW from '../queries/tierOverview'

import DisplayError from './ErrorMessage'
import Form from './styles/Form'

interface UpdateTierProps {
  tier_id: string
}

export default function UpdateTier({ tier_id }: UpdateTierProps) {
  // Get the existing product
  const { data, error, loading } = useQuery(TIER_OVERVIEW, {
    variables: { tier_id },
  })

  // Get the mutation to update the product
  const [
    updateTier,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_TIER_MUTATION, {
    refetchQueries: [{ query: SINGLE_TIER, variables: { tier_id } }],
  })

  // Create state for the form inputs
  const { inputs, handleChange, resetForm, clearForm } = useForm(
    data?.tier || {}
  )

  if (loading) return <p>Loading...</p>
  // Get the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault()

        // Submit input fields to backend:
        const res = await updateTier({
          variables: {
            tier_id: tier_id,
            name: inputs.name,
            price: inputs.price,
          },
        })

        Router.push({
          pathname: `/tier/${res.data.updateTier.id}`,
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

      <button type="submit">✏️ Update Tier</button>
    </Form>
  )
}
