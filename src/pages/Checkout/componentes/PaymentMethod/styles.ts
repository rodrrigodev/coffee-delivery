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
    background-color: ${props=> props.color};
    
   div{
        width: 100%;
        padding: 1rem 0 1rem 1rem;
        background-color: ${props => props.theme["base-button"]};
        border-radius: 6px;
        transition: all 500ms;
        border: 1px solid transparent;

        &:hover{
            background-color: ${props => props.theme["base-hover"]};
            transition: all 500ms;
        }
    }
    
    #active{
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme.purple};
        transition: all 500ms;
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