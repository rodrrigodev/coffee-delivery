import { PlusOrMinus } from "../../../Home/components/CoffeesCard/styles"
import { ButtonAndTitleContainer, CoffeeOrderContainer, CoffeePrice, ConfirmOrder, FinalPrice, PriceItensTotalContainer } from "./styles"
import { House, Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { Link } from "react-router-dom"

export function SelectedCoffees() {
    const { coffeesCart, totalCoffees } = useContext(CoffeesCartContext)

    return (
        <ConfirmOrder>

            {totalCoffees ?

                coffeesCart.map((coffee) => {
                    return (
                        <CoffeeOrderContainer>
                            {/* <img src={expressTra} alt="" /> */}

                            <ButtonAndTitleContainer>
                                <h3>{coffee.name}</h3>

                                <div>
                                    <PlusOrMinus>
                                        <button type="button">
                                            <Minus size={18} />
                                        </button>
                                        <input value={coffee.amount} type="number" readOnly />
                                        <button type="button">
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
                    )
                })

                : ""}

            {totalCoffees ?

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
                </PriceItensTotalContainer> :

                <div>
                    <p>Parece que seu carrinho está um pouco vazio no momento.</p>
                    <Link to="/">
                        <House size={22}/>
                        Home
                    </Link>

                </div>
            }

        </ConfirmOrder>

    )
    { if (totalCoffees) { return <h1>2</h1> } }
}