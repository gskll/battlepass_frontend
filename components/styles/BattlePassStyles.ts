import styled from 'styled-components'

const BattlePassStyles = styled.div`
  .title {
    text-align: center;
    color: white;
    background: var(--red);
    border-radius: 10px;
    margin: 0 1rem;
    text-align: center;
    transform: skew(-5deg) rotate(-1deg);
    margin-top: 2rem;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
  .overview {
    font-size: 2rem;
  }

  .dates {
    display: flex;
    justify-content: space-around;
  }

  .experience {
    font-weight: 700;
  }

  h2 {
    font-size: 3rem;
  }

  .sub-title > * {
    display: inline-block;
    margin-right: 4rem;
  }
`

export default BattlePassStyles
