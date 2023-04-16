import { createContext, ReactNode, useEffect, useState } from 'react'
import data from '../database/data.json'
import { notify } from '../utils/notify'

interface CoffeesCartProps {
  id: string
  amount: number
  price: number
}

interface coffeesAvailableProps {
  id: string
  name: string
  type: string[]
  description: string
  price: number
}

type PaymentMethod = 'creditCard' | 'debitCard' | 'money' | ''

interface CheckoutProps {
  complement?: string | undefined
  number: number
  paymentMethod: PaymentMethod
  zipCode: number
  street: string
  district: string
  city: string
  uf: string
  itens: number
}

interface CoffeesCartContextType {
  coffeesAvailable: coffeesAvailableProps[]
  coffeesCart: CoffeesCartProps[]
  handleAddCoffeeToCart: (id: string, amount: number, price: number) => void
  handleUpdateCoffeesCart: (
    id: string,
    type: 'remove' | 'plus' | 'minus',
  ) => void
  paymentMethod: PaymentMethod
  handlePaymentMethod: (method: PaymentMethod) => void
  checkout: CheckoutProps | null
  handleCheckout: (data: CheckoutProps | null) => void
}

export const CoffeesCartContext = createContext({} as CoffeesCartContextType)

interface CoffeesCartContextProviderProps {
  children: ReactNode
}

export function CoffeesCartContextProvider({
  children,
}: CoffeesCartContextProviderProps) {
  const coffeesAvailable = data
  const cartIsEmpty = localStorage.getItem(
    '@coffee-delivery:coffees-cart-1.0.1',
  )
  const [coffeesCart, setCoffeesCart] = useState<CoffeesCartProps[]>(
    cartIsEmpty ? JSON.parse(cartIsEmpty) : [],
  )
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('')
  const [checkout, setCheckout] = useState<CheckoutProps | null>(null)

  function handleAddCoffeeToCart(id: string, amount: number, price: number) {
    const coffeeExistInCart = coffeesCart.find((coffee) => {
      return coffee.id === id
    })

    if (!coffeesCart.length) {
      return setCoffeesCart([{ id, amount, price }])
    } else if (coffeesCart.length && !coffeeExistInCart) {
      return setCoffeesCart((state) => [...state, { id, amount, price }])
    } else {
      setCoffeesCart((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return {
              ...coffee,
              amount:
                coffee.amount + amount >= 20 ? 20 : coffee.amount + amount,
            }
          } else {
            return coffee
          }
        }),
      )
    }
  }

  function handleUpdateCoffeesCart(
    id: string,
    type: 'remove' | 'plus' | 'minus',
  ) {
    if (type === 'remove') {
      const coffeesCartFiltered = coffeesCart.filter((coffee) => {
        return coffee.id !== id
      })
      setCoffeesCart(coffeesCartFiltered)
      notify('deleted')
    } else if (type === 'plus') {
      setCoffeesCart((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return { ...coffee, amount: coffee.amount + 1 }
          } else {
            return coffee
          }
        }),
      )
    } else {
      setCoffeesCart((state) =>
        state.map((coffee) => {
          if (coffee.id === id) {
            return { ...coffee, amount: coffee.amount - 1 }
          } else {
            return coffee
          }
        }),
      )
    }
  }

  function handlePaymentMethod(method: PaymentMethod) {
    if (coffeesCart.length) {
      setPaymentMethod(method)
    }
  }

  function handleCheckout(data: CheckoutProps | null) {
    setCheckout(data)
    setCoffeesCart([])
    setPaymentMethod('')
  }

  useEffect(() => {
    const coffeesCartJSON = JSON.stringify(coffeesCart)
    localStorage.setItem('@coffee-delivery:coffees-cart-1.0.1', coffeesCartJSON)
  }, [coffeesCart])

  return (
    <CoffeesCartContext.Provider
      value={{
        coffeesAvailable,
        coffeesCart,
        handleAddCoffeeToCart,
        handleUpdateCoffeesCart,
        handlePaymentMethod,
        paymentMethod,
        checkout,
        handleCheckout,
      }}
    >
      {children}
    </CoffeesCartContext.Provider>
  )
}
