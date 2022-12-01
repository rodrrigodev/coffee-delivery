import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react"
import { Background, CoffeeCard, CoffeeDescription, CoffeesContainer, IconDescriptions, CoffeeCardContainer, PriceAndAmount, PlusOrMinus } from "./styles"
import coffeeDelivery from "../../assets/coffeeDelivery.png"
import expressTrad from "../../assets/expressTrad.png"

export function Home() {
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

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                    <CoffeeCard>
                        <div>
                            <img src={expressTrad} alt="" />
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
                                    <input type="number" name="" id="" placeholder="0" />
                                    <button>
                                        <Plus size={22} />
                                    </button>
                                </PlusOrMinus>
                                <span>
                                    <ShoppingCart size={22} weight="fill" />
                                </span>
                            </div>
                        </PriceAndAmount>
                    </CoffeeCard>

                </CoffeeCardContainer>

            </CoffeesContainer>

        </main>
    )
}