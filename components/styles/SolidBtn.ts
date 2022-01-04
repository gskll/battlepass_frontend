import styled from 'styled-components'

const SolidBtn = styled.a`
  border: 2px solid var(--red, #e72222);
  font-weight: 500;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transform: skew(-2deg);
  display: inline-block;
  transition: all 0.5s;
  background: var(--red, #e72222);
  color: white;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: white;
    color: var(--red, #e72222);
    cursor: pointer;
    text-decoration: none;
  }
`

export default SolidBtn
