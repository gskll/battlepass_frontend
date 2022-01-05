import styled from 'styled-components'

const SinglePageStyles = styled.div`
  .title {
    text-align: center;
    color: white;
    background: var(--red);
    border-radius: 10px;
    margin: 0 1rem;
    text-align: center;
    transform: skew(-5deg) rotate(-1deg);
    margin-top: 2rem;
  }
  .overview {
    font-size: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--black, black);
  }

  .sub-head {
    display: flex;
    justify-content: space-around;
  }

  .accent {
    font-weight: 700;
  }

  h2 {
    font-size: 3rem;
  }

  .description > * {
    display: inline-block;
  }

  .sub-title > * {
    display: inline-block;
    margin-right: 4rem;
  }
`

export default SinglePageStyles
