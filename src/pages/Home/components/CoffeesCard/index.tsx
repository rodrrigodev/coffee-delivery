import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { CoffeeCard, CoffeeCardContainer, CoffeesContainer, PlusOrMinus, PriceAndAmount } from "./styles"

const coffeesAvailable = [
    { id: "traditionalEspresso", name: "Expresso", type: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos" },
    { id: "americanExpress", name: "Expresso Americano", type: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional" },
    { id: "creamyEspresso", name: "Expresso Cremoso", type: ["Tradicional"], description: "Café expresso tradicional com espuma cremosa" },
    { id: "icedEspresso", name: "Expresso Gelado", type: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo" },
    { id: "coffeeMilk", name: "Café com Leite", type: ["Tradicional", "Com leite"], description: "Meio a meio de expresso tradicional com leite vaporizado" },
    { id: "latte", name: "Latte", type: ["Tradicional", "Com leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosa" },
    { id: "capuccino", name: "Capuccino", type: ["Tradicional", "Com leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma" },
    { id: "macchiato", name: "Macchiato", type: ["Tradicional", "Com leite"], description: "Café expresso misturado com um pouco de leite quente e espuma" },
    { id: "mocaccino", name: "Mocaccino", type: ["Tradicional", "Com leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma" },
    { id: "hotChocolate", name: "Chocolate Quente", type: ["Especial", "Com leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café" },
    { id: "cuban", name: "Cubano", type: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã" },
    { id: "hawaiian", name: "Havaiano", type: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco" },
    { id: "arabic", name: "Árabe", type: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias" },
    { id: "irish", name: "Irlandês", type: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly" },
]

export function CoffeesCard(){
    return(
        <CoffeesContainer>

                <h2>Nossos cafés</h2>

                <CoffeeCardContainer>

                    {coffeesAvailable.map((coffee) => {

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
                                            <button>
                                                <Minus size={22} />
                                            </button>
                                            <input name={coffee.id} type="number" placeholder="0" defaultValue={1} />
                                            <button>
                                                <Plus size={22} />
                                            </button>
                                        </PlusOrMinus>
                                        <button type="button">
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