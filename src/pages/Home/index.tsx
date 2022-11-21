import {
    CoffeeCard, CoffeeDescriptionContainer, Coffees, ContainerDescriptionOne,
    ContainerDescriptionTwo, IconDescriptionContainer,
    ImageBackground
} from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import coffeeDelivery from "../../assets/coffeeDelivery.png"
import expressTrad from "../../assets/expressTrad.png"

export function Home() {
    return (
        <main>

            <ImageBackground>
                <section>

                    <CoffeeDescriptionContainer>
                        <ContainerDescriptionOne>
                            <h1>Encontre o café perfeito<br />para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a<br />qualquer hora</p>
                        </ContainerDescriptionOne>

                        <ContainerDescriptionTwo>
                            <div>

                                <IconDescriptionContainer>
                                    <span>
                                        <ShoppingCart size={24} id="ShoppingCart" weight="fill" />
                                    </span>
                                    <span>Compra simples e segura</span>
                                </IconDescriptionContainer>

                                <IconDescriptionContainer>
                                    <span>
                                        <Timer size={24} id="Timer" weight="fill" />
                                    </span>
                                    <span>Entrega rápida e rastreada</span>
                                </IconDescriptionContainer>
                            </div>

                            <div>
                                <IconDescriptionContainer>
                                    <span>
                                        <Package size={24} id="Package" weight="fill" />
                                    </span>
                                    <span>Embalagem mantém o café intacto</span>
                                </IconDescriptionContainer>

                                <IconDescriptionContainer>
                                    <span>
                                        <Coffee size={24} id="Coffee" weight="fill" />
                                    </span>
                                    <span>O café chega fresquinho até você</span>
                                </IconDescriptionContainer>
                            </div>
                        </ContainerDescriptionTwo>
                    </CoffeeDescriptionContainer>

                    <img src={coffeeDelivery} alt="" />

                </section>
            </ImageBackground>

            <Coffees>

                <h2>Nossos cafés</h2>

                <div>

                    <CoffeeCard>
                        <img src={expressTrad} alt="" />
                        <div id="coffeeType">
                            <span>Tradicional</span>
                            <span>Gelado</span>
                        </div>
                        <h3>Expresso Tradicional</h3>
                        <p>O tradicional café feito com água quente e grãos moídos</p>

                        <div>
                            <span>R$ 9,90</span>
                            <div>
                                <div>
                                    <button>-</button>
                                    <input type="number" name="" id="" />
                                    <button>+</button>
                                </div>
                                <span>
                                    <ShoppingCart size={24} />
                                </span>
                            </div>
                        </div>
                    </CoffeeCard>


                </div>

            </Coffees>

        </main >
    )
}