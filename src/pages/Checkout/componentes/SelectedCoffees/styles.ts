import styled from "styled-components";
import { ContainerCardBase } from "../../styles";


export const ConfirmOrder = styled(ContainerCardBase)`
    border-radius: 6px 40px ;
`

export const CoffeeOrderContainer = styled.div`
    display: flex;
    padding: .25rem .25rem 2rem .25rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};

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
            color: ${props => props.theme["base-text"]};
            background-color: ${props => props.theme["base-button"]};
            border-radius: 6px;
            transition: all 500ms;

            &:hover{
                color: ${props => props.theme["base-subtitle"]};
                background-color: ${props => props.theme["base-hover"]};
                transition: all 500ms;

                #Trash{
                color: ${props => props.theme["purple-dark"]};
                transition: all 500ms;
            }
            }

            #Trash{
                color: ${props => props.theme["purple"]};
                transition: all 500ms;
            }
        }
    }
`

export const CoffeePrice = styled.span`
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme["base-text"]};
`

export const PriceItensTotalContainer = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: .75rem;

    span{
        font-size: .875rem;
        color: ${props => props.theme["base-text"]};
        line-height: 1.3;
    }

}

    button{
        font-size: .875rem;
        font-weight: 700;
        line-height: 1.6;
        text-transform: uppercase;
        border-radius: 6px;
        border: 0;
        color: ${props => props.theme["white"]};
        background-color: ${props => props.theme["yellow"]};
        padding: .75rem 0;
        width: 100%;
        transition: all 500ms;

        &:hover{
            background-color: ${props => props.theme["yellow-dark"]};
            transition: all 500ms;
        }
}
`

export const FinalPrice = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]};
`