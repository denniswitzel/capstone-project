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
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    justify-items: center;
}

:root {
    --green: #4BDB80;
    --turquoise: #4BDBA4;
    --grey: #8E9091;
    --lightgrey: #F4F4F4;
    --white: #FFFFFF;
  }
`