import React from 'react'
import Product from '../Products/Product'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

ProductList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

export default function ProductList({ key, title, image, id, category }) {
  let history = useHistory()

  function handleClick() {
    history.push(`/${category}/${id}`)
  }

  return <Product onClick={handleClick} key={key} title={title} image={image} />
}
