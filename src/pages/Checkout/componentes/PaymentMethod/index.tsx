import { Bank, CreditCard, CurrencyDollar, Money, } from "phosphor-react";
import { BackgroundCardCollor } from "../../styles";
import { PaymentTitleContainer, PaymentType } from "./styles";
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { useContext } from "react";


export function PaymentMethod(){
    const { handlePaymentMethod, paymentMethod, totalCoffees } = useContext(CoffeesCartContext)
    const creditCard = paymentMethod === "creditCard" && totalCoffees > 0 ? "active" : "null"
    const debitCard = paymentMethod === "debitCard" && totalCoffees > 0 ? "active" : "null"
    const money = paymentMethod === "money" && totalCoffees > 0  ? "active" : "null"
console.log(creditCard)
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

            <div onClick={()=>{handlePaymentMethod("creditCard")}} id={creditCard}>
                <span>
                    <CreditCard size={22} id="CreditCard" />
                    Cartão de crédito
                </span>
            </div>

            <div onClick={()=>{handlePaymentMethod("debitCard")}} id={debitCard}>
                <span>
                    <Bank size={22} id="Bank" />
                    Cartão de débito
                </span>
            </div>

            <div onClick={()=>{handlePaymentMethod("money")}} id={money}>
                <span>
                    <Money size={22} id="Money" />
                    Dinheiro
                </span>
            </div>
        </PaymentType>
    </BackgroundCardCollor>
    )
}