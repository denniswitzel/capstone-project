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
    background: ${({disabled}) => disabled ? '#4BDB80' : 'white'};
    width: 90px;
    height: 90px;
    position: fixed;
    bottom: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};
    -webkit-tap-highlight-color: transparent;
    
    svg {
        fill: ${({disabled}) => disabled ? 'white' : '#4BDB80'};
        stroke: transparent;
        width: 40px;
        margin-top: -3px;
        -webkit-tap-highlight-color: transparent;
    }
  
`