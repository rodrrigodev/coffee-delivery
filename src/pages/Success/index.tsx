import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { AdrressDeliveryInfoContainer, SuccessContainer } from "./styles";
import deliveryMan from "../../assets/deliveryMan.png"
import { useContext } from "react";
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext";

export function Success() {
    const { address } = useContext(CoffeesCartContext)
    const timerTwo = address?.time ? address.time + 10 : 0
    return (
        <main>
            <SuccessContainer>
                <div>
                    <strong>Uhu! Pedido confirmado</strong>
                    <p>Agora é só aguardar que logo o café chegará até você</p>

                    <AdrressDeliveryInfoContainer>
                        <div>
                            <span>
                                <MapPin size={16} weight="fill" id="MapPin" />
                            </span>
                            <div>
                                <p>Entrega em <b>{address?.street}, {address?.number}</b></p>
                                <p>{address?.district} - {address?.city}, {address?.uf}</p>
                            </div>
                        </div>

                        <div>
                            <span>
                                <Timer size={16} weight="fill" id="Timer" />
                            </span>
                            <div>
                                <p>Previsão de entrega</p>
                                <b>{address?.time} min - {timerTwo} min</b>
                            </div>
                        </div>

                        <div>
                            <span>
                                <CurrencyDollar size={16} id="CurrencyDollar" />
                            </span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <b>{address?.paymentMethod}</b>
                            </div>
                        </div>
                    </AdrressDeliveryInfoContainer>
                </div>

                <img src={deliveryMan} alt="Homem pardo pilotando uma biz roxa que possui um baú de madeira na parte de trás " />
            </SuccessContainer>
        </main>
    )
}