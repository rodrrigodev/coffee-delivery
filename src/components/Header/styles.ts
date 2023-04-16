import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 72rem;
  width: 90%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    @media only screen and (max-width: 374px) {
      max-width: 5rem;
      width: 100%;
    }
  }
`

export const NavActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  span,
  a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
  }

  span {
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 1.3;

    #MapPin {
      color: ${(props) => props.theme.purple};
    }
  }

  div {
    a {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      transition: all 500ms;
      position: relative;

      span {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        border-radius: 100%;
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto';
        font-size: 0.75rem;
        font-weight: 700;
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        line-height: 0;
      }

      &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        transition: all 500ms;
      }
    }
  }
`
