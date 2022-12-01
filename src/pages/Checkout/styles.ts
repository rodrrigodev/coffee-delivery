import styled from "styled-components";
import { containerPatternSizeBase } from "../Home/styles";

export const CheckoutContainer = styled(containerPatternSizeBase)`
    margin: 4.5rem auto;
    gap: 1rem;
    flex-wrap: wrap;

    h2{
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.3;
        margin-bottom: .9375rem;
    }
`

const ContainerCardBase = styled.div`
    background-color: ${props=> props.theme["base-card"]};
    padding: 2.5rem;
`

export const BackgroundCardCollor = styled(ContainerCardBase)`
    border-radius: 6px;
    margin-bottom: .75rem;
`

export const ConfirmOrder = styled(ContainerCardBase)`
    border-radius: 6px 40px ;
`

const addressAndPaymentBase = styled.div`
    display: flex;
    gap: .5rem;
    margin-bottom: 2rem;

    h3{
        font-weight: 400;
        line-height: 1.3;
        color: ${props=> props.theme["base-subtitle"]}
    }

    p{
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props=> props.theme["base-text"]}
    }
`

export const AddressTitleContainer = styled(addressAndPaymentBase)`
    span{
        color: ${props=> props.theme["yellow-dark"]}
    }
`
export const PaymentTitleContainer = styled(addressAndPaymentBase)`
    span{
        color: ${props=> props.theme["purple"]}
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`


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
        color: ${props=> props.theme["base-label"]};
    }
`

const inputBase = styled.input`
    font-size: .875rem;
    line-height: 1.3;
    color: ${props=> props.theme["base-label"]};
    background-color: ${props=> props.theme["base-input"]};
    border: 1px solid ${props=> props.theme["base-button"]};
    padding: .75rem;
    border-radius: 4px;
`

export const InputCity = styled(inputBase)`
    width: 17.5rem;
`

export const InputStreet = styled(inputBase)`
    width: 100%;
`

export const InputCloplement = styled(inputBase)`
    width: 21.75rem;
`

export const InputCepNumberDistrict = styled(inputBase)`
    width: 12.5rem;
`

export const InputUf = styled(inputBase)`
    width: 3.75rem;
`

export const PaymentType =  styled.div`
    display: flex;
    gap: .75rem;
    
   div{
        padding: 1rem;
        background-color: ${props=> props.theme["base-button"]};
        border-radius: 6px;

}

    #CreditCard, #Bank, #Money{
        color: ${props=> props.theme["purple"]};
    }

    span{
        display: flex;
        align-items: center;
        gap: .75rem;
        font-size: .75rem;
        text-transform: uppercase;
        line-height: 1.6;
    }
`

export const CoffeeOrderContainer = styled.div`
    display: flex;
    padding: .25rem .25rem 2rem .25rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props=> props.theme["base-button"]};

    img{
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
    }
`

export const ButtonAndTitleContainer = styled.div`
    margin-right: 3.125rem;

    h3{
        font-size: 1rem;
        line-height: 1.3;
        font-weight: 400;
        margin-bottom: .5rem;
    }

    div{
        display: flex;
        gap: .5rem;

        span{
            font-size: .75rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: .25rem;
            padding: .5rem;
            color: ${props=> props.theme["base-text"]};
            background-color: ${props=> props.theme["base-button"]};
            border-radius: 6px;
        }
    }
`