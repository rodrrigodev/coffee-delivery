import { CoffeesCartContext } from '../../contexts/CoffeesCartContext'
import { CoffeeDeliveryDescription } from './components/CoffeeDeliveryDescription'
import { CoffeesCard } from './components/CoffeesAvailable'
import { useContext, useEffect } from 'react'

export function Home() {
  const { handleCheckout, checkout } = useContext(CoffeesCartContext)
  useEffect(() => {
    if (checkout) {
      handleCheckout(null)
    }
  })
  return (
    <main>
      <CoffeeDeliveryDescription />
      <CoffeesCard />
    </main>
  )
}
