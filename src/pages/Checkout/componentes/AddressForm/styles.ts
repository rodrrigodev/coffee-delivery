import styled from "styled-components"

export const InputDivContainer = styled.div`
    display: flex;
    gap: .75rem;

    div{
        position: relative;
        width: calc(60% + .75rem);
    }

    span{
        position: absolute;
        right: .75rem;
        top: .8125rem;
        font-size: .75rem;
        color: ${props => props.theme["base-label"]};
    }

    @media only screen and (max-width: 576px) {
        flex-direction: column;

        input, div{
            width: 100%;
        }
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
    
    &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
    }

    &:focus{
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
`

export const InputCity = styled(inputBase)`
    width: 50%;
`

export const InputStreet = styled(inputBase)`
    width: 100%;
`

export const InputComplement = styled(inputBase)`
    width: 100%;
`

export const InputZipCode = styled(inputBase)`
    width: calc(40% - 1.5rem);

    @media only screen and (max-width: 576px) {
            width: 100%;
    }
`

export const InputNumber = styled(inputBase)`
    width: calc(40% - 1.5rem);
`

export const InputDistrict = styled(inputBase)`
    width: calc(40% - 1.5rem);
`

export const InputUf = styled(inputBase)`
    width: 10%;
`