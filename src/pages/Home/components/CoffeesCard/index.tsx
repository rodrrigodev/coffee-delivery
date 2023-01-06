import { ArrowCircleUp, CheckCircle, Minus, Plus, ShoppingCart, WarningCircle } from "phosphor-react"
import { useContext } from "react"
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { formatPrice } from "../../../../utils/deliveryPrice"
import { scrollToTop } from "../../../../utils/scroolToTop"
import { CoffeeCard, CoffeeCardContainer, CoffeesContainer, SuccessMessage, LimitMessage, PlusOrMinus, PriceAndAmount, ButtonToTop } from "./styles"

export function CoffeesCard() {

    const { coffeesToBuy, message, handleIncreaseOne, handleDecreaseOne, handleAddToCart, handleNewAddress } = useContext(CoffeesCartContext)
        
    return (
        <CoffeesContainer>

            <h2>Nossos cafés</h2>

            <CoffeeCardContainer>

                {message && (
                    <SuccessMessage>
                        <CheckCircle size={24} id="CheckCircle" />
                        Adicionado ao carrinho!
                    </SuccessMessage>
                )}

                {!message && message !== null && (
                    <LimitMessage>
                        <WarningCircle size={24} id="WarningCircle" />
                        Limite 20 cafés para cada opção
                    </LimitMessage>
                )}

                {coffeesToBuy.map((coffee) => {

                    return (

                        <CoffeeCard key={coffee.id}>
                            <div>
                                <img src={`https://raw.githubusercontent.com/rodrrigodev/coffee-delivery/main/src/assets/${coffee.id}.png`} alt="" />
                            </div>
                            <div>

                                {coffee.type.map((element) => {
                                    return (<span key={coffee.id + element}>{element}</span>)
                                })}

                            </div>

                            <h3>{coffee.name}</h3>
                            <p>{coffee.description}</p>

                            <PriceAndAmount>
                                <span>{formatPrice(coffee.price)}</span>
                                <div>
                                    <PlusOrMinus>
                                        <button
                                            disabled={coffee.quantity === 1 ? true : false}
                                            onClick={() => handleDecreaseOne(coffee.id, "home")}
                                        >
                                            <Minus size={22} />
                                        </button>

                                        <input name={coffee.id}
                                            type="number"
                                            value={coffee.quantity}
                                            max={20}
                                            readOnly
                                        />

                                        <button
                                            onClick={() => handleIncreaseOne(coffee.id, "home")}
                                            disabled={coffee.quantity === 20 ? true : false}
                                        >
                                            <Plus size={22} />
                                        </button>
                                    </PlusOrMinus>
                                    <button type="button" onClick={() => handleAddToCart(coffee.id, coffee.name)}>
                                        <ShoppingCart size={22} weight="fill" />
                                    </button>
                                </div>
                            </PriceAndAmount>
                        </CoffeeCard>
                    )

                })}

            </CoffeeCardContainer>

            <ButtonToTop onClick={scrollToTop}>
                <ArrowCircleUp size={34} />
            </ButtonToTop>

        </CoffeesContainer>
    )
}