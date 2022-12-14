import { differenceInSeconds, formatDistanceToNow, intervalToDuration } from "date-fns"
import { createContext, ReactNode, useState, useEffect } from "react"

const coffeesAvailable = [
    { id: "traditionalEspresso", name: "Expresso", type: ["Tradicional"], description: "O tradicional café feito com água quente e grãos moídos", quantity: 1, price: 9.90 },
    { id: "americanExpress", name: "Expresso Americano", type: ["Tradicional"], description: "Expresso diluído, menos intenso que o tradicional", quantity: 1, price: 9.90 },
    { id: "creamyEspresso", name: "Expresso Cremoso", type: ["Tradicional"], description: "Café expresso tradicional com espuma cremosa", quantity: 1, price: 9.90 },
    { id: "icedEspresso", name: "Expresso Gelado", type: ["Tradicional", "Gelado"], description: "Bebida preparada com café expresso e cubos de gelo", quantity: 1, price: 10.85 },
    { id: "coffeeMilk", name: "Café com Leite", type: ["Tradicional", "Com leite"], description: "Meio a meio de expresso tradicional com leite vaporizado", quantity: 1, price: 11.90 },
    { id: "latte", name: "Latte", type: ["Tradicional", "Com leite"], description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", quantity: 1, price: 11.90 },
    { id: "capuccino", name: "Capuccino", type: ["Tradicional", "Com leite"], description: "Bebida com canela feita de doses iguais de café, leite e espuma", quantity: 1, price: 11.90 },
    { id: "macchiato", name: "Macchiato", type: ["Tradicional", "Com leite"], description: "Café expresso misturado com um pouco de leite quente e espuma", quantity: 1, price: 11.90 },
    { id: "mocaccino", name: "Mocaccino", type: ["Tradicional", "Com leite"], description: "Café expresso com calda de chocolate, pouco leite e espuma", quantity: 1, price: 11.90 },
    { id: "hotChocolate", name: "Chocolate Quente", type: ["Especial", "Com leite"], description: "Bebida feita com chocolate dissolvido no leite quente e café", quantity: 1, price: 15.00 },
    { id: "cuban", name: "Cubano", type: ["Especial", "Alcoólico", "Gelado"], description: "Drink gelado de café expresso com rum, creme de leite e hortelã", quantity: 1, price: 15.90 },
    { id: "hawaiian", name: "Havaiano", type: ["Especial"], description: "Bebida adocicada preparada com café e leite de coco", quantity: 1, price: 14.80 },
    { id: "arabic", name: "Árabe", type: ["Especial"], description: "Bebida preparada com grãos de café árabe e especiarias", quantity: 1, price: 14.80 },
    { id: "irish", name: "Irlandês", type: ["Especial", "Alcoólico"], description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", quantity: 1, price: 15.00 },
]

interface CoffeesCart {
    id: string,
    quantity: number,
    name: string,
    price: number
}[]

type coffeesToBuyType = {
    id: string;
    name: string;
    type: string[];
    description: string;
    quantity: number;
    price: number
}[]

type handleIncreaseAndDescrease = (id: string, type: string) => void

type PaymentMethod = "creditCard" | "debitCard" | "money" | null

interface AddressFormat{
    complement?: string | undefined,
    number: number,
    paymentMethod: string,
    zipCode: number,
    street: string,
    district: string,
    city: string,
    uf: string,
    time: number
}
interface CoffeesCartContextType {
    coffeesToBuy: coffeesToBuyType,
    totalCoffees: number,
    coffeesCart: CoffeesCart[],
    totalCoffeesPrice: number,
    paymentMethod: PaymentMethod,
    handleDecreaseOne: handleIncreaseAndDescrease,
    handleIncreaseOne: handleIncreaseAndDescrease,
    message: false | true | null,
    address: AddressFormat | undefined,
    handleAddToCart: (id: string, name: string) => void,
    handlePaymentMethod: (value: PaymentMethod)=> void,
    handleRemoveFromCart: (id: string)=> void,
    handleNewAddress: (address: AddressFormat)=> void
}

export const CoffeesCartContext = createContext({} as CoffeesCartContextType)

interface CoffeesCartContextProviderProps {
    children: ReactNode
}

export function CoffeesCartContextProvider({ children }: CoffeesCartContextProviderProps) {


    const [coffeesToBuy, setCoffeesToBuy] = useState(coffeesAvailable)

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null)

    const cartIsEmpty = localStorage.getItem("@coffee-delivery:coffees-cart-1.0.0")
    const [coffeesCart, setCoffeesCart] = useState<CoffeesCart[]>(cartIsEmpty ? JSON.parse(cartIsEmpty): [])

    const [totalCoffees, setTotalCoffees] = useState(0)

    const [totalCoffeesPrice, setTotalCoffeesPrice] = useState(0)

    const [message, setMessage] = useState<true | false | null>(null)

    const [address, setAddress] = useState<AddressFormat | undefined>(undefined)

    function handleIncreaseOne(id: string, type: string) {

        type === "cart" ?
            setCoffeesCart(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity < 20) {
                    return { ...coffee, quantity: coffee.quantity + 1 }
                } else { return coffee }
            }))
            :
            setCoffeesToBuy(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity < 20) {
                    return { ...coffee, quantity: coffee.quantity + 1 }
                } else { return coffee }
            }))
    }

    function handleDecreaseOne(id: string, type: string) {

        type === "cart" ?
            setCoffeesCart(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity > 1) {
                    return { ...coffee, quantity: coffee.quantity - 1 }
                } else { return coffee }
            }))
            :
            setCoffeesToBuy(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity > 1) {
                    return { ...coffee, quantity: coffee.quantity - 1 }
                } else { return coffee }
            }))
    }

    function handleAddToCart(id: string, name: string) {
        if(address){
            setAddress(undefined)
            setPaymentMethod(null)
        }
        const findCoffee = coffeesToBuy.find(coffee => coffee.id === id)
        const coffeeExistsInCart = coffeesCart.find(coffee => coffee.id === id)


        if (findCoffee && !coffeeExistsInCart) {
            message !== null ? setMessage(null) : false
            setMessage(true)
            setCoffeesCart(state => [...state, { id, quantity: findCoffee.quantity, name, price: findCoffee.price }])
            setCoffeesToBuy(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity > 1) {
                    return { ...coffee, quantity: 1 }
                } else { return coffee }
            }))
        } else {
            message !== null ? setMessage(null) : false
            setCoffeesCart(state => state.map((coffee) => {
                if (coffee.id === id && findCoffee && coffeeExistsInCart) {
                    setMessage(coffee.quantity + findCoffee.quantity <= 20 ? true : false)
                    return { ...coffee, quantity: coffee.quantity + findCoffee.quantity <= 20 ? coffee.quantity + findCoffee.quantity : 20 }
                } else { return coffee }
            }))

            setCoffeesToBuy(state => state.map((coffee) => {
                if (coffee.id === id && coffee.quantity > 1) {
                    return { ...coffee, quantity: 1 }
                } else { return coffee }
            }))
        }

    }

    function handleRemoveFromCart(id: string){
        const findCoffee = coffeesCart.find(coffee => coffee.id === id)
        const removeCoffee = findCoffee ? coffeesCart.filter((coffee) => {return coffee.id !== findCoffee.id }) : coffeesCart
        setCoffeesCart(removeCoffee)
        if(removeCoffee.length === 0){
            setPaymentMethod(null)
        }
    }

    function handlePaymentMethod(method: PaymentMethod){
        if(paymentMethod !== method){
            console.log(paymentMethod)
            setPaymentMethod(method)
        }
    }

    useEffect(()=>{
        let intervalMessage: number
        if(message !== null){
            const date = new Date()
            intervalMessage = setInterval(()=> {
                const secondsDifference = differenceInSeconds(
                    new Date(),
                    date,
                )

                if(secondsDifference >=4 && message !== null){
                    clearInterval(intervalMessage)
                    setMessage(null)
                }
            }, 1000)
    
            if(message === null){
                clearInterval(intervalMessage)
            }
        }

        if(address){
            setCoffeesCart([])
        }
    }, [message, address])
    
    useEffect(() => {
        if (coffeesCart.length > 0) {
            const allQuantity = coffeesCart.map((elements) => { return elements.quantity }).reduce((total, currentValue) => total + currentValue)
            const priceCalc= coffeesCart.map((element) => { return element.price*element.quantity}).reduce((total, currentValue) => total + currentValue)
            const priceFinal = Number(priceCalc.toFixed(2))

            setTotalCoffees(allQuantity)
            setTotalCoffeesPrice(priceFinal)
        }

        if(coffeesCart.length === 0 && totalCoffees && totalCoffees){
            setTotalCoffees(0)
            setTotalCoffeesPrice(0)
        }

        const coffeesCartJSON = JSON.stringify(coffeesCart)
        localStorage.setItem("@coffee-delivery:coffees-cart-1.0.0", coffeesCartJSON)
    }, [coffeesCart, totalCoffeesPrice, totalCoffees, message])

    function handleNewAddress(address:AddressFormat){
        setAddress(address)
    }

    return (
        <CoffeesCartContext.Provider value={{ handleNewAddress, address, coffeesToBuy, message, paymentMethod, handlePaymentMethod, handleRemoveFromCart, totalCoffeesPrice, coffeesCart, handleAddToCart, handleDecreaseOne, handleIncreaseOne, totalCoffees }}>
            {children}
        </CoffeesCartContext.Provider>
    )

}