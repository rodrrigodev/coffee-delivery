import { useContext, useEffect, useState } from "react";
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext";
import { DeliveryAddress } from "./componentes/DeliveryAddress";
import { PaymentMethod } from "./componentes/PaymentMethod";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CheckoutContainer, ErrorText } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";

const schemaValidation = zod.object({
    zipCode: zod.number({ invalid_type_error: "Somente números são aceitos no CEP." }).refine((value) => value.toLocaleString().length !== 8, { message: "Deve conter no minimo 8 números." }),
    street: zod.string().min(4, { message: "O nome da rua deve conter no mínimo 4 caracteres." }).max(40, { message: "O nome da rua não pode ultrapassar 40 caracteres" }),
    number: zod.number({ invalid_type_error: "Somente números são aceitos na numeração da casa." }),
    complement: zod.string().optional(),
    district: zod.string().min(4, { message: "O nome do bairro deve conter no mínimo 4 caracteres." }).max(30, { message: "O nome do bairro deve conter no máximo 30 caracteres." }),
    city: zod.string().min(4, { message: "O nome da cidade deve conter no mínimo 4 caracteres." }).max(25, { message: "O nome da cidade deve conter no máximo 25 caracteres." }),
    uf: zod.string().min(2, { message: "O nome da UF deve conter no mínimo 2 caracteres." }).max(2, { message: "O nome da UF deve conter no máximo 2 caracteres." })
})

type onSubmitFormData = zod.infer<typeof schemaValidation>

export function Checkout() {
    const { coffeesCart, totalCoffees } = useContext(CoffeesCartContext)

    const newAddress = useForm<onSubmitFormData>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            complement: ""
        }

    }
    )

    const { handleSubmit, formState: { errors } } = newAddress

    function handleCreateNewAddress(data: any) {
        console.log(data)

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

                        {errors.zipCode && (
                            <p>{errors.zipCode.message}</p>
                        )}

                         {errors.city && (
                            <p>{errors.city.message}</p>
                        )}
                    </div>

                </CheckoutContainer>
                        

                        

            </form>

        </main>
    )
}