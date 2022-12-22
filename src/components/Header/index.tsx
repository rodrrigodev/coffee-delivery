import { HeaderContainer, NavActionsContainer } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffeeLogo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext"

export function Header() {
    const { totalCoffees } = useContext(CoffeesCartContext)
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={coffeeDeliveryLogo} />
            </Link>

            <NavActionsContainer>
                <span>
                    <MapPin size={24} weight="fill" id="MapPin" />
                    Porto Alegre, RS
                </span>


<div>

                <Link to="/checkout" title="Carrinho">
                    <ShoppingCart size={24} weight="fill" />
                {totalCoffees ? <span>{totalCoffees}</span> : '' }
                </Link>
</div>
            </NavActionsContainer>
        </HeaderContainer>
    )
}