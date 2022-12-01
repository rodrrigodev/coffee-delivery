import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { AdrressDeliveryInfoContainer, SuccessContainer } from "./styles";
import deliveryMan from "../../assets/deliveryMan.png"

export function Success() {
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
                                <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
                                <p>Farrapos - Porto Alegre, RS</p>
                            </div>
                        </div>

                        <div>
                            <span>
                                <Timer size={16} weight="fill" id="Timer" />
                            </span>
                            <div>
                                <p>Previsão de entrega</p>
                                <b>20 min - 30 min</b>
                            </div>
                        </div>

                        <div>
                            <span>
                                <CurrencyDollar size={16} id="CurrencyDollar" />
                            </span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <b>Cartão de Crédito</b>
                            </div>
                        </div>
                    </AdrressDeliveryInfoContainer>
                </div>

                <img src={deliveryMan} alt="Homem pardo pilotando uma biz roxa que possui um baú de madeira na parte de trás " />
            </SuccessContainer>
        </main>
    )
}