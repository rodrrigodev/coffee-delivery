import styled from "styled-components";
import { addressAndPaymentBase } from "../../styles";

export const PaymentTitleContainer = styled(addressAndPaymentBase)`
    span{
        color: ${props => props.theme["purple"]}
    }
`

export const PaymentType = styled.div`
    display: flex;
    gap: .75rem;
    
   div{
        width: 100%;
        padding: 1rem 0 1rem 1rem;
        background-color: ${props => props.theme["base-button"]};
        border-radius: 6px;

    }

    #CreditCard, #Bank, #Money{
        color: ${props => props.theme["purple"]};
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