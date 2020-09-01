import React from 'react'
import kebabs from '../../mocks/kebab.json'
import Product from '../Products/Product'
import PropTypes from 'prop-types'
import Headline from '../Headline/Headline'

Kebab.propTypes = { 
    kebabs: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default function Kebab(){
    return(
        <>
        <Headline headline="Kebab" />
        {kebabs.map((kebab, index) => (
        <Product key={index} title={kebab.title} image={kebab.image} />
        ))}
        </>
    )
}

