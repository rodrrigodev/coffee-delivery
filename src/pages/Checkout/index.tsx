import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";

export function Checkout() {
    return (
        <main>
            <section>
                <h2>Complete o seu pedido</h2>


                <div>
                    <div>
                        <span>
                            <MapPinLine size={24} />
                        </span>
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>

                        </div>
                    </div>

                    <form action="">
                        <input type="number" name="" id="" placeholder="CEP" />
                        <input type="text" name="" id="" placeholder="Rua" />
                        <div>
                            <div>
                                <input type="number" name="" id="" placeholder="Número" />
                                <input type="text" name="" id="" placeholder="Complemento" />
                            </div>

                            <div>
                                <input type="text" name="" id="" placeholder="Bairro" />
                                <input type="text" name="" id="" placeholder="Cidade" />
                                <input type="text" name="" id="" placeholder="UF" />
                            </div>
                        </div>
                    </form>

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
                </div>
            </section>

            <section>
                <h2>Cafés Selecionados</h2>

                <div>

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

                </div>

            </section>
        </main>
    )
}