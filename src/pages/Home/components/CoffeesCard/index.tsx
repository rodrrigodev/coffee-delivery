import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useState } from "react"
import { CoffeeCard, CoffeeCardContainer, CoffeesContainer, PlusOrMinus, PriceAndAmount } from "./styles"

const coffeesAvailable = [
    { id: "traditionalEspresso", name: "Expresso", type: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos", quantity: 1 },
    { id: "americanExpress", name: "Expresso Americano", type: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional", quantity: 1 },
    { id: "creamyEspresso", name: "Expresso Cremoso", type: ["Tradicional"], description: "Café expresso tradicional com espuma cremosa", quantity: 1 },
    { id: "icedEspresso", name: "Expresso Gelado", type: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo", quantity: 1 },
    { id: "coffeeMilk", name: "Café com Leite", type: ["Tradicional", "Com leite"], description: "Meio a meio de expresso tradicional com leite vaporizado", quantity: 1 },
    { id: "latte", name: "Latte", type: ["Tradicional", "Com leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", quantity: 1 },
    { id: "capuccino", name: "Capuccino", type: ["Tradicional", "Com leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma", quantity: 1 },
    { id: "macchiato", name: "Macchiato", type: ["Tradicional", "Com leite"], description: "Café expresso misturado com um pouco de leite quente e espuma", quantity: 1 },
    { id: "mocaccino", name: "Mocaccino", type: ["Tradicional", "Com leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma", quantity: 1 },
    { id: "hotChocolate", name: "Chocolate Quente", type: ["Especial", "Com leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café", quantity: 1 },
    { id: "cuban", name: "Cubano", type: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã", quantity: 1 },
    { id: "hawaiian", name: "Havaiano", type: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco", quantity: 1 },
    { id: "arabic", name: "Árabe", type: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias", quantity: 1 },
    { id: "irish", name: "Irlandês", type: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", quantity: 1 },
]

interface CoffeesCart{
    id: string,
    amount: number
}[]

export function CoffeesCard(){
    
    const [ coffeesToBuy, setCoffeesToBuy ] = useState(coffeesAvailable)

    const [ coffeesCart, setCoffeesCart ] = useState<CoffeesCart[]>([])

    function handleIncreaseOne(coffeeId: string){
        setCoffeesToBuy(state=> state.map((coffee)=> {
            if(coffee.id === coffeeId && coffee.quantity < 20){
                return {...coffee, quantity: coffee.quantity + 1}
            }else{return coffee}
            }))
    }

    function handleDecreaseOne(coffeeId: string){
        setCoffeesToBuy(state=> state.map((coffee)=> {
            if(coffee.id === coffeeId && coffee.quantity > 1){
                return {...coffee, quantity: coffee.quantity - 1}
            }else{return coffee}
            }))
    }

    function handleAddToCart(id: string){

        const findCoffee = coffeesToBuy.find(coffee=> coffee.id === id)

        const coffeeExistsInCart = coffeesCart.find(coffee=> coffee.id === id)
        
        if(findCoffee && !coffeeExistsInCart){
            return setCoffeesCart(state=> [...state, {id, amount: findCoffee.quantity}])
        }else{

        }

        setCoffeesCart(state=> state.map((coffee)=> {
            if(coffee.id === id && findCoffee && coffeeExistsInCart){
                return {...coffee, amount: coffee.amount + findCoffee.quantity <=20 ? coffee.amount + findCoffee.quantity : 20}
            }else{return coffee}
            }))

    }

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
                                    <span>9,90</span>
                                    <div>
                                        <PlusOrMinus>
                                            <button
                                            disabled={coffee.quantity === 1 ? true : false}
                                            onClick={()=> handleDecreaseOne(coffee.id)}
                                            >
                                                <Minus size={22} />
                                            </button>
                                            
                                            <input name={coffee.id}
                                            type="number"
                                            value={coffee.quantity}
                                            max={20}
                                            readOnly
                                            />

                                            <button onClick={()=>handleIncreaseOne(coffee.id)}>
                                                <Plus size={22} />
                                            </button>
                                        </PlusOrMinus>
                                        <button type="button" onClick={()=> handleAddToCart(coffee.id)}>
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