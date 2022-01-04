import styled from 'styled-components'

const ListItemStyles = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
  border: 2px solid var(--red);
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin: 1rem 0;

  a {
    background: var(--red);
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 10px;
  }
`

export default ListItemStyles
