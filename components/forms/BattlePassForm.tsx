import Form from '../styles/Form'
import DisplayError from '../ErrorMessage'
import FormError from '../styles/FormError'

function BattlePassForm({
  inputs,
  errors,
  handleChange,
  submit,
  formError,
  formLoading,
  submitButtonText,
}) {
  return (
    <Form onSubmit={submit}>
      <DisplayError error={formError} />
      <fieldset disabled={formLoading} aria-busy={formLoading}>
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
          {errors.experience && <FormError>{errors.experience}</FormError>}
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

      <button type="submit">{submitButtonText}</button>
    </Form>
  )
}

export default BattlePassForm
