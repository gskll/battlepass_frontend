import styled from 'styled-components'

const ListItemStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  border: 2px solid var(--offWhite);
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

  a {
    background: var(--red);
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border-radius: 10px;
  }
`

export default ListItemStyles
