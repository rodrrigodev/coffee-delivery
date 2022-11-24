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

export const FinishedContainer = styled(UserAndFinishedBase)`

`