import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 71.25rem;
    width: 90%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavActionsContainer = styled.div`
    display: flex;
    gap: .75rem;
    /* align-items: center;
    justify-content: center; */

    span, a{
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: .875rem;
        line-height: 1.3;
        padding: .5rem;
        border-radius: 6px;
    }

    span{
        color: ${props=> props.theme["purple-dark"]};
        background-color: ${props=> props.theme["purple-light"]};
    }

    a{
        color: ${props=> props.theme["yellow-dark"]};
        background-color: ${props=> props.theme["yellow-light"]};
        transition: all 700ms;

        &:hover{
        background-color: ${props=> props.theme["yellow-dark"]};
        color: ${props=> props.theme["yellow-light"]};
        transition: all 700ms;
        }
    }
`