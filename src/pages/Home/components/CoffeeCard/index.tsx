import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { formatPrice } from '../../../../utils/deliveryPrice'
import { CoffeeCardContainer, PlusOrMinus, PriceAndAmount } from './styles'
import { useState, useContext } from 'react'
import { CoffeesCartContext } from '../../../../contexts/CoffeesCartContext'
import { notify } from '../../../../utils/notify'

interface coffeeProps {
  id: string
  name: string
  description: string
  type: string[]
  price: number
}

export function CoffeeCard(coffee: coffeeProps) {
  const { handleAddCoffeeToCart, coffeesCart } = useContext(CoffeesCartContext)
  const [amount, setAmount] = useState(1)

  const coffeeAmount = coffeesCart.find((iten) => {
    return iten.id === coffee.id
  })?.amount

  function updateCart() {
    handleAddCoffeeToCart(coffee.id, amount, coffee.price)
    coffeeAmount && coffeeAmount + amount > 20
      ? notify('limit')
      : notify('added')
    setAmount(1)
  }
  return (
    <CoffeeCardContainer>
      <div>
        <img
          src={`https://raw.githubusercontent.com/rodrrigodev/coffee-delivery/master/src/assets/${coffee.id}.png`}
          alt=""
        />
      </div>
      <div>
        {coffee.type.map((element) => {
          return <span key={coffee.id + element}>{element}</span>
        })}
      </div>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <PriceAndAmount>
        <span>{formatPrice(coffee.price)}</span>
        <div>
          <PlusOrMinus>
            <button
              disabled={amount === 1}
              onClick={() => setAmount(amount - 1)}
            >
              <Minus size={22} />
            </button>

            <input
              name={coffee.id}
              type="number"
              max={20}
              readOnly
              value={amount}
            />

            <button
              disabled={amount === 20}
              onClick={() => setAmount(amount + 1)}
            >
              <Plus size={22} />
            </button>
          </PlusOrMinus>
          <button type="button">
            <ShoppingCart
              size={22}
              weight="fill"
              onClick={() => updateCart()}
            />
          </button>
        </div>
      </PriceAndAmount>
    </CoffeeCardContainer>
  )
}
