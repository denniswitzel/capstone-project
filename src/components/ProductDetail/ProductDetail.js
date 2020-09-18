import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/icons/back-arrow.svg'
import { ReactComponent as Gluten } from '../../images/icons/gluten.svg'
import { ReactComponent as Soy } from '../../images/icons/soy.svg'
import { ReactComponent as Heart } from '../../images/icons/heart.svg'
import PropTypes from 'prop-types'


ProductDetail.propTypes = {
  product: PropTypes.array,
  onFavoriteClick: PropTypes.func,
  favorites: PropTypes.array,
}

export default function ProductDetail({ product, onFavoriteClick, favorites }) {
  const { id } = useParams()
  const productItem = product?.filter(product => JSON.stringify(product.id) === id)
  const history = useHistory()
  
  function handleClick() {
    history.goBack()
  }

  return (
      <>
    {productItem?.map((productItem) => (
    <DetailWrapper key={productItem.id}>
      <ColoredBackground>
        <ArrowStyled onClick={handleClick} />
        <ProductName>{productItem.title}</ProductName>
      </ColoredBackground>
      <ImageWrapper>
        <ProductImage src={productItem.image} alt={productItem.title}/>
        <HeartStyled favored={favorites?.find(favoriteItem => favoriteItem.id === productItem.id)} onClick={() => onFavoriteClick(productItem)}/>
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
      </ProductInformation>
    </DetailWrapper>
    ))}
    </>
  )
}

const DetailWrapper = styled.section`
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
  margin: 15px 30px 120px 0;
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

const HeartStyled = styled(Heart)`
  width: 40px;
  stroke: #4BDB80;
  fill: ${({favored}) => favored ? '#4BDB80' : '#F4F4F4'};
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  position: absolute;
  right: 95px;
  -webkit-tap-highlight-color: transparent;
`