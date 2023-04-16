import styled from 'styled-components'
import { addressAndPaymentBase } from '../../styles'

export const AddressTitleContainer = styled(addressAndPaymentBase)`
  span {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
