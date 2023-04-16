import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Background, CoffeeDescription, IconDescriptions } from './styles'
import coffeeDelivery from '../../../../assets/coffeeDelivery.png'

export function CoffeeDeliveryDescription() {
  return (
    <Background>
      <CoffeeDescription>
        <section>
          <div>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
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
                <Coffee size={22} id="Coffee" />O café chega fresquinho até você
              </span>
            </div>
          </IconDescriptions>
        </section>

        <div>
          <img src={coffeeDelivery} alt="" />
        </div>
      </CoffeeDescription>
    </Background>
  )
}
