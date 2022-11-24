import styled from "styled-components";

export const CheckoutContainer = styled.main`
    max-width: 71.25rem;
    width: 90%;
    margin: auto;

    display: flex;
    justify-content: space-between;

    h2{
        margin: 2.5rem 0 0.9375rem 0;
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.3;
        color: ${props=> props.theme["base-subtitle"]};
    }
`
const UserAndFinishedBase = styled.div`
    background-color: ${props=> props.theme["base-card"]};
    padding: 2.5rem;
`

export const UserInfoContainer = styled(UserAndFinishedBase)`
    font-family: "Roboto";

  #AddressTitle{
    display: flex;
    gap: .5rem;

    > span{
        color: ${props=> props.theme["yellow-dark"]};
    }

    div{
        span{
            font-size: 1rem;
            line-height: 1.3;
            color: ${props=> props.theme["base-subtitle"]};
        }

        p{
            font-size: .875rem;
            line-height: 1.3;
            color: ${props=> props.theme["base-text"]};
            margin-bottom: 2rem;
        }
    }
  }
`

export const AddressInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        color: ${props=> props.theme["base-label"]};
        background-color: ${props=> props.theme["base-input"]};
        border: .0625rem solid ${props=> props.theme["base-button"]};
        padding: .75rem;
        border-radius: 4px;
    }

    div:nth-child(3){
        display: flex;
        gap: .75rem;
        position: relative;

        #number{
            width: 12.5rem;
        }

        #complement{
            flex: 1;
        }

        span{
            font-size: .75rem;
            line-height: 1.3;
            font-style: italic;
            position: absolute;
            right: .75rem;
            top: .90625rem;
            text-align: center;
        }
    }

    div:nth-child(4){
        background-color: blue;
    }
`

export const FinishedContainer = styled(UserAndFinishedBase)`

`