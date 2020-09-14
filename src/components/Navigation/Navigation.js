import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Heart } from '../../images/icons/heart.svg'

export default function Navigation() {
    const {pathname} = useLocation()

    return (
    <>
    <NavLinkStyled disabled={pathname === '/favorites'} to='/favorites'>
        <Heart/>
    </NavLinkStyled>
    </>
    )
}

const NavLinkStyled = styled(NavLink)`
    background: linear-gradient(45deg,rgba(75, 219, 164, 1) 0%, rgba(75, 219, 128, 1) 100%);
    width: 90px;
    height: 90px;
    position: fixed;
    bottom: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    text-align: center;
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};
    
    svg {
        fill: white;
        stroke: transparent;
        width: 40px;
        margin-top: -3px;
    }
  
`