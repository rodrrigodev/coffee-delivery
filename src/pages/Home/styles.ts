import styled from "styled-components";
import background from "../../assets/background.png"

export const ImageBackground = styled.div`
    margin: 92px 0;
    background-image: url(${background});
    background-size: cover;

    section{
    max-width: 71.25rem;
    width: 90%;
    margin: 5.75rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 40%;
    }
    }
`

export const CoffeeDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`

export const ContainerDescriptionOne = styled.div`
    h1{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme["base-title"]};
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    p{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.25rem;
        line-height: 1.3;
    }
`

export const ContainerDescriptionTwo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem;
`

export const IconDescriptionContainer = styled.div`
        display: flex;
        align-items: center;
        gap: .5rem;

        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme["base-text"]};

        &:first-child{
            margin-bottom: 1.25rem;
        }

        #ShoppingCart{
            background-color: ${props=> props.theme["yellow-dark"]};
        }

        #Timer{
            background-color: ${props=> props.theme["yellow"]};
        }

        #Package{
            background-color: ${props=> props.theme["base-text"]};
        }

        #Coffee{
            background-color: ${props=> props.theme["purple"]};
        }

        #ShoppingCart, #Timer, #Package, #Coffee{
            color: ${props=> props.theme["white"]};
            padding: .5rem;
            box-sizing: initial;
            border-radius: 50%;
        }
`