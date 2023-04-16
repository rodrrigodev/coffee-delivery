import { InputContainer } from '../DeliveryAddress/styles'
import {
  InputZipCode,
  InputCity,
  InputComplement,
  InputDistrict,
  InputDivContainer,
  InputNumber,
  InputStreet,
  InputUf,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <InputContainer>
      <InputZipCode
        type="number"
        placeholder="CEP"
        {...register('zipCode', { valueAsNumber: true })}
      />

      <InputStreet placeholder="Rua" {...register('street')} />

      <InputDivContainer>
        <InputNumber
          type="number"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
        />
        <div>
          <InputComplement
            placeholder="Complemento"
            {...register('complement')}
          />
          <span>Opcional</span>
        </div>
      </InputDivContainer>

      <InputDivContainer>
        <InputDistrict placeholder="Bairro" {...register('district')} />
        <InputCity placeholder="Cidade" {...register('city')} />
        <InputUf placeholder="UF" {...register('uf')} />
      </InputDivContainer>
    </InputContainer>
  )
}
