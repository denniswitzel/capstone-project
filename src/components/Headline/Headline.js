import React from 'react'
import styled from 'styled-components'


export default function Headline({headline}){
    return(
    <HeadlineStyled>{headline}</HeadlineStyled>
    )
}

const HeadlineStyled = styled.h2`
    text-align: center;
    font-weight: 300;
    color: #8E9091;
    border-bottom: 1px solid #4BDB80;
    padding-bottom: 5px;
    grid-column: 1/3;
`