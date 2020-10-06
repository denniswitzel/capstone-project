import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { ReactComponent as Filter } from '../../images/icons/filter.svg'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

Headline.propTypes = {
  headline: PropTypes.string,
  onToggle: PropTypes.func,
  active: PropTypes.string
}

export default function Headline({ headline, onToggle, active }) {
  const history = useHistory()
  function handleClick() {
    history.goBack()
  }

  return (
    <Header>
      <ArrowStyled onClick={handleClick} />
      <HeadlineStyled>{headline}</HeadlineStyled>
      <FilterStyled active={active} onClick={onToggle}/>
    </Header>
  )
}

const Header = styled.section`
  display: flex;
  grid-column: 1/3;
  margin: 20px 0;
  align-items: center;
  max-width: 400px;
`

const HeadlineStyled = styled.h2`
  display: inline;
  font-weight: 300;
  color: var(--grey);
  border-bottom: 1px solid var(--green);
  padding-bottom: 5px;
  margin: 0 auto;
  max-width: 300px;
`
const ArrowStyled = styled(Arrow)`
  fill: var(--grey);
  position: absolute;
  left: 8%;
  cursor: pointer;
`
const FilterStyled = styled(Filter)`
  position: absolute;
  right: 8%;
  cursor: pointer;
  stroke: ${({active}) => active === 'true' ? 'var(--green)' : 'var(--grey)'};
  fill: transparent;
`
