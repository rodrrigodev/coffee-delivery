import {
  ConfirmOrder,
  EmptyCartContainer,
  FinalPrice,
  PriceItensTotalContainer,
} from './styles'
import { HouseLine } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeesCartContext } from '../../../../contexts/CoffeesCartContext'
import { formatPrice } from '../../../../utils/deliveryPrice'
import { Link } from 'react-router-dom'
import { CoffeeCardResume } from '../CoffeeCardResume'

export function SelectedCoffees() {
  const { coffeesCart } = useContext(CoffeesCartContext)
  const priceCalc = coffeesCart.length
    ? coffeesCart
        .map((element) => {
          return element.price * element.amount
        })
        .reduce((total, currentValue) => total + currentValue)
    : 0
  const priceFinal = Number(priceCalc.toFixed(2))
  const totalItens = coffeesCart.length
    ? coffeesCart
        .map((element) => {
          return element.amount
        })
        .reduce((total, currentValue) => total + currentValue)
    : 0

  return (
    <ConfirmOrder>
      {coffeesCart
        ? coffeesCart.map((coffee) => {
            return (
              <CoffeeCardResume
                id={coffee.id}
                key={coffee.id}
                amount={coffee.amount}
              />
            )
          })
        : ''}

      {coffeesCart.length ? (
        <PriceItensTotalContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ {formatPrice(priceFinal)}</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ {formatPrice(totalItens * 1.5)}</span>
          </div>

          <div>
            <FinalPrice>Total</FinalPrice>
            <FinalPrice>
              R$ {formatPrice(priceFinal + totalItens * 1.5)}
            </FinalPrice>
          </div>

          <button type="submit">Confirmar pedido</button>
        </PriceItensTotalContainer>
      ) : (
        <EmptyCartContainer>
          <p>Parece que seu carrinho está um pouco vazio no momento.</p>
          <Link to="/">
            <span>
              <HouseLine size={22} />
            </span>
            Home
          </Link>
        </EmptyCartContainer>
      )}
    </ConfirmOrder>
  )
}
