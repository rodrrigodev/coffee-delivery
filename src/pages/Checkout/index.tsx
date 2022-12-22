import { useContext } from "react";
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext";
import { DeliveryAddress } from "./componentes/DeliveryAddress";
import { PaymentMethod } from "./componentes/PaymentMethod";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
    const { coffeesCart, totalCoffees } = useContext(CoffeesCartContext)
    return (
        <main>
            <form action="">

                <CheckoutContainer>

                    <div>
                        <h2>Complete seu pedido</h2>

                        <DeliveryAddress/>
                        <PaymentMethod/>

                    </div>

                    <div>

                        <h2>{totalCoffees? "Cafés selecionados" : "Carrinho vazio"}</h2>

                        <SelectedCoffees/>


                    </div>

                </CheckoutContainer>

            </form>
        </main>
    )
}