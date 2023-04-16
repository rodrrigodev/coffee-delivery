import { ArrowCircleUp } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeesCartContext } from '../../../../contexts/CoffeesCartContext'
import { scrollToTop } from '../../../../utils/scroolToTop'
import { CoffeeCardContainer, CoffeesContainer, ButtonToTop } from './styles'
import { CoffeeCard } from '../CoffeeCard/'

export function CoffeesCard() {
  const { coffeesAvailable } = useContext(CoffeesCartContext)

  return (
    <CoffeesContainer>
      <h2>Nossos cafés</h2>

      <CoffeeCardContainer>
        {coffeesAvailable.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              description={coffee.description}
              name={coffee.name}
              price={coffee.price}
              type={coffee.type}
              id={coffee.id}
            />
          )
        })}
      </CoffeeCardContainer>

      <ButtonToTop onClick={scrollToTop}>
        <ArrowCircleUp size={34} />
      </ButtonToTop>
    </CoffeesContainer>
  )
}
