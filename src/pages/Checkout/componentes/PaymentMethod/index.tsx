import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { BackgroundCardCollor } from '../../styles'
import {
  PaymentTitleContainer,
  PaymentType,
  PaymentTypeContainer,
} from './styles'
import { CoffeesCartContext } from '../../../../contexts/CoffeesCartContext'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

export function PaymentMethod() {
  const { paymentMethod, handlePaymentMethod } = useContext(CoffeesCartContext)

  const theme = useTheme()

  return (
    <BackgroundCardCollor>
      <PaymentTitleContainer>
        <span>
          <CurrencyDollar size={22} />
        </span>
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentTitleContainer>

      <PaymentTypeContainer>
        <PaymentType
          onClick={() => {
            handlePaymentMethod('creditCard')
          }}
          variant={paymentMethod === 'creditCard' ? 'active' : undefined}
        >
          <span>
            <CreditCard size={22} color={theme.purple} />
            Cartão de crédito
          </span>
        </PaymentType>

        <PaymentType
          onClick={() => {
            handlePaymentMethod('debitCard')
          }}
          variant={paymentMethod === 'debitCard' ? 'active' : undefined}
        >
          <span>
            <Bank size={22} id="Bank" color={theme.purple} />
            Cartão de débito
          </span>
        </PaymentType>

        <PaymentType
          onClick={() => {
            handlePaymentMethod('money')
          }}
          variant={paymentMethod === 'money' ? 'active' : undefined}
        >
          <span>
            <Money size={22} id="Money" color={theme.purple} />
            Dinheiro
          </span>
        </PaymentType>
      </PaymentTypeContainer>
    </BackgroundCardCollor>
  )
}
