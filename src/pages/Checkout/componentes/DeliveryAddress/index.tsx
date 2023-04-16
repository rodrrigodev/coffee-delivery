import { MapPinLine } from '@phosphor-icons/react'
import { BackgroundCardCollor } from '../../styles'
import { AddressForm } from '../AddressForm'
import { AddressTitleContainer } from './styles'

export function DeliveryAddress() {
  return (
    <BackgroundCardCollor>
      <AddressTitleContainer>
        <span>
          <MapPinLine size={22} />
        </span>
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressTitleContainer>

      <AddressForm />
    </BackgroundCardCollor>
  )
}
