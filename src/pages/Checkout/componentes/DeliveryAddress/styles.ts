import styled from "styled-components";
import { addressAndPaymentBase } from "../../styles";

export const AddressTitleContainer = styled(addressAndPaymentBase)`
    span{
        color: ${props => props.theme["yellow-dark"]}
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

// export const InputDivContainer = styled.div`
//     display: flex;
//     gap: .75rem;
//     flex-wrap: wrap;

//     div{
//         position: relative;
//     }

//     span{
//         position: absolute;
//         right: .75rem;
//         top: .8125rem;
//         font-size: .75rem;
//         color: ${props => props.theme["base-label"]};
//     }
// `

export const InputDivContainer = styled.div`
    display: flex;
    gap: .75rem;
    flex-wrap: wrap;

    div{
        position: relative;
    }

    span{
        position: absolute;
        right: .75rem;
        top: .8125rem;
        font-size: .75rem;
        color: ${props => props.theme["base-label"]};
    }
`

const inputBase = styled.input`
    font-size: .875rem;
    line-height: 1.3;
    color: ${props => props.theme["base-label"]};
    background-color: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-button"]};
    padding: .75rem;
    border-radius: 4px;

    &:focus{
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }

`

export const InputCity = styled(inputBase)`
    width: 17.5rem;
`

export const InputStreet = styled(inputBase)`
    width: 100%;
`

export const InputComplement = styled(inputBase)`
    width: 21.75rem;
`

export const InputCepNumberDistrict = styled(inputBase)`
    width: 12.5rem;
`

export const InputUf = styled(inputBase)`
    width: 3.75rem;
`