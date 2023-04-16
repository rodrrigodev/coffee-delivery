import styled from 'styled-components'

export const CoffeeOrderContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.25rem 2rem 0.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  @media only screen and (max-width: 1154px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }

  > div {
    display: flex;

    @media only screen and (max-width: 425px) {
      flex-direction: column;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const ButtonAndTitleContainer = styled.div`
  h3 {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      color: ${(props) => props.theme['base-text']};
      background-color: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      transition: all 500ms;

      &:hover {
        color: ${(props) => props.theme['base-subtitle']};
        background-color: ${(props) => props.theme['base-hover']};
        transition: all 500ms;

        #Trash {
          color: ${(props) => props.theme['purple-dark']};
          transition: all 500ms;
        }
      }

      #Trash {
        color: ${(props) => props.theme.purple};
        transition: all 500ms;
      }
    }
  }
`

export const CoffeePrice = styled.span`
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};

  @media only screen and (max-width: 425px) {
    text-align: right;
    margin-top: 0.75rem;
  }
`
