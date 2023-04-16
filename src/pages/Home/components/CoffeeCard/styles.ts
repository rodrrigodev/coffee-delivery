import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
  }

  div:nth-of-type(2) {
    display: flex;
    gap: 0.25rem;
    margin: 0.75rem 0 1rem 0;

    span {
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 0.25rem 0.5rem;
      border-radius: 100px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 1.3;
    }
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
    width: 216px;
    margin: 0.5rem 0 2.0625rem 0;
    text-align: center;
  }
`

export const PriceAndAmount = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4375rem;

  span:nth-child(1) {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;

    &:before {
      content: 'R$';
      font-size: 0.875rem;
      line-height: 1.3;
      margin-right: 0.2rem;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;

    button[type='button'] {
      display: flex;
      align-items: center;
      border: 0;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      border-radius: 6px;
      transition: all 500ms;

      &:hover {
        background-color: ${(props) => props.theme.purple};
        transition: all 500ms;
      }
    }
  }
`

export const PlusOrMinus = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.purple};
    transition: all 500ms;

    &:disabled {
      color: ${(props) => props.theme['base-label']};
    }

    &:hover:not(:disabled) {
      color: ${(props) => props.theme['purple-dark']};
      transition: all 500ms;
    }
  }

  input {
    width: 1.1rem;
    border: 0;
    text-align: center;
    background-color: transparent;
    padding: 0.1rem;
    box-sizing: initial;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`
