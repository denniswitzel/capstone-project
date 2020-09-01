import React from 'react'
import Burger from './components/Burger/Burger'
import Kebab from './components/Kebab/Kebab'
import Minced from './components/Minced/Minced'
import Nuggets from './components/Nuggets/Nuggets'
import Sausages from './components/Sausages/Sausages'
import styled from 'styled-components'

export default function App() {
    return(
        <>
        <HeadlineStyled>All vegan products</HeadlineStyled>
        <Burger />
        <Kebab />
        <Minced />
        <Nuggets />
        <Sausages />
        </>
    )
}

const HeadlineStyled = styled.h1`
    text-align: center;
    color: #4BDB80;
    font-size: 28px;
    grid-column: 1/3;
`
