import { useContext, useState } from 'react'
import { CoffeesCartContext } from '../../contexts/CoffeesCartContext'
import { DeliveryAddress } from './componentes/DeliveryAddress'
import { PaymentMethod } from './componentes/PaymentMethod'
import { SelectedCoffees } from './componentes/SelectedCoffees'
import { CheckoutContainer, ErrorsContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ButtonToTop } from '../Home/components/CoffeesAvailable/styles'
import { ArrowCircleUp } from '@phosphor-icons/react'
import { scrollToTop } from '../../utils/scroolToTop'
import { useNavigate } from 'react-router-dom'

const schemaValidation = zod.object({
  zipCode: zod
    .number({ invalid_type_error: 'Somente números são aceitos no CEP.' })
    .superRefine((val, ctx) => {
      if (val.toString().length !== 8) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: 'CEP deve conter no minimo 8 números.',
          fatal: true,
        })
      }
    }),
  street: zod
    .string()
    .min(4, { message: 'O nome da rua deve conter no mínimo 4 caracteres.' })
    .max(40, { message: 'O nome da rua não pode ultrapassar 40 caracteres' }),
  number: zod.number({
    invalid_type_error: 'Somente números são aceitos na numeração da casa.',
  }),
  complement: zod.string().optional(),
  district: zod
    .string()
    .min(4, {
      message: 'O nome do bairro deve conter no mínimo 4 caracteres.',
    })
    .max(30, {
      message: 'O nome do bairro deve conter no máximo 30 caracteres.',
    }),
  city: zod
    .string()
    .min(4, {
      message: 'O nome da cidade deve conter no mínimo 4 caracteres.',
    })
    .max(25, {
      message: 'O nome da cidade deve conter no máximo 25 caracteres.',
    }),
  uf: zod
    .string()
    .min(2, { message: 'O nome da UF deve conter no mínimo 2 caracteres.' })
    .max(2, { message: 'O nome da UF deve conter no máximo 2 caracteres.' }),
})

export function Checkout() {
  const { paymentMethod, coffeesCart, handleCheckout } =
    useContext(CoffeesCartContext)
  const [checkPaymentMethod, setCheckPaymentMethod] = useState<boolean>(false)
  const navigate = useNavigate()
  const total = coffeesCart.length
    ? coffeesCart
        .map((element) => {
          return element.amount
        })
        .reduce((total, currentValue) => total + currentValue)
    : 0

  type AnddressFormData = zod.infer<typeof schemaValidation>

  const newAddress = useForm<AnddressFormData>({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      complement: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
  } = newAddress

  function handleCreateNewAddress(data: AnddressFormData) {
    if (!paymentMethod) {
      setCheckPaymentMethod(true)
    } else {
      handleCheckout({
        city: data.city,
        district: data.district,
        number: data.number,
        paymentMethod,
        street: data.street,
        uf: data.uf,
        zipCode: data.zipCode,
        complement: data.complement,
        itens: total,
      })
      navigate('/success')
    }
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
            <h2>
              {coffeesCart.length ? 'Cafés selecionados' : 'Carrinho vazio'}
            </h2>

            <SelectedCoffees />

            <ErrorsContainer>
              {errors.zipCode && !!coffeesCart.length && (
                <p>{errors.zipCode.message}</p>
              )}

              {errors.street && !!coffeesCart.length && (
                <p>{errors.street.message}</p>
              )}

              {errors.number && !!coffeesCart.length && (
                <p>{errors.number.message}</p>
              )}

              {errors.district && !!coffeesCart.length && (
                <p>{errors.district.message}</p>
              )}

              {errors.city && !!coffeesCart.length && (
                <p>{errors.city.message}</p>
              )}

              {errors.uf && !!coffeesCart.length && <p>{errors.uf.message}</p>}

              {!paymentMethod.length &&
                checkPaymentMethod &&
                !!coffeesCart.length && (
                  <p>{'Selecione o método de pagamento!'}</p>
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
