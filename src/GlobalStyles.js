import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

body {
    font-size: 112.5%;
    background: #F4F4F4;
    margin: 0;
    padding: 0;
}

#root {
    text-align: center;
}
`