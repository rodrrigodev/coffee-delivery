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
        id="zipCode"
        placeholder="CEP"
        {...register('zipCode', { valueAsNumber: true })}
      />

      <InputStreet id="street" placeholder="Rua" {...register('street')} />

      <InputDivContainer>
        <InputNumber
          id="number"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
        />
        <div>
          <InputComplement
            id="complement"
            placeholder="Complemento"
            {...register('complement')}
          />
          <span>Opcional</span>
        </div>
      </InputDivContainer>

      <InputDivContainer>
        <InputDistrict
          id="district"
          placeholder="Bairro"
          {...register('district')}
        />
        <InputCity id="city" placeholder="Cidade" {...register('city')} />
        <InputUf id="uf" placeholder="UF" {...register('uf')} />
      </InputDivContainer>
    </InputContainer>
  )
}
