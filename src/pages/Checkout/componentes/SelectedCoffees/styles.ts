import styled from 'styled-components'
import { ContainerCardBase } from '../../styles'

export const ConfirmOrder = styled(ContainerCardBase)`
  border-radius: 6px 40px;
  width: 100%;

  a {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    max-width: 5.8rem;
    padding: 0.5rem 0;
    border-radius: 6px;
    font-size: 0.875rem;
    transition: all 500ms;

    span {
      line-height: 0;
      color: ${(props) => props.theme.purple};
      transition: all 500ms;
    }

    &:hover {
      background-color: ${(props) => props.theme.purple};
      color: ${(props) => props.theme['purple-light']};
      transition: all 500ms;

      span {
        color: ${(props) => props.theme['purple-light']};
        transition: all 500ms;
      }
    }
  }
`

export const PriceItensTotalContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
    }
  }

  button {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    border-radius: 6px;
    border: 0;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    padding: 0.75rem 0;
    width: 100%;
    transition: all 500ms;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
      transition: all 500ms;
    }
  }
`

export const FinalPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const EmptyCartContainer = styled.div`
  p {
    max-width: 24.5625rem;
    width: 100%;
  }
`
