import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { AdrressDeliveryInfoContainer, SuccessContainer } from './styles'
import deliveryMan from '../../assets/deliveryMan.png'
import { useContext, useEffect } from 'react'
import { CoffeesCartContext } from '../../contexts/CoffeesCartContext'
import { useNavigate } from 'react-router-dom'

export function Success() {
  const { checkout } = useContext(CoffeesCartContext)
  const calcTime = checkout?.itens ? checkout.itens + 10 : 0
  const timerTwo = calcTime + 10
  const navigate = useNavigate()
  useEffect(() => {
    if (!checkout) {
      navigate('/')
    }
  }, [checkout, navigate])
  return (
    <main>
      <SuccessContainer>
        <div>
          <strong>Uhu! Pedido confirmado</strong>
          <p>Agora é só aguardar que logo o café chegará até você</p>

          <AdrressDeliveryInfoContainer>
            <div>
              <span>
                <MapPin size={16} weight="fill" id="MapPin" />
              </span>
              <div>
                <p>
                  Entrega em{' '}
                  <b>
                    {checkout?.street}, {checkout?.number}
                  </b>
                </p>
                <p>
                  {checkout?.district} - {checkout?.city}, {checkout?.uf}
                </p>
              </div>
            </div>

            <div>
              <span>
                <Timer size={16} weight="fill" id="Timer" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <b>
                  {calcTime} min - {timerTwo} min
                </b>
              </div>
            </div>

            <div>
              <span>
                <CurrencyDollar size={16} id="CurrencyDollar" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                {checkout?.paymentMethod === 'money' && <b>Dinheiro</b>}
                {checkout?.paymentMethod === 'creditCard' && (
                  <b>Cartão de Crédito</b>
                )}
                {checkout?.paymentMethod === 'debitCard' && (
                  <b>Cartão de Débito</b>
                )}
              </div>
            </div>
          </AdrressDeliveryInfoContainer>
        </div>

        <img
          src={deliveryMan}
          alt="Homem pardo pilotando uma biz roxa que possui um baú de madeira na parte de trás "
        />
      </SuccessContainer>
    </main>
  )
}
