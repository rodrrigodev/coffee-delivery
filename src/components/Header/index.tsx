import { HeaderContainer, NavActionsContainer } from './styles'
import coffeeDeliveryLogo from '../../assets/coffeeLogo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesCartContext } from '../../contexts/CoffeesCartContext'

export function Header() {
  const { coffeesCart } = useContext(CoffeesCartContext)
  const total = coffeesCart.length
    ? coffeesCart
        .map((element) => {
          return element.amount
        })
        .reduce((total, currentValue) => total + currentValue)
    : 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>

      <NavActionsContainer>
        <span>
          <MapPin size={24} weight="fill" id="MapPin" />
          Porto Alegre, RS
        </span>

        <div>
          <Link to="/checkout" title="Carrinho">
            <ShoppingCart size={24} weight="fill" />
            {total ? <span>{total}</span> : ''}
          </Link>
        </div>
      </NavActionsContainer>
    </HeaderContainer>
  )
}
