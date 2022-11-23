import { HeaderContainer, NavActionsContainer } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffeeLogo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <img src={coffeeDeliveryLogo} />
            </Link>

            <NavActionsContainer>
                <span>
                    <MapPin size={24} color="#8047F8" weight="fill" id="MapPin" />
                    Porto Alegre, RS
                </span>

                <Link to="/checkout" title="Carrinho">
                    <ShoppingCart size={24} weight="fill" />
                </Link>
            </NavActionsContainer>
        </HeaderContainer>
    )
}