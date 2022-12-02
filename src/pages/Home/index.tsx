import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react"
import { Background, CoffeeCard, CoffeeDescription, CoffeesContainer, IconDescriptions,
         CoffeeCardContainer, PriceAndAmount, PlusOrMinus } from "./styles"
import coffeeDelivery from "../../assets/coffeeDelivery.png"
import { Link } from "react-router-dom"

export function Home() {

    type Coffee = {
        id: string,
        name: string,
        type: string[],
        description: string,
        image: string
    }[]

    const coffeesAvailable: Coffee = [
        {id: "traditionalEspresso", name: "Expresso", type: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos"},
        {id: "americanExpress", name: "Expresso Americano", type: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional"},
        {id: "creamyEspresso", name: "Expresso Cremoso", type: ["Tradicional"], description: "Café expresso tradicional com espuma cremosa"},
        {id: "icedEspresso", name: "Expresso Gelado", type: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo"},
        {id: "coffeeMilk", name: "Café com Leite", type: ["Tradicional", "Com leite"], description: "Meio a meio de expresso tradicional com leite vaporizado"},
        {id: "latte", name: "Latte", type: ["Tradicional", "Com leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosa"},
        {id: "capuccino", name: "Capuccino", type: ["Tradicional", "Com leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma"},
        {id: "macchiato", name: "Macchiato", type: ["Tradicional", "Com leite"], description: "Café expresso misturado com um pouco de leite quente e espuma"},
        {id: "mocaccino", name: "Mocaccino", type: ["Tradicional", "Com leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma"},
        {id: "hotChocolate", name: "Chocolate Quente", type: ["Especial", "Com leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café"},
        {id: "cuban", name: "Cubano", type: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã"},
        {id: "hawaiian", name: "Havaiano", type: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco"},
        {id: "arabic", name: "Árabe", type: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias"},
        {id: "irish", name: "Irlandês", type: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly"}
    ]

    return (
        <main>

            <Background>

                <CoffeeDescription>
                    <section>
                        <div>
                            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </div>

                        <IconDescriptions>
                            <div>
                                <span>
                                    <ShoppingCart size={22} id="ShoppingCart" />
                                    Compra simples e segura
                                </span>

                                <span>
                                    <Timer size={22} id="Timer" />
                                    Entrega rápida e rastreada
                                </span>
                            </div>

                            <div>
                                <span>
                                    <Package size={22} id="Package" />
                                    Embalagem mantém o café intacto
                                </span>

                                <span>
                                    <Coffee size={22} id="Coffee" />
                                    O café chega fresquinho até você
                                </span>
                            </div>
                        </IconDescriptions>

                    </section>

                    <div>
                        <img src={coffeeDelivery} alt="" />
                    </div>
                </CoffeeDescription>

            </Background>

            <CoffeesContainer>

                <h2>Nossos cafés</h2>

                <CoffeeCardContainer>

                    {coffeesAvailable.map((coffee)=>{
                        
                        return(
                            <CoffeeCard key={coffee.id}>
                        <div>
                            <img src={} alt="" />
                        </div>
                        <div>
                            <span>Tradicional</span>
                            <span>Tradicional</span>
                        </div>

                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>

                        <PriceAndAmount>
                            <span>9,90</span>
                            <div>
                                <PlusOrMinus>
                                    <button>
                                        <Minus size={22} />
                                    </button>
                                    <input type="number" name="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <Link to="/checkout">
                                    <ShoppingCart size={22} weight="fill" />
                                </Link>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>
                        )

                    })}

                    

                </CoffeeCardContainer>

            </CoffeesContainer>

        </main>
    )
}