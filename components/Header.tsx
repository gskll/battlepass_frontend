import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.h1`
  font-style: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: var(--red, #e72222);
  transform: skew(-15deg);
  border-radius: 10px;

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">BattlePass Editor</Link>
        </Logo>
      </div>
    </HeaderStyles>
  )
}
