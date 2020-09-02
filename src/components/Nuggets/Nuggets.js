import React from 'react'
import nuggets from '../../mocks/nuggets.json'
import Headline from '../Headline/Headline'
import Product from '../Products/Product'
import PropTypes from 'prop-types'

Nuggets.propTypes = { 
    nuggets: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
}

export default function Nuggets(){
    return(
        <>
        <Headline headline="Nuggets" />
        {nuggets.map((nugget, index) => (
        <Product key={index} title={nugget.title} image={nugget.image} />
        ))}
        </>
    )
}
