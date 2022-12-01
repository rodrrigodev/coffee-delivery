import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 72rem;
    width: 90%;
    margin: 2rem auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavActionsContainer = styled.div`
   display: flex;
   gap: .75rem;
   /* align-items: center; */
   /* justify-content: center; */

   span, a{
    display: flex;
    align-items: center;
    gap: .25rem;
    padding: .5rem;
    border-radius: 6px;
}

    span{
        background-color: ${props=> props.theme["purple-light"]};
        color: ${props=> props.theme["purple-dark"]};
        font-size: .875rem;
        line-height: 1.3;

        #MapPin{
            color: ${props=> props.theme["purple"]};
        }
}

    a{
        background-color: ${props=> props.theme["yellow-light"]};
        color: ${props=> props.theme["yellow-dark"]};
        transition: all 500ms;

        &:hover{
            background-color: ${props=> props.theme["yellow-dark"]};
            color: ${props=> props.theme["white"]};
            transition: all 500ms;
        }
    }
`