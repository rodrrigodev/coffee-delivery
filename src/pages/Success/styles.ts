import styled from 'styled-components'
import { containerPatternSizeBase } from '../Home/styles'

export const SuccessContainer = styled(containerPatternSizeBase)`
  margin: 5rem auto;
  gap: 2.5rem 0.2rem;

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};

    @media only screen and (max-width: 342px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    max-width: 30rem;
    width: 100%;
  }

  @media only screen and (max-width: 927px) {
    flex-wrap: wrap;
  }
`

export const AdrressDeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: calc(2.5rem - 1px);
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
    }

    b {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
      font-weight: 700;
    }

    #MapPin,
    #Timer,
    #CurrencyDollar {
      padding: 0.5rem;
      box-sizing: initial;
      color: ${(props) => props.theme.white};
      border-radius: 50%;
    }

    #MapPin {
      background: ${(props) => props.theme.purple};
    }

    #Timer {
      background: ${(props) => props.theme.yellow};
    }

    #CurrencyDollar {
      background: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }
  }
`
