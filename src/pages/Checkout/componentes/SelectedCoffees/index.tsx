import { PlusOrMinus } from "../../../Home/components/CoffeesCard/styles"
import { ButtonAndTitleContainer, CoffeeOrderContainer, CoffeePrice, ConfirmOrder, FinalPrice, PriceItensTotalContainer } from "./styles"
import { HouseLine, HouseSimple, Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { Link } from "react-router-dom"

export function SelectedCoffees() {
    const { coffeesCart, totalCoffees, handleIncreaseOne, handleDecreaseOne } = useContext(CoffeesCartContext)

    return (
        <ConfirmOrder>

            {totalCoffees ?

                coffeesCart.map((coffee) => {
                    return (
                        <CoffeeOrderContainer key={coffee.id}>
                            <img src={`https://raw.githubusercontent.com/rodrrigodev/coffee-delivery/main/src/assets/${coffee.id}.png`} alt="" />

                            <ButtonAndTitleContainer>
                                <h3>{coffee.name}</h3>

                                <div>
                                    <PlusOrMinus>
                                        <button
                                            type="button"
                                            disabled={coffee.quantity === 1 ? true : false}
                                        >
                                            <Minus
                                                size={18}
                                                onClick={() => handleDecreaseOne(coffee.id, "cart")}
                                            />
                                        </button>
                                        <input
                                            value={coffee.quantity}
                                            type="number"
                                            readOnly />
                                        <button
                                            type="button"
                                            onClick={() => handleIncreaseOne(coffee.id, "cart")}
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </PlusOrMinus>

                                    <span>
                                        <Trash
                                            size={18}
                                            id="Trash"
                                        />
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

                    <button type="submit">Confirmar pedido</button>
                </PriceItensTotalContainer> :

                <div>
                    <p>Parece que seu carrinho está um pouco vazio no momento.</p>
                    <Link to="/">
                        <span>
                            <HouseLine size={22} />
                        </span>
                        Home
                    </Link>

                </div>
            }

        </ConfirmOrder>

    )
}