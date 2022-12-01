import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import expressTra from "../../assets/expressTrad.png"
import { PlusOrMinus } from "../Home/styles";
import { AddressTitleContainer, BackgroundCardCollor,
    CheckoutContainer, ConfirmOrder, InputCity,
    InputCloplement, InputContainer, InputDivContainer,
    InputCepNumberDistrict, InputStreet, InputUf,
    PaymentTitleContainer, 
    PaymentType,
    CoffeeOrderContainer,
    ButtonAndTitleContainer,
    CoffeePrice,
    PriceItensTotalContainer,
    FinalPrice} from "./styles";

export function Checkout() {
    return (
        <main>
            <form action="">

                <CheckoutContainer>

                    <div>
                        <h2>Complete seu pedido</h2>
                        <BackgroundCardCollor>
                            <AddressTitleContainer>
                                <span>
                                    <MapPinLine size={22} />
                                </span>
                                <div>
                                    <h3>Endereço de Entrega</h3>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </div>
                            </AddressTitleContainer>

                            <InputContainer>
                                <InputCepNumberDistrict type="number" name="" id="" placeholder="CEP" />
                                <InputStreet type="text" name="" id="" placeholder="Rua" />

                                <InputDivContainer>
                                    <InputCepNumberDistrict type="number" name="" id="" placeholder="Número" />
                                    <div>
                                    <InputCloplement type="text" name="" id="" placeholder="Complemento" />
                                        <span>Opcional</span>
                                    </div>
                                </InputDivContainer>

                                <InputDivContainer>
                                    <InputCepNumberDistrict type="text" name="" id="" placeholder="Bairro" />
                                    <InputCity type="text" name="" id="" placeholder="Cidade" />
                                    <InputUf type="text" name="" id="" placeholder="UF" />
                                </InputDivContainer>

                            </InputContainer>

                        </BackgroundCardCollor>

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
                                    {/* <input type="radio" id="creditCart" name="paymentMethod" value="creditCart" /> */}
                                </div>

                                <div>
                                    <span>
                                        <Bank size={22} id="Bank" />
                                        Cartão de débito
                                    </span>
                                    {/* <input type="radio" id="debitCard" name="paymentMethod" value="debitCard" /> */}
                                </div>

                                <div>
                                    <span>
                                        <Money size={22} id="Money" />
                                        Dinheiro
                                    </span>
                                    {/* <input type="radio" id="money" name="paymentMethod" value="money" /> */}
                                </div>
                            </PaymentType>
                        </BackgroundCardCollor>

                    </div>

                    <div>

                        <h2>Cafés Selecionados</h2>

                        <ConfirmOrder>

                            <CoffeeOrderContainer>
                                <img src={expressTra} alt="" />

                                <ButtonAndTitleContainer>
                                    <h3>Expresso Tradicional</h3>

                                    <div>
                                        <PlusOrMinus>
                                            <button>
                                                <Minus size={18} />
                                            </button>
                                            <input type="number" name="" id="" placeholder="0" />
                                            <button>
                                                <Plus size={18} />
                                            </button>
                                        </PlusOrMinus>

                                        <span>
                                            <Trash size={18} id="Trash" />
                                            Remover
                                        </span>
                                    </div>
                                </ButtonAndTitleContainer>
                                <CoffeePrice>R$ 9,10</CoffeePrice>
                            </CoffeeOrderContainer>

                            <CoffeeOrderContainer>
                                <img src={expressTra} alt="" />

                                <ButtonAndTitleContainer>
                                    <h3>Expresso Tradicional</h3>

                                    <div>
                                        <PlusOrMinus>
                                            <button>
                                                <Minus size={18} />
                                            </button>
                                            <input type="number" name="" id="" placeholder="0" />
                                            <button>
                                                <Plus size={18} />
                                            </button>
                                        </PlusOrMinus>

                                        <span>
                                            <Trash size={18} id="Trash" />
                                            Remover
                                        </span>
                                    </div>
                                </ButtonAndTitleContainer>
                                <CoffeePrice>R$ 9,10</CoffeePrice>
                            </CoffeeOrderContainer>

                            <PriceItensTotalContainer>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ 9,00</span>
                            </div>

                            <div>
                                <span>Entrega</span>
                                <span>R$ 9,00</span>
                            </div>

                            <div>
                                <FinalPrice>Total</FinalPrice>
                                <FinalPrice>R$ 9,00</FinalPrice>
                            </div>

                            <button>Confirmar pedido</button>
                            </PriceItensTotalContainer>

                        </ConfirmOrder>

                    </div>

                </CheckoutContainer>

            </form>
        </main>
    )
}