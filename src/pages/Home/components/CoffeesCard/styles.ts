import styled from "styled-components"
import { containerPatternSizeBase } from "../../styles"

export const CoffeesContainer = styled(containerPatternSizeBase)`
    margin: 0 auto 2rem auto;
    flex-direction: column;

    h2{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};
        line-height: 1.3;
    }
`

export const CoffeeCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 1rem 1rem;
`

export const CoffeeCard = styled.div`
    margin-top: calc(2.5rem - 1rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme["base-card"]}; 
    padding: 0 1.25rem 1.25rem 1.25rem;
    border-radius: 6px 36px;

    img{
        margin-top: -1.25rem;
    }

    div:nth-of-type(2){
        display: flex;
        gap: .25rem;
        margin: .75rem 0 1rem 0;

        span{
            color: ${props => props.theme["yellow-dark"]}; 
            background-color: ${props => props.theme["yellow-light"]};
            padding: .25rem .5rem;
            border-radius: 100px;
            text-transform: uppercase;
            font-weight: 700;
            font-size: .625rem;
            line-height: 1.3;
        }
    }

    h3{
        color: ${props => props.theme["base-subtitle"]};
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.3;
    }

    p{
        color: ${props => props.theme["base-label"]};
        font-size: .875rem;
        line-height: 1.3;
        width: 216px;
        margin: .5rem 0 2.0625rem 0;
        text-align: center;
    }
`

export const PriceAndAmount = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4375rem;

    span:nth-child(1){
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 1.3;

        &:before{
            content: "R$";
            font-size: .875rem;
            line-height: 1.3;
            margin-right: .2rem;
        }
}

    > div{
        display: flex;
        gap: .5rem;

        button[type = "button"]{
            display: flex;
            align-items: center;
            border: 0;
            padding: .5rem;
            background-color: ${props=> props.theme["purple-dark"]};
            color: ${props=> props.theme["white"]};
            border-radius: 6px;
            transition: all 500ms;

            &:hover{
                background-color: ${props=> props.theme["purple"]};
                transition: all 500ms;
            }
        }
    }
`

export const PlusOrMinus = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props=> props.theme["base-button"]};
    border-radius: 6px;
    padding: .5rem;

    button{
        background-color: transparent;
        border: 0;
        color: ${props=> props.theme["purple"]};
        transition: all 500ms;

        &:disabled{
            color: ${props=> props.theme["base-label"]};
        }

        &:hover:not(:disabled){
            color: ${props=> props.theme["purple-dark"]};
            transition: all 500ms;
        }
    }

    input{
        width: 1.1rem;
        border: 0;
        text-align: center;
        background-color: transparent;
        padding: .1rem;
        box-sizing: initial;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
    }
}
`

const messageBase = styled.span`
    position: fixed;
    right: 1%;
    top: 2%;
    font-size: .875rem;
    display: flex;
    align-items: center;
    gap: .25rem;
    padding: .5rem;
    border-radius: 6px;
`

export const SuccessMessage = styled(messageBase)`
    background-color: ${props=> props.theme["green-light"]};
    color: ${props=> props.theme["green-dark"]};
`

export const LimitMessage = styled(messageBase)`
    background-color: ${props=> props.theme["red-light"]};
    color: ${props=> props.theme["red-dark"]};
`