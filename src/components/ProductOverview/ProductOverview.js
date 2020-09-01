import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";


export default function ProductOverview({productIcon, productName}) {
    return (    
        <NavLinkStyled to={`/${productName.toLowerCase()}`}>
        <ProductCategory>
            <ProductIcon src={productIcon} alt={productName}/>
            <ProductName>{productName}</ProductName>
        </ProductCategory>
        </NavLinkStyled>
    )
}

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;

    :nth-child(2n+1){
        justify-self: start;
        margin-left: 15px;
    }

    :nth-child(2n+0){
        justify-self: end;
        margin-right: 15px;
    }

    :last-child img{
        width: 88px;
        height: 35px;
        align-self: center;
}
`

const ProductCategory = styled.div`
    display: flex;
    border: 2px solid #4BDB80;
    border-radius: 20px 0 20px 20px;
    width: 151px;
    height: 143px;
    margin: 15px 0 15px 0;
    padding: 25px 0;
    flex-direction: column;
    justify-content: space-evenly;
`
const ProductIcon = styled.img`
    margin-bottom: 10px;
`
const ProductName = styled.h2`
    color: #8E9091;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
`