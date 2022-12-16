import { PlusOrMinus } from "../../../Home/components/CoffeesCard/styles"
import { ButtonAndTitleContainer, CoffeeOrderContainer, CoffeePrice, ConfirmOrder, FinalPrice, PriceItensTotalContainer } from "./styles"
import expressTra from "../../../../assets/expressTrad.png"
import { Minus, Plus, Trash } from "phosphor-react"

export function SelectedCoffees(){
    return(
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
    )
}