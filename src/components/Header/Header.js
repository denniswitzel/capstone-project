import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { ReactComponent as Filter } from '../../images/icons/filter.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

Headline.propTypes = {
  headline: PropTypes.string,
}

Headline.defaultProps = {
  headline: 'Category name',
}

export default function Headline({ headline, onToggle, active, toggleFocus }) {
  const history = useHistory()

  function handleClick() {
    history.goBack()
  }

  return (
    <Header>
      <ArrowStyled onClick={handleClick} />
      <HeadlineStyled>{headline.toUpperCase()}</HeadlineStyled>
      <FilterStyled active={active} onTap={() => toggleFocus()} onClick={onToggle}/>
    </Header>
  )
}

const Header = styled.section`
  display: flex;
  grid-column: 1/3;
  margin: 20px 0;
`

const HeadlineStyled = styled.h2`
  display: inline;
  font-weight: 300;
  color: #8e9091;
  border-bottom: 1px solid #4bdb80;
  padding-bottom: 5px;
  margin: 0 auto;
  max-width: 300px;
`
const ArrowStyled = styled(Arrow)`
  fill: #8E9091;
  position: absolute;
  left: 10%;
  margin-top: 10px;
  cursor: pointer;
`
const FilterStyled = styled(Filter)`
  position: absolute;
  right: 50px;
  margin-top: 10px;
  cursor: pointer;
  stroke: ${({active}) => active === 'true' ? '#4BDB80' : '#8E9091'};
  fill: transparent;
`
