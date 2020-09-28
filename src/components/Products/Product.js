import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Star } from '../../images/icons/star.svg'

export default function Product({ title, image, rating, onClick }) {
  return (
    <ProductWrapper onClick={onClick}>
      <ProductName>{title}</ProductName>
      <ProductImage src={image} alt={title} />
      <RatingWrapper>
      <StyledRating>{rating}</StyledRating>
      {rating && <StyledStar />}
      </RatingWrapper>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  background: linear-gradient(
    45deg,
    rgba(75, 219, 164, 1) 0%,
    rgba(75, 219, 128, 1) 100%
  );
  border-radius: 20px 0 20px 20px;
  width: 151px;
  height: 143px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  padding-top: 15px;
  display: inline-block;
  margin: 25px 15px 50px 15px;
`

const ProductName = styled.h3`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
  width: 80%;
  height: 60px;
  text-align: center;
  margin: 0 auto;
`
const ProductImage = styled.img`
  width: 75%;
  margin-left: 15px;
  margin-top: 10px;
  -webkit-filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
`

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;  
`
const StyledRating = styled.p`
    font-size: 14px;
    color: #8e9091;
    margin: 0 0 0 10px;  
    float: left;
`

const StyledStar = styled(Star)`
  fill: #4BDB80;
  height: 20px;
  float: left;
`