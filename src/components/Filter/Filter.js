import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Filter( {filters, active, setActive, animate }) {
    
    return (
    <ButtonWrapper >
    {filters.map((filter) => (
    <FilterButton animate={animate} key={filter} active={active === filter} onClick={() => activeFilter(filter)}>{filter.includes('all') ? filter : 'Hide ' + filter}</FilterButton>))}
    </ButtonWrapper>
    )

    function activeFilter(filter){
        setActive(filter)
    }
}


const ButtonWrapper = styled(motion.section)`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
`

const FilterButton = styled(motion.button)`
    height: 35px;
    width: 25vw;
    border: 2px solid #4BDB80;
    color: ${({active}) => active ? '#FFFFFF' : '#4BDB80'};
    border-radius: 20px;
    margin: 20px 10px 0 10px;
    background: ${({active}) => active ? '#4BDB80' : '#F4F4F4'};
`