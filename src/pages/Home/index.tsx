import { CoffeeDeliveryDescription } from "./components/CoffeeDeliveryDescription"
import { CoffeesCard } from "./components/CoffeesCard"

export function Home() {

    function z(data: any) {
        console.log(data)
    }

    return (
        <main>

        <CoffeeDeliveryDescription/>
        <CoffeesCard/>

        </main>
    )
}