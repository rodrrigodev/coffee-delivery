import { createContext, ReactNode, useState, useEffect } from "react"

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
    amount: number,
    name: string
}[]

type coffeesToBuyType = {
    id: string;
    name: string;
    type: string[];
    description: string;
    quantity: number;
}[]

interface CoffeesCartContextType {
    coffeesToBuy: coffeesToBuyType,
    handleIncreaseOne: (id: string) => void,
    handleDecreaseOne: (id: string) => void,
    handleAddToCart: (id: string, name: string) => void,
    totalCoffees: number,
    coffeesCart: CoffeesCart[]

}

export const CoffeesCartContext = createContext({} as CoffeesCartContextType)

interface CoffeesCartContextProviderProps{
    children: ReactNode
}

export function CoffeesCartContextProvider({children}: CoffeesCartContextProviderProps){


const [ coffeesToBuy, setCoffeesToBuy ] = useState(coffeesAvailable)

const [ coffeesCart, setCoffeesCart ] = useState<CoffeesCart[]>([])

const [ totalCoffees, setTotalCoffees ] = useState(0) 

    function handleIncreaseOne(id: string){
        setCoffeesToBuy(state=> state.map((coffee)=> {
            if(coffee.id === id && coffee.quantity < 20){
                return {...coffee, quantity: coffee.quantity + 1}
            }else{return coffee}
            }))
    }

    function handleDecreaseOne(id: string){
        setCoffeesToBuy(state=> state.map((coffee)=> {
            if(coffee.id === id && coffee.quantity > 1){
                return {...coffee, quantity: coffee.quantity - 1}
            }else{return coffee}
            }))
    }

    function handleAddToCart(id: string, name: string){

        const findCoffee = coffeesToBuy.find(coffee=> coffee.id === id)

        const coffeeExistsInCart = coffeesCart.find(coffee=> coffee.id === id)
        
        if(findCoffee && !coffeeExistsInCart){
            setCoffeesCart(state=> [...state, {id, amount: findCoffee.quantity, name}])
            setCoffeesToBuy(state=> state.map((coffee)=> {
                if(coffee.id === id && coffee.quantity > 1){
                    return {...coffee, quantity: 1}
                }else{return coffee}
                }))
        }else{
            setCoffeesCart(state=> state.map((coffee)=> {
                if(coffee.id === id && findCoffee && coffeeExistsInCart){
                    return {...coffee, amount: coffee.amount + findCoffee.quantity <=20 ? coffee.amount + findCoffee.quantity : 20}
                }else{return coffee}
                }))

                setCoffeesToBuy(state=> state.map((coffee)=> {
                    if(coffee.id === id && coffee.quantity > 1){
                        return {...coffee, quantity: 1}
                    }else{return coffee}
                    }))
    
        }
        }

        useEffect(()=>{
            if(coffeesCart.length > 0){
                const allAmout = coffeesCart.map((elements)=> {return elements.amount})
                const total = allAmout.reduce((total, currentValue)=> total + currentValue)
                setTotalCoffees(total)
            }
         }, [coffeesCart])

    return(
        <CoffeesCartContext.Provider value={{coffeesToBuy, coffeesCart, handleAddToCart, handleDecreaseOne, handleIncreaseOne, totalCoffees}}>
            {children}
        </CoffeesCartContext.Provider>
    )

}