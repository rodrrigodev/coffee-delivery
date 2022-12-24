import { useContext } from "react";
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext";
import { DeliveryAddress } from "./componentes/DeliveryAddress";
import { PaymentMethod } from "./componentes/PaymentMethod";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { TypeOf } from "zod/lib";
import { FormProvider, useForm } from "react-hook-form";

const schemaValidation = zod.object({
    zipCode: zod.number(),
    street: zod.string().min(4).max(40),
    number: zod.number(),
    complement: zod.string().optional(),
    district: zod.string().min(4).max(30),
    uf: zod.string().min(2).max(2)
})

type onSubmitFormData = zod.infer<typeof schemaValidation>

export function Checkout() {
    const { coffeesCart, totalCoffees } = useContext(CoffeesCartContext)
    const newAddress = useForm<onSubmitFormData>({
        resolver: zodResolver(schemaValidation),
        defaultValues:{
            complement:""
        }

    }
    )

    const { handleSubmit, watch, reset, formState: {errors} } = newAddress
    console.log(errors)

    function handleCreateNewAddress(data: any) {
        console.log(data)
        console.log(4)
    }

    return (
        <main>
            <form onSubmit={handleSubmit(handleCreateNewAddress)}>

                <CheckoutContainer>

                    <div>
                        <h2>Complete seu pedido</h2>

                        <FormProvider {...newAddress}>
                            <DeliveryAddress />
                        </FormProvider>

                        <PaymentMethod />

                    </div>

                    <div>

                        <h2>{totalCoffees ? "Cafés selecionados" : "Carrinho vazio"}</h2>

                        <SelectedCoffees />


                    </div>

                </CheckoutContainer>

            </form>
        </main>
    )
}