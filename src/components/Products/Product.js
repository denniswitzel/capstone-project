import React from 'react'
import styled from 'styled-components'

export default function Product({ title, image }) {
    return (
    <ProductWrapper>
    <ProductName>{title}</ProductName>
    <ProductImage src={image} alt={title}/>
    </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
    background: linear-gradient(45deg, rgba(75,219,164,1) 0%, rgba(75,219,128,1) 100%);
    border-radius: 20px 0 20px 20px;
    width: 151px;
    height: 143px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    padding-top: 15px;
    display: inline-block;
    margin: 20px 0 50px 0;

    :nth-child(2n+1){
        margin-right: 20px;
    }
`

const ProductName = styled.h3`
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
    width: 80%;
    height: 60px;
    text-align: center;
    margin: 0 auto;
`
const ProductImage = styled.img`
    width: 75%;
    margin-left: 15px;
    margin-top: 10px;
    -webkit-filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
`
