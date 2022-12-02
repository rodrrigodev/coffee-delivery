import styled from "styled-components";
import background from "../../assets/background.png"

export const containerPatternSizeBase = styled.div`
    max-width: 72rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
`

export const CoffeeDescription = styled(containerPatternSizeBase)`
    margin: 0 auto;
    
    section{
        width: 36.75rem;
    
        strong{
            font-family: "Baloo 2";
            font-weight: 800;
            font-size: 3rem;
            color: ${props => props.theme["base-title"]};
            line-height: 1.3;
        }

        p{
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.25rem;
            line-height: 1.3;
            margin: 1rem 0 4.125rem 0;
        }
}

    img{
        width: 100%;
    }
`

export const IconDescriptions = styled.div`
    width: 35.4375rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem .5rem;

    div{
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    span{
        display: flex;
        gap: .75rem;
        align-items: center;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme["base-text"]};

        #ShoppingCart{
            background-color: ${props => props.theme["yellow-dark"]};
        }
        #Timer{
            background-color: ${props => props.theme["yellow"]};
        }
        #Package{
            background-color: ${props => props.theme["base-text"]};
        }
        #Coffee{
            background-color: ${props => props.theme["purple"]};
        }
        #ShoppingCart, #Timer, #Package, #Coffee{
            color: ${props => props.theme["white"]};
            padding: .5rem;
            box-sizing: initial;
            border-radius: 50%;
        }
    }
`

export const Background = styled.div`
    padding: 5.75rem 0;
    background-image: url(${background});
    background-repeat: round;   
`

export const CoffeesContainer = styled(containerPatternSizeBase)`
    margin: 0 auto;
    flex-direction: column;
    /* justify-content: stretch; */

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
    gap: 2rem 1rem;
`

export const CoffeeCard = styled.div`
    margin-top: 3.375rem;
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
        }
}

    > div{
        display: flex;
        gap: .5rem;

        span{
            display: flex;
            align-items: center;
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

        &:hover{
            color: ${props=> props.theme["purple-dark"]};
            transition: all 500ms;
        }
    }

    input{
        width: 1rem;
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