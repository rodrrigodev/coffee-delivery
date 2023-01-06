import { useContext } from "react";
import { CoffeesCartContext } from "../../contexts/CoffeesCartContext";
import { DeliveryAddress } from "./componentes/DeliveryAddress";
import { PaymentMethod } from "./componentes/PaymentMethod";
import { SelectedCoffees } from "./componentes/SelectedCoffees";
import { CheckoutContainer, ErrorsContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { ButtonToTop } from "../Home/components/CoffeesCard/styles";
import { ArrowCircleUp, CreditCard } from "phosphor-react";
import { scrollToTop } from "../../utils/scroolToTop";
import { useNavigate } from "react-router-dom";

export function Checkout() {
    const { coffeesCart, totalCoffees, paymentMethod, handleNewAddress } = useContext(CoffeesCartContext)
    const paymentDefault = paymentMethod ? paymentMethod : "zero"
    const navigate = useNavigate()
    const schemaValidation = zod.object({
        zipCode: zod.number({ invalid_type_error: "Somente números são aceitos no CEP." })
        .superRefine((val, ctx)=>{ if(val.toString().length !== 8){ ctx.addIssue({code: zod.ZodIssueCode.custom,
        message: "CEP deve conter no minimo 8 números.", fatal: true}) }}),
        street: zod.string().min(4, { message: "O nome da rua deve conter no mínimo 4 caracteres." })
        .max(40, { message: "O nome da rua não pode ultrapassar 40 caracteres" }),
        number: zod.number({ invalid_type_error: "Somente números são aceitos na numeração da casa." }),
        complement: zod.string().optional(),
        district: zod.string().min(4, { message: "O nome do bairro deve conter no mínimo 4 caracteres." })
        .max(30, { message: "O nome do bairro deve conter no máximo 30 caracteres." }),
        city: zod.string().min(4, { message: "O nome da cidade deve conter no mínimo 4 caracteres." })
        .max(25, { message: "O nome da cidade deve conter no máximo 25 caracteres." }),
        uf: zod.string().min(2, { message: "O nome da UF deve conter no mínimo 2 caracteres." })
        .max(2, { message: "O nome da UF deve conter no máximo 2 caracteres." }),
        paymentMethod: zod.string().min(5, {message: "Selecione o método de pagamento"}).default(paymentDefault)
    })
    
    type AnddressFormData = zod.infer<typeof schemaValidation>

    const newAddress = useForm<AnddressFormData>({
        resolver: zodResolver(schemaValidation),
        defaultValues: {
            complement: "",
        }

    }
    )

    const { handleSubmit, formState: { errors } } = newAddress

    function handleCreateNewAddress(data: AnddressFormData) {
        let paymentType;
        if(data.paymentMethod === "creditCard"){
            paymentType = "Cartão de Crédito"
        }
        if(data.paymentMethod === "debitCard"){
            paymentType = "Cartão de Débito"
        }
        if(data.paymentMethod === "money"){
            paymentType = "Dinheiro"
        }

        handleNewAddress({city: data.city, district: data.district, number: data.number, paymentMethod: paymentType? paymentType : "Dinheiro",
        street: data.street, time: (totalCoffees * 3) + 20, uf: data.uf, zipCode: data.zipCode, complement: data.complement})
        navigate("/success")
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

                        <ErrorsContainer>

                            {errors.zipCode && totalCoffees > 0 && (
                                <p>{errors.zipCode.message}</p>
                            )}

                            {errors.street && totalCoffees > 0 && (
                                <p>{errors.street.message}</p>
                            )}

                            {errors.number && totalCoffees > 0 && (
                                <p>{errors.number.message}</p>
                            )}

                            {errors.district && totalCoffees > 0 && (
                                <p>{errors.district.message}</p>
                            )}

                            {errors.city && totalCoffees > 0 && (
                                <p>{errors.city.message}</p>
                            )}

                            {errors.uf && totalCoffees > 0 && (
                                <p>{errors.uf.message}</p>
                            )}

                            {errors.paymentMethod && paymentDefault.length === 4 && totalCoffees > 0 && (
                                <p>{errors.paymentMethod.message}</p>
                            )}

                        </ErrorsContainer>

                    </div>

                </CheckoutContainer>

            </form>

            <ButtonToTop onClick={scrollToTop}>
            <ArrowCircleUp size={34} />
            </ButtonToTop>

        </main>
    )
}