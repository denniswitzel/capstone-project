import React from 'react'
import sausages from '../../mocks/sausages.json'
import Product from '../../components/Products/Product'
import Headline from '../../components/Headline/Headline'

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
