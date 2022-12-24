import { InputContainer } from "../DeliveryAddress/styles";
import { InputZipCode, InputCity, InputComplement, InputDistrict, InputDivContainer, InputNumber, InputStreet, InputUf } from "./styles";
import { useForm, useFormContext } from "react-hook-form";

export function AddressForm() {
    const { register } = useFormContext()
    

    return (
        <InputContainer>
            <InputZipCode
                type="number"
                id="zipCode"
                placeholder="CEP"
                {...register("zipCode", {valueAsNumber: true})}
            />

            <InputStreet
                type="text"
                id="street"
                placeholder="Rua"
                {...register("street")}
            />

            <InputDivContainer>
                <InputNumber
                    type="number"
                    id="number"
                    placeholder="Número"
                    {...register("number" ,{valueAsNumber: true})}
                />
                <div>
                    <InputComplement
                        type="text"
                        id="complement"
                        placeholder="Complemento"
                        {...register("complement")}
                    />
                    <span>Opcional</span>
                </div>
            </InputDivContainer>

            <InputDivContainer>
                <InputDistrict
                    type="text"
                    id="district"
                    placeholder="Bairro"
                    {...register("district")}
                />
                <InputCity
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    {...register("city")}
                />
                <InputUf
                    type="text"
                    id="uf"
                    placeholder="UF"
                    {...register("uf")}
                />
            </InputDivContainer>

        </InputContainer>

    )
}