import styled from 'styled-components'

const CardStyles = styled.div`
  background: white;
  color: var(--grey);
  border: 2px solid var(--offWhite);
  border-radius: 10px;
  font-weight: 500;
  transition: all 0.5s;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

  .card-title {
    font-size: 3rem;
    margin: 1rem 0;
  }

  span {
    font-style: italic;
  }

  .text {
    margin: 0.5rem 0;
    font-size: 2rem;
  }

  .label {
    font-weight: 700;
  }

  button {
    margin: 1rem 0;
  }
`

export default CardStyles
