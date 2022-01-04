import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`

const Form = styled.form`
  box-shadow: 0 0 5px 3px var(--offWhite);
  background: var(--light-grey);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 10px;

  label {
    display: block;
    margin-bottom: 1rem;
  }
  textarea,
  input,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid var(--black);
    border-radius: 2px;
    background: white;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    border-radius: 10px;
    border: 2px solid var(--red);
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    background: white;
    color: var(--red);

    &:hover {
      background: var(--red);
      color: white;
      cursor: pointer;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`

export default Form
