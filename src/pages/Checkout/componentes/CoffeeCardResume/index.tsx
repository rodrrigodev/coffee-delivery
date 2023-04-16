import { CoffeesCartContext } from '../../../../contexts/CoffeesCartContext'
import { useContext } from 'react'
import {
  ButtonAndTitleContainer,
  CoffeeOrderContainer,
  CoffeePrice,
} from './style'
import { PlusOrMinus } from '../../../Home/components/CoffeeCard/styles'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { formatPrice } from '../../../../utils/deliveryPrice'

interface CoffeeCardResumeProps {
  id: string
  amount: number
}

export function CoffeeCardResume({ id, amount }: CoffeeCardResumeProps) {
  const { coffeesAvailable, handleUpdateCoffeesCart } =
    useContext(CoffeesCartContext)
  const coffee = coffeesAvailable.find((coffee) => {
    return coffee.id === id
  })
  return (
    <CoffeeOrderContainer>
      <div>
        <img
          src={`https://raw.githubusercontent.com/rodrrigodev/coffee-delivery/master/src/assets/${id}.png`}
          alt=""
        />

        <ButtonAndTitleContainer>
          <h3>{coffee?.name}</h3>

          <div>
            <PlusOrMinus>
              <button
                type="button"
                disabled={amount === 1}
                onClick={() => handleUpdateCoffeesCart(id, 'minus')}
              >
                <Minus size={18} />
              </button>

              <input value={amount} type="number" readOnly />

              <button
                type="button"
                disabled={amount === 20}
                onClick={() => handleUpdateCoffeesCart(id, 'plus')}
              >
                <Plus size={18} />
              </button>
            </PlusOrMinus>

            <span onClick={() => handleUpdateCoffeesCart(id, 'remove')}>
              <Trash size={18} id="Trash" />
              Remover
            </span>
          </div>
        </ButtonAndTitleContainer>
      </div>
      <CoffeePrice>R$ {formatPrice(coffee?.price || 0)}</CoffeePrice>
    </CoffeeOrderContainer>
  )
}
