import { MapPinLine } from "phosphor-react";
import { BackgroundCardCollor } from "../../styles";
import { AddressTitleContainer, InputCepNumberDistrict, InputCity, InputComplement, InputContainer, InputDivContainer, InputStreet, InputUf } from "./styles";

export function DeliveryAddress(){
    return(
        <BackgroundCardCollor>
        <AddressTitleContainer>
            <span>
                <MapPinLine size={22} />
            </span>
            <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
        </AddressTitleContainer>

        <InputContainer>
            <InputCepNumberDistrict type="number" name="" id="" placeholder="CEP" />
            <InputStreet type="text" name="" id="" placeholder="Rua" />

            <InputDivContainer>
                <InputCepNumberDistrict type="number" name="" id="" placeholder="Número" />
                <div>
                <InputComplement type="text" name="" id="" placeholder="Complemento" />
                    <span>Opcional</span>
                </div>
            </InputDivContainer>

            <InputDivContainer>
                <InputCepNumberDistrict type="text" name="" id="" placeholder="Bairro" />
                <InputCity type="text" name="" id="" placeholder="Cidade" />
                <InputUf type="text" name="" id="" placeholder="UF" />
            </InputDivContainer>

        </InputContainer>

    </BackgroundCardCollor>
    )
}