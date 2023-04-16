import styled from 'styled-components'
import background from '../../../../assets/background.png'
import { containerPatternSizeBase } from '../../styles'

export const Background = styled.div`
  padding: 5.75rem 0;
  background-image: url(${background});
  background-repeat: round;

  @media only screen and (max-width: 534px) {
    padding: 1rem 0 3rem 0;
    background-image: none;
    background-repeat: none;
  }
`

export const CoffeeDescription = styled(containerPatternSizeBase)`
  margin: 0 auto;

  section {
    max-width: 36.75rem;
    width: 100%;

    strong {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      color: ${(props) => props.theme['base-title']};
      line-height: 1.3;

      @media only screen and (max-width: 534px) {
        font-size: 2rem;
      }
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3;
      margin: 1rem 0 4.125rem 0;

      @media only screen and (max-width: 768px) {
        margin-bottom: 2rem;
      }
    }
  }

  img {
    width: 100%;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const IconDescriptions = styled.div`
  max-width: 35.4375rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  span {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};

    #ShoppingCart {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
    #Timer {
      background-color: ${(props) => props.theme.yellow};
    }
    #Package {
      background-color: ${(props) => props.theme['base-text']};
    }
    #Coffee {
      background-color: ${(props) => props.theme.purple};
    }
    #ShoppingCart,
    #Timer,
    #Package,
    #Coffee {
      color: ${(props) => props.theme.white};
      padding: 0.5rem;
      box-sizing: initial;
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 534px) {
    flex-direction: column;
  }
`
