import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import Product from '../Products/Product'
import Filter from '../Filter/Filter'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'



ProductList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.number,
}

export default function ProductList({ product, headline, pageTransitions }) {
  const filters = ['Show all', 'gluten', 'soy']
  const [active, setActive] = useState(filters[0])
  const [filterToggle, setFilterToggle] = useState(false)

  const [animate, toggleFocus] = useCycle(
    { height: 40, overflowY: "auto" },
    { height: 0, overflowY: "hidden" }
  )

  const history = useHistory()
  
  return (
    <ProductListWrapper initial="out" animate="in" exit="out" variants={pageTransitions}>
      <Header toggleFocus={toggleFocus} headline={headline} active={filterToggle.toString()} onToggle={() => setFilterToggle(!filterToggle)}/>
      {filterToggle &&
      <Filter animate={animate} filters={filters} active={active} setActive={setActive}/>}
      {product?.filter(product => active === 'Show all' || !product.allergies.includes(active)).map((productItem) => (
        <Product
          onClick={() => history.push(`/${productItem.category}/${productItem.id}`)}
          key={productItem.id}
          title={productItem.title}
          image={productItem.image}
        />
      ))}
    </ProductListWrapper>
  )
}

const ProductListWrapper = styled(motion.section)`
    grid-column: 1/3;
    padding-bottom: 120px;

`