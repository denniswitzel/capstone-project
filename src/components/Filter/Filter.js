import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


Filter.propTypes = {
    active: PropTypes.string,
    filters: PropTypes.array
}

export default function Filter( {filters, active, setActive }) {
    

    return (
    <ButtonWrapper >
    {filters?.map((filter) => (
    <FilterButton key={filter} active={active === filter} onClick={() => activeFilter(filter)}>{filter.includes('all') ? filter : 'Hide ' + filter}</FilterButton>))}
    </ButtonWrapper>
    )

    function activeFilter(filter){
        setActive(filter)
    }
}


const ButtonWrapper = styled.section`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
`

const FilterButton = styled.button`
    height: 35px;
    width: 25vw;
    border: 2px solid var(--green);
    color: ${({active}) => active ? 'var(--white)' : 'var(--green)'};
    border-radius: 20px;
    margin: 20px 10px 0 10px;
    background: ${({active}) => active ? 'var(--green)' : 'var(--lightgrey)'};
`