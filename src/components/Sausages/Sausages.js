import React from 'react'
import sausages from '../../mocks/sausages.json'
import Headline from '../Headline/Headline'
import Product from '../Products/Product'

export default function Sausages(){
    return(
        <>
        <Headline headline="Sausages" />
        {sausages.map((sausage, index) => (
        <Product key={index} title={sausage.title} image={sausage.image} />
        ))}
        </>
    )
}
