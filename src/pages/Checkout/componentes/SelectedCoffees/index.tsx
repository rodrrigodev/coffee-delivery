import { PlusOrMinus } from "../../../Home/components/CoffeesCard/styles"
import { ButtonAndTitleContainer, CoffeeOrderContainer, CoffeePrice, ConfirmOrder, EmptyCartContainer, FinalPrice, PriceItensTotalContainer } from "./styles"
import { HouseLine, Minus, Plus, Trash } from "phosphor-react"
import { useContext } from "react"
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { formatPrice } from "../../../../utils/deliveryPrice"
import { Link } from "react-router-dom"

export function SelectedCoffees() {
    const { coffeesCart, totalCoffees, handleIncreaseOne, handleDecreaseOne, totalCoffeesPrice, handleRemoveFromCart} = useContext(CoffeesCartContext)

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
                                            disabled={coffee.quantity === 20 ? true : false}
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </PlusOrMinus>

                                    <span onClick={()=> handleRemoveFromCart(coffee.id)}>
                                        <Trash
                                            size={18}
                                            id="Trash"
                                        />
                                        Remover
                                    </span>
                                </div>
                            </ButtonAndTitleContainer>
                            <CoffeePrice>R$ {formatPrice(coffee.price)}</CoffeePrice>
                        </CoffeeOrderContainer>
                    )
                })

                : ""}

            {totalCoffees ?

                <PriceItensTotalContainer>
                    <div>
                        <span>Total de itens</span>
                        <span>R$ {formatPrice(totalCoffeesPrice)}</span>
                    </div>

                    <div>
                        <span>Entrega</span>
                        <span>R$ {formatPrice(totalCoffees*1.50)}</span>
                    </div>

                    <div>
                        <FinalPrice>Total</FinalPrice>
                        <FinalPrice>R$ {formatPrice((totalCoffees*1.50) + totalCoffeesPrice)}</FinalPrice>
                    </div>

                    <button type="submit">Confirmar pedido</button>
                </PriceItensTotalContainer> :

                <EmptyCartContainer>
                    <p>Parece que seu carrinho está um pouco vazio no momento.</p>
                    <Link to="/">
                        <span>
                            <HouseLine size={22} />
                        </span>
                        Home
                    </Link>

                </EmptyCartContainer>
            }

        </ConfirmOrder>

    )
}