import styled from "styled-components";
import background from "../../assets/background.png"

export const ImageBackground = styled.div`
    background-image: url(${background});
    background-size: cover;
    padding: 5.75rem 0;

    section{
    max-width: 71.25rem;
    width: 90%;
    margin: auto;

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
`

export const Coffees = styled.section`
    max-width: 71.25rem;
    width: 90%;
    margin: 0 auto 9.8125rem auto;

    > div{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 2rem 1rem;
    }

    h2{
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};
        line-height: 1.3;
        margin: 2rem auto 3.375rem auto;
    }
`

export const CoffeeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme["base-card"]};
    max-width: 18.75rem;
    padding: 0 1.25rem 1.25rem 1.25rem;
    border-radius: .375rem 2.25rem;

    img{
        margin: -1.25rem auto .75rem auto;
    }

    #coffeeType{
        display: flex;
        gap: .25rem;

        span{
            background-color: ${props => props.theme["yellow-light"]};
            color: ${props => props.theme["yellow-dark"]};
            padding: .25rem .5rem;
            border-radius: 100px;

            font-weight: 700;
            font-size: 0.625rem;
            line-height: 1.3;

        }
        }

        h3{
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.25rem;
            color: ${props => props.theme["base-subtitle"]};
            line-height: 1.3;
            margin: 1rem auto .5rem auto;
        }
      
        p{
            width: 13.5rem;
            font-size: .875rem;
            line-height: 1.3;
            color: ${props => props.theme["base-label"]};
            text-align: center;
            margin-bottom: 2.0625rem;
        }
`

export const PriceAndQuantity = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-of-type{
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    margin-right: 0.125rem;

    span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    }
    }

    div:first-of-type{
        display: flex;
        align-items: center;
        gap: .25rem;
        height: 2.375rem;

        div{
            padding: 0.53125rem;
            background-color: ${props => props.theme["base-button"]};
            border-radius: 6px;
        }

        button{
            border: 0;
            color: ${props => props.theme["purple"]};
            background-color: transparent;
        }

        input{
            font-size: 1rem;
            color: ${props => props.theme["base-text"]};
            line-height: 1.3;
            border: 0;
            max-width: 1.25rem;
            background-color: transparent;
            text-align: center;
            
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                 margin: 0;
            }
        }

        span{
            display: flex;
            align-items: center;
            color: ${props => props.theme["white"]};
            background-color: ${props=> props.theme["purple-dark"]};
            height: 2.375rem;
            padding: 0 .5rem ;
            border-radius: 6px;
            transition: all 700ms;

            &:hover{
            background-color: ${props=> props.theme["purple"]};
            transition: all 700ms;
            }
        }
    }
` 