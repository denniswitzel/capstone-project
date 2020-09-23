import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { ReactComponent as Gluten } from '../../images/icons/gluten.svg'
import { ReactComponent as Soy } from '../../images/icons/soy.svg'
import Rating from '../Rating/Rating'

ProductDetail.propTypes = {
  product: PropTypes.array,
  onFavoriteClick: PropTypes.func,
  favorites: PropTypes.array,
}

export default function ProductDetail({
  product,
  onFavoriteClick,
  favorites,
  pageTransitions,
}) {
  const { id } = useParams()

  const productItem = product?.filter(
    (product) => JSON.stringify(product.id) === id
  )
  const history = useHistory()

  const variants = {
    clicked: { scale: [1, 1.5, 1], x: [0, 20, 0] },
  }

  function handleClick() {
    history.goBack()
  }

  return productItem?.map((productItem) => (
    <DetailWrapper
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitions}
      key={productItem.id}
    >
      <ColoredBackground>
        <ArrowStyled onClick={handleClick} />
        <ProductName>{productItem.title}</ProductName>
      </ColoredBackground>
      <ImageWrapper>
        <ProductImage src={productItem.image} alt={productItem.title} />
        <HeartStyled
          animate={
            favorites?.find(
              (favoriteItem) => favoriteItem.id === productItem.id
            ) && 'clicked'
          }
          variants={variants}
          favored={favorites?.find(
            (favoriteItem) => favoriteItem.id === productItem.id
          )}
          onClick={() => onFavoriteClick(productItem)}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="108.667px"
          height="101.5px"
          viewBox="0.063 -0.5 108.667 101.5"
          enable-background="new 0.063 -0.5 108.667 101.5"
        >
          <path
            stroke-width="8"
            stroke-miterlimit="10"
            d="M96.22,12.524
              C91.047,6.964,83.799,3.801,76.205,3.79c-7.601,0.009-14.854,3.17-20.035,8.731l-1.767,1.866l-1.767-1.866
              c-5.387-5.799-12.703-8.733-20.038-8.733c-6.662,0-13.34,2.42-18.606,7.313c-0.49,0.456-0.964,0.929-1.419,1.419
              c-10.904,11.762-10.904,29.938,0,41.701l39.234,41.375c0.703,0.742,1.648,1.115,2.596,1.115c0.882,0,1.766-0.324,2.457-0.979
              c0.048-0.043,0.094-0.09,0.138-0.137L96.22,54.222C107.123,42.46,107.123,24.284,96.22,12.524z"
          />
        </HeartStyled>
      </ImageWrapper>
      <ProductInformation>
        <Headline>Ingredients</Headline>
        <IngredientsList>{productItem.ingredients}</IngredientsList>
        {productItem.allergies?.length ? (
          <Headline>Allergies</Headline>
        ) : (
          <Headline></Headline>
        )}
        {productItem.allergies?.map((allergy, index) => (
          <AllergyContainer key={index}>
            {allergy === 'gluten' ? <Gluten /> : <Soy />}
            <Allergies>{allergy}</Allergies>
          </AllergyContainer>
        ))}
        <Rating
          category={productItem.category}
          id={productItem._id}
          activeRating={productItem.rating}
          numberOfRatings={productItem.numberOfRatings}
        />
      </ProductInformation>
    </DetailWrapper>
  ))
}

const DetailWrapper = styled(motion.section)`
  grid-column: 1/3;
`

const ColoredBackground = styled.section`
  display: flex;
  background: linear-gradient(
    45deg,
    rgba(75, 219, 164, 1) 0%,
    rgba(75, 219, 128, 1) 100%
  );
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100vw;
  grid-column: 1/3;
`
const ProductName = styled.h2`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.5;
  color: white;
  margin: 100px 20px 30px 30px;
  width: 40vw;
`

const ProductImage = styled.img`
  height: 180px;
  text-align: center;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  margin: -120px 30px 0 20px;
`
const ProductInformation = styled.section`
  padding: 80px 50px 20px 50px;
  grid-column: 1/3;
  width: 100%;
  text-align: left;
`
const Headline = styled.h3`
  color: #8e9091;
  grid-column: 1/3;
  width: 100%;
  text-align: left;
  font-size: 18px;
  margin: 0;
`
const IngredientsList = styled.p`
  display: inline-block;
  grid-column: 1/3;
  color: #8e9091;
  font-weight: 300;
  line-height: 1.5;
  font-size: 16px;
  text-align: left;
  max-width: 450px;
  margin: 10px 0 40px 0;
`

const AllergyContainer = styled.div`
  float: left;
  margin: 15px 30px 30px 0;
  text-align: center;

  svg {
    height: 45px;
  }
`

const Allergies = styled.p`
  color: #8e9091;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  margin: 0;
  text-transform: capitalize;
`
const ArrowStyled = styled(Arrow)`
  fill: #ffffff;
  position: absolute;
  left: 10%;
  margin-top: 30px;
  cursor: pointer;
`

const ImageWrapper = styled.section`
  float: right;
  position: relative;
`

const HeartStyled = styled(motion.svg)`
  width: 40px;
  stroke: #4bdb80;
  fill: ${({ favored }) => (favored ? '#4BDB80' : '#F4F4F4')};
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  position: absolute;
  right: 95px;
  -webkit-tap-highlight-color: transparent;
`