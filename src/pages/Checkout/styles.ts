import styled from "styled-components";
import { containerPatternSizeBase } from "../Home/styles";

export const CheckoutContainer = styled(containerPatternSizeBase)`
    margin: 4.5rem auto;
    gap: 1rem;
    /* flex-wrap: wrap; */

    h2{
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.3;
        margin-bottom: .9375rem;
    }
`

export const ContainerCardBase = styled.div`
    background-color: ${props => props.theme["base-card"]};
    padding: 2.5rem;
`

export const BackgroundCardCollor = styled(ContainerCardBase)`
    border-radius: 6px;
    margin-bottom: .75rem;
`

export const addressAndPaymentBase = styled.div`
    display: flex;
    gap: .5rem;
    margin-bottom: 2rem;

    h3{
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme["base-subtitle"]}
    }

    p{
        font-size: .875rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme["base-text"]}
    }
`

export const ErrorText = styled.p`
    margin: 2rem auto;
    color: red;
    max-width: 24.5625rem;
    width: 100%;
`