import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { BackgroundCardCollor } from "../../styles";
import { PaymentTitleContainer, PaymentType } from "./styles";

export function PaymentMethod(){
    return(
        <BackgroundCardCollor>
        <PaymentTitleContainer>
            <span>
                <CurrencyDollar size={22} />
            </span>
            <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
        </PaymentTitleContainer>

        <PaymentType>
            <div>
                <span>
                    <CreditCard size={22} id="CreditCard" />
                    Cartão de crédito
                </span>
            </div>

            <div>
                <span>
                    <Bank size={22} id="Bank" />
                    Cartão de débito
                </span>
            </div>

            <div>
                <span>
                    <Money size={22} id="Money" />
                    Dinheiro
                </span>
            </div>
        </PaymentType>
    </BackgroundCardCollor>
    )
}