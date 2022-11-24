import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { AddressInputsContainer, CheckoutContainer, FinishedContainer, UserInfoContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <section>
                <h2>Complete o seu pedido</h2>

                <UserInfoContainer>
                    <div id="AddressTitle">
                        <span>
                            <MapPinLine size={22} />
                        </span>
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <form action="">
                        <AddressInputsContainer>
                            <input type="number" id="zipCode" placeholder="CEP" />
                            <input type="text" id="street" placeholder="Rua" />

                            <div>
                                <input type="number" id="number" placeholder="Número" />
                                <input type="text" id="complement" placeholder="Complemento" />
                                <span>Opcional</span>
                            </div>

                            <div>
                                <input type="text" id="district" placeholder="Bairro" />
                                <input type="text" id="city" placeholder="Cidade" />
                                <input type="text" id="uf" placeholder="UF" />
                            </div>

                        </AddressInputsContainer>

                        <div>
                            <div>
                                <span>
                                    <CurrencyDollar size={24} />
                                </span>
                                <div>
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                                </div>
                            </div>

                            <div>
                                <div>
                                    <span>
                                        <CreditCard size={24} />
                                    </span>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Cartão de crédito</label>
                                </div>

                                <div>
                                    <span>
                                        <Bank size={24} />
                                    </span>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Cartão de Débito</label>
                                </div>

                                <div>
                                    <span>
                                        <Money size={24} />
                                    </span>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Dinheiro</label>
                                </div>

                            </div>
                        </div>
                    </form>
                </UserInfoContainer>
            </section>

            <section>
                <h2>Cafés Selecionados</h2>

                <FinishedContainer>

                    <div>
                        <img src="" alt="" />

                        <div>
                            <span>Expresso Tradicional</span>
                            <div>
                                <div>
                                    <button>
                                        <Minus size={14} />
                                    </button>
                                    <input type="number" placeholder="0" />
                                    <button>
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <span>
                                    <Trash size={14} />
                                    Remover
                                </span>
                            </div>
                        </div>

                        <span>R$ 10,00</span>
                    </div>

                    <div>

                        <div>
                            <span>Total de itens</span>
                            <span>R$ 28,00</span>
                        </div>

                        <div>
                            <span>Entrega</span>
                            <span>R$ 3,00</span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>R$ 45,00</span>
                        </div>
                    </div>

                    <button type="submit">Confirmar Pedido</button>

                </FinishedContainer>

            </section>
        </CheckoutContainer>
    )
}