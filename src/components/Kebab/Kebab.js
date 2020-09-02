import React from 'react'
import kebabs from '../../mocks/kebab.json'
import Product from '../Products/Product'
import PropTypes from 'prop-types'
import Headline from '../Headline/Headline'

Kebab.propTypes = { 
    kebabs: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    image: PropTypes.string,
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

