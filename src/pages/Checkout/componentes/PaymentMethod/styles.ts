import styled from 'styled-components'
import { addressAndPaymentBase } from '../../styles'

export const PaymentTitleContainer = styled(addressAndPaymentBase)`
  span {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  background-color: ${(props) => props.color};

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.6;
  }

  @media only screen and (max-width: 642px) {
    flex-wrap: wrap;

    div {
      width: 100%;
    }
  }
`

interface PaymentTypeVariant {
  variant?: 'active'
}

export const PaymentType = styled.div<PaymentTypeVariant>`
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  border-radius: 6px;
  transition: all 500ms;
  border: 1px solid transparent;

  background-color: ${(props) =>
    props.variant === 'active'
      ? props.theme['purple-light']
      : props.theme['base-button']};

  border: 1px solid
    ${(props) =>
      props.variant === 'active'
        ? props.theme.purple
        : props.theme['base-button']};
  transition: all 500ms;

  &:hover {
    background-color: ${(props) =>
      props.variant !== 'active'
        ? props.theme['base-hover']
        : props.theme['purple-light']};
    transition: all 500ms;
  }
`
