import styled from 'styled-components'
import { containerPatternSizeBase } from '../Home/styles'

export const CheckoutContainer = styled(containerPatternSizeBase)`
  margin: 4.5rem auto;
  gap: 1rem;

  @media only screen and (max-width: 1154px) {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
  }
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 0.9375rem;
  }
`

export const ContainerCardBase = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const BackgroundCardCollor = styled(ContainerCardBase)`
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const addressAndPaymentBase = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ErrorsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 2rem 0 0 2.5rem;

  p {
    font-size: 0.875rem;
    color: red;
  }
`
