import styled from 'styled-components'
import { containerPatternSizeBase } from '../../styles'

export const CoffeesContainer = styled(containerPatternSizeBase)`
  margin: 0 auto 2rem auto;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
    /* margin-bottom: 2.0625rem; */
  }
`

export const CoffeeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem 1rem;
`

export const ButtonToTop = styled.button`
  position: fixed;
  right: 2%;
  bottom: 2%;
  background-color: red;
  border: 0;
  border-radius: 100%;
  line-height: 0;
  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
`
