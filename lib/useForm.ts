import { useEffect, useState } from 'react'
import formatISODate from './formatISODate'

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial)
  const initialValues = Object.values(initial).join('')

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  function handleChange(e) {
    let { value, name, type } = e.target

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'date') {
      // Have to convert it for backend storage
      value = new Date(value).toISOString()
    }

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    )
    setInputs(blankState)
  }

  return { inputs, handleChange, resetForm, clearForm }
}
