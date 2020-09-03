import React from 'react'
import nuggets from '../../mocks/nuggets.json'
import Product from '../../components/Products/Product'
import Headline from '../../components/Headline/Headline'
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
