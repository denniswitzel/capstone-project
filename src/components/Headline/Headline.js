import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

Headline.propTypes = { 
    headline: PropTypes.string,
}

Headline.defaultProps = {
    headline: 'Category name'
}

export default function Headline({headline}){
    let history = useHistory();

    function handleClick() {
    history.push("/");
    }

    return(
    <Header>
        <ArrowStyled onClick={handleClick}/>
        <HeadlineStyled>{headline}</HeadlineStyled>
    </Header>
    )
}

const Header = styled.section`
    display: flex;
    grid-column: 1/3;
    margin: 20px 0;
    text-align: center;
`

const HeadlineStyled = styled.h2`
    display: inline;
    position: relative;
    font-weight: 300;
    color: #8E9091;
    border-bottom: 1px solid #4BDB80;
    padding-bottom: 5px;
    margin: 0;
    max-width: 300px;
`
const ArrowStyled = styled(Arrow)`
    position: absolute;
    left: 30px;
    margin-top: 10px;
    cursor: pointer;
`