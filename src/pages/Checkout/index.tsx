import { DeliveryAddress } from "./componentes/DeliveryAddress";
import { PaymentMethod } from "./componentes/PaymentMethod";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
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

                        <h2>Cafés Selecionados</h2>

                        <SelectedCoffees/>


                    </div>

                </CheckoutContainer>

            </form>
        </main>
    )
}