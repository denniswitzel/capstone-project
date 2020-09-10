import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Headline from '../Headline/Headline'
import Product from '../Products/Product'

ProductList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
}

export default function ProductList({ product, category, headline }) {
  const history = useHistory()

  return (
    <>
      <Headline headline={headline} />
      {product?.map((productItem) => (
        <Product
          onClick={() => history.push(`/${category}/${productItem.id}`)}
          key={productItem.id}
          title={productItem.title}
          image={productItem.image}
        />
      ))}
    </>
  )
}
