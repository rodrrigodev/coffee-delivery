import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
}
body{
    background-color: ${(porps) => porps.theme.background};
    color: ${(porps) => porps.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    overflow-y: scroll;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

a{
    text-decoration: none;
}

@media (max-width: 768px){
    html{
        font-size: 87.5%;
    }
}
`
