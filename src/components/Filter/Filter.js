import React from 'react'
import styled from 'styled-components'

export default function Filter( {filters, active, setActive }) {
    return (
    <ButtonWrapper>
    {filters.map((filter) => (
    <FilterButton key={filter} active={active === filter} onClick={() => activeFilter(filter)}>{filter.includes('all') ? filter : 'Hide ' + filter}</FilterButton>))}
    </ButtonWrapper>
    )

    function activeFilter(filter){
        setActive(filter)
    }
}


const ButtonWrapper = styled.section`
    grid-column: 1/3;
    display: flex;
    margin-bottom: 20px;
`

const FilterButton = styled.button`
    width: 85px;
    height: 35px;
    border: 2px solid #4BDB80;
    color: ${({active}) => active ? 'white' : '#4BDB80'};
    border-radius: 20px;
    margin: 0 15px;
    background: ${({active}) => active ? '#4BDB80' : '#F4F4F4'};
`