import { useEffect, useState } from 'react'
import formatISODate from './formatISODate'

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial)
  const initialValues = Object.values(initial).join('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setInputs(initial)
  }, [initialValues])

  function handleChange(e) {
    e.persist()

    let { value, name, type } = e.target

    if (type === 'number') {
      if (isNaN(parseInt(value))) {
        setErrors({
          [name]: 'Error: numbers only in this field',
        })
      } else if (value > 10000000 || value < 0) {
        setErrors({ [name]: 'Error: number must be between 0 and 10,000,000' })
      } else {
        setErrors({})
        value = parseInt(value)
      }
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

  return { inputs, errors, handleChange, resetForm, clearForm }
}

export default useForm
