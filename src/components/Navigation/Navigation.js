import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Heart } from '../../images/icons/heart.svg'
import { ReactComponent as Home } from '../../images/icons/home.svg'
import { ReactComponent as Rating } from '../../images/icons/rating.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Navigation.propTypes = {
  disabled: PropTypes.bool
}

export default function Navigation() {
    const { pathname } = useLocation()

    return (
        <NavigationWrapper>
            <NavLinkStyled disabled={pathname === '/'} to='/'>
                 <Home/>
            </NavLinkStyled>
            <NavLinkFavorite disabled={pathname === '/favorites'} to='/favorites'>
                 <Heart/>
            </NavLinkFavorite>
            <NavLinkStyled disabled={pathname === '/rating'} to='/rating'>
                 <Rating/>
            </NavLinkStyled>
        </NavigationWrapper>
    )
}

const NavigationWrapper = styled.section`
    grid-column: 1/3;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 30px;
    align-items: center;
`

const NavLinkFavorite = styled(NavLink)`
    background: ${({disabled}) => disabled ? 'var(--green)' : 'var(--white)'};
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};
    -webkit-tap-highlight-color: transparent;
    margin: 0 10%;
    
    
    svg {
        fill: ${({disabled}) => disabled ? 'var(--white)' : 'var(--green)'};
        stroke: transparent;
        width: 40px;
        margin-top: -3px;
        -webkit-tap-highlight-color: transparent;
    }
`
const NavLinkStyled = styled(NavLink)`
    background: ${({disabled}) => disabled ? 'var(--green)' : 'var(--white)'};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};
    -webkit-tap-highlight-color: transparent;

    svg {
        fill: transparent;
        stroke: ${({disabled}) => disabled ? 'var(--white)' : 'var(--green)'};
        margin-top: 18px;
    }
`