import { HeaderContainer, NavActionsContainer } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffeeLogo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { Link } from "react-router-dom"

export function Header() {
    return (
        <HeaderContainer>
            <img src={coffeeDeliveryLogo} />

            <NavActionsContainer>
                <span>
                    <MapPin size={24} color="#8047F8" weight="fill"/>
                    Porto Alegre, RS
                </span>
                
                <Link to="/checkout">
                    <ShoppingCart size={24} color="#C47F17" weight="fill" />
                </Link>
            </NavActionsContainer>
        </HeaderContainer>
    )
}