import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { CoffeesCartContext } from "../../../../contexts/CoffeesCartContext"
import { formatPrice } from "../../../../utils/deliveryPrice"
import { CoffeeCard, CoffeeCardContainer, CoffeesContainer, PlusOrMinus, PriceAndAmount } from "./styles"

export function CoffeesCard(){

    const { coffeesToBuy, handleIncreaseOne, handleDecreaseOne, handleAddToCart } = useContext(CoffeesCartContext)

    return(
        <CoffeesContainer>

                <h2>Nossos cafés</h2>

                <CoffeeCardContainer>

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
                                    <span>{ formatPrice(coffee.price)}</span>
                                    <div>
                                        <PlusOrMinus>
                                            <button
                                            disabled={coffee.quantity === 1 ? true : false}
                                            onClick={()=> handleDecreaseOne(coffee.id, "home")}
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
                                            onClick={()=>handleIncreaseOne(coffee.id, "home")}
                                            disabled={coffee.quantity === 20 ? true : false}
                                            >
                                                <Plus size={22} />
                                            </button>
                                        </PlusOrMinus>
                                        <button type="button" onClick={()=> handleAddToCart(coffee.id, coffee.name)}>
                                            <ShoppingCart size={22} weight="fill" />
                                        </button>
                                    </div>
                                </PriceAndAmount>
                            </CoffeeCard>
                        )

                    })}

                </CoffeeCardContainer>

            </CoffeesContainer>
    )
}